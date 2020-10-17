import React, { useCallback, useEffect, useState } from "react";
// import { Contract } from "@ethersproject/contracts";
import { Web3Provider } from "@ethersproject/providers";
import { useQuery } from "@apollo/react-hooks";

import { Body, Button, Header, Image, HeroImage, Link, LogoSection, TokenInput, Tokens, Label, Subtitle, PairAddress, About } from "./components";
import { web3Modal, logoutOfWeb3Modal } from "./utils/web3Modal";
import logo from "./Paireth_large.png";
import uniswapLogo from "./uniswap.svg";

// import { addresses, abis } from "@project/contracts";
import GET_TRANSFERS from "./graphql/subgraph";

import { checkForPair, createPair } from "./utils/generatePair";

const SAND_ADDRESS_MAINNET = "0x3845badade8e6dff049820680d1f14bd3903a5d0";
const ETH_ADDRESS_MAINNET = "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2";
const PAIR_ADDRESS = "0x3dd49f67e9d5bc4c5e6634b3f70bfd9dc1b6bd74";

// async function readOnChainData() {
//   // Should replace with the end-user wallet, e.g. Metamask
//   const defaultProvider = getDefaultProvider();

//   // Create an instance of an ethers.js Contract
//   // Read more about ethers.js on https://docs.ethers.io/v5/api/contract/contract/
//   const ceaErc20 = new Contract(addresses.ceaErc20, abis.erc20, defaultProvider);
//   // A pre-defined address that owns some CEAERC20 tokens
//   const tokenBalance = await ceaErc20.balanceOf("0x3f8CB69d9c0ED01923F11c829BaE4D9a4CB6c82C");
//   console.log({ tokenBalance: tokenBalance.toString() });
// }

function WalletButton({ provider, loadWeb3Modal }) {
  return (
    <Button
      onClick={() => {
        if (!provider) {
          loadWeb3Modal();
        } else {
          logoutOfWeb3Modal();
        }
      }}
    >
      {!provider ? "Connect Wallet" : "Disconnect Wallet"}
    </Button>
  );
}

function App() {
  const { loading, error, data } = useQuery(GET_TRANSFERS); // update for subgraph
  const [provider, setProvider] = useState();
  const [token0, setToken0] = useState("");
  const [token1, setToken1] = useState("");
  const [returnedPairAddress, setReturnedPairAddress] = useState(null);

  const submitTokensForChecking = async(provider, token0, token1) => {
    let pairAddress;
    if (provider) {
      pairAddress = await checkForPair(provider.getSigner(), token0, token1);
    }
    console.log(pairAddress)
    setReturnedPairAddress(pairAddress);
    return pairAddress;
  }

  const submitTokensForPairCreation = async(provider, token0, token1) => {
    let pairAddress;
    if (provider) {
      pairAddress = await createPair(provider.getSigner(), token0, token1); 
    }
    console.log(pairAddress)
    setReturnedPairAddress(pairAddress)
    return pairAddress;
  }

  const checkReturnedPairAddress = () => {
    if (returnedPairAddress.pair === "0x0000000000000000000000000000000000000000") {
      return (
        <>
          <div>Pair does not exist on selected network. Would you like to create this pair?</div>
          <Button onClick={() => submitTokensForPairCreation(provider, token0, token1)}>
            Create Pair!
          </Button>
        </>
      )
    }
    else {
      return (
        <>Pair Address: {returnedPairAddress}</>
      )
    }
  }

  /* Open wallet selection modal. */
  const loadWeb3Modal = useCallback(async () => {
    const newProvider = await web3Modal.connect();
    setProvider(new Web3Provider(newProvider));
  }, []);

  /* If user has loaded a wallet before, load it automatically. */
  useEffect(() => {
    if (web3Modal.cachedProvider) {
      loadWeb3Modal();
    }
  }, [loadWeb3Modal]);

  React.useEffect(() => {
    if (!loading && !error && data && data.transfers) {
      console.log({ transfers: data.transfers }); // update for subgraph
    }
  }, [loading, error, data]);

  return (
    <>
      <Header>
        <LogoSection>
          <Image src={uniswapLogo} alt="react-logo" />
          <Link
            href="https://info.uniswap.org/pairs"
            style={{ marginTop: "8px" }}
          >
            Uniswap Pairs
          </Link>
        </LogoSection>
        <WalletButton provider={provider} loadWeb3Modal={loadWeb3Modal} />
      </Header>
      <Body>
        <HeroImage src={logo} alt="react-logo" />
        <Subtitle>Enter Token Addresses</Subtitle>
        <About>Search Uniswap token pairs. Create new ones.</About>
        <Tokens>
          <Label>Token0</Label>
          <TokenInput placeholder="Token address" onChange={e => setToken0(e.target.value)} value={token0}></TokenInput>
          <Label>Token1</Label>
          <TokenInput placeholder="Token address" onChange={e => setToken1(e.target.value)} value={token1}></TokenInput>
        </Tokens>
        
        <Button onClick={() => submitTokensForChecking(provider, token0, token1)}>
          Find Pair!
        </Button>
        <PairAddress>{returnedPairAddress ? checkReturnedPairAddress(): null}</PairAddress>
      </Body>
    </>
  );
}

export default App;
