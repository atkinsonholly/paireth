import React, { useCallback, useEffect, useState } from "react";
// import { Contract } from "@ethersproject/contracts";
import { Web3Provider } from "@ethersproject/providers";
import { useQuery } from "@apollo/react-hooks";

import { Body, Button, Header, Image, HeroImage, Link, LogoSection, Tokens, Token, Label, Subtitle, PairAddress, About, Container, CreatePairMessage } from "./components";
import { web3Modal, logoutOfWeb3Modal } from "./utils/web3Modal";
import logo from "./Paireth_large.png";
import uniswapLogo from "./uniswap.svg";

// import { addresses, abis } from "@project/contracts";
import GET_TRANSFERS from "./graphql/subgraph";

import { checkForPair, createPair } from "./utils/generatePair";

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
          <CreatePairMessage>Pair does not exist on selected network. Would you like to create this pair?</CreatePairMessage>
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
          <Link href="https://info.uniswap.org/pairs">
            Uniswap Pairs
          </Link>
          <Link href="https://github.com/atkinsonholly/paireth">
            Github
          </Link>
        </LogoSection>
        <WalletButton provider={provider} loadWeb3Modal={loadWeb3Modal} />
      </Header>
      <Body>
        <HeroImage src={logo} alt="react-logo" />
        <Container>
          <Subtitle>Enter token addresses</Subtitle>
          <About>Search Uniswap token pairs. Create new ones.</About>
          <Tokens>
            <Token>
              <Label>token0</Label>
              <input style={{
                "box-sizing": "border-box",
                "width": "400px",
                "min-width": "300px",
                "height": "30px",
                "border-radius": "6px",
                "border": "none",
                "outline": "none",
                "font-size": "16px",
                "padding": "10px",
                "overflow": "scroll",
                "resize": "none",
              }} placeholder="Token address" onChange={e => setToken0(e.target.value)} value={token0}></input>
            </Token>
            <Token>
              <Label>token1</Label>
              <input style={{
                "box-sizing": "border-box",
                "width": "400px",
                "min-width": "300px",
                "height": "30px",
                "border-radius": "6px",
                "border": "none",
                "outline": "none",
                "font-size": "16px",
                "padding": "10px",
                "overflow": "scroll",
                "resize": "none",
              }} placeholder="Token address" onChange={e => setToken1(e.target.value)} value={token1}></input>
            </Token>
          </Tokens>
          <Button onClick={() => submitTokensForChecking(provider, token0, token1)}>
            Find Pair!
          </Button>
        </Container>
        <PairAddress>{returnedPairAddress ? checkReturnedPairAddress(): null}</PairAddress>
      </Body>
    </>
  );
}

export default App;
