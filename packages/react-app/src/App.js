import React, { useCallback, useEffect, useState } from "react";
import { Web3Provider } from "@ethersproject/providers";
import { useQuery } from "@apollo/react-hooks";
import { web3Modal, logoutOfWeb3Modal } from "./utils/web3Modal";
import { checkForPair, createPair } from "./utils/generatePair";
import { withStyles } from '@material-ui/core/styles'
import {styles} from "./components/styles";
import logo from "./Paireth.png";
import uniswapLogo from "./uniswap.svg";

// import { Contract } from "@ethersproject/contracts";
// import { addresses, abis } from "@project/contracts";

import GET_TRANSFERS from "./graphql/subgraph"; // update for subgraph

const App = (props) => {
  const { classes } = props
  const { loading, error, data } = useQuery(GET_TRANSFERS); // update for subgraph
  const [provider, setProvider] = useState();
  const [token0, setToken0] = useState("");
  const [token1, setToken1] = useState("");
  const [returnedPairAddress, setReturnedPairAddress] = useState(null);
  const [pendingTx, setPendingTx] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

  const submitTokensForChecking = async() => {
    setErrorMessage(false);
    setPendingTx(true);
    let pairAddress;
    if (provider) {
      pairAddress = await checkForPair(provider.getSigner(), token0, token1, setErrorMessage);
    }
    setReturnedPairAddress(pairAddress);
    setPendingTx(false);
    return pairAddress;
  }

  const submitTokensForPairCreation = async() => {
    setErrorMessage(false);
    setPendingTx(true);
    let pairAddress;
    if (provider) {
      pairAddress = await createPair(provider.getSigner(), token0, token1, setErrorMessage); 
    }
    setReturnedPairAddress(pairAddress);
    setPendingTx(false);
    return pairAddress;
  }

  const checkReturnedPairAddress = () => {
    if (returnedPairAddress.pair === "0x0000000000000000000000000000000000000000") {
      return (
        <>
          <div className={classes.createPairMessage}>Pair does not exist on selected network. Would you like to create this pair?</div>
          <button className={pendingTx ? classes.disabledButton : classes.button} onClick={submitTokensForPairCreation}>
            Create Pair!
          </button>
        </>
      )
    }
    else {
      return (
        <>Pair Address: {returnedPairAddress}</>
      )
    }
  }

  const checkForError = () => {
    if (errorMessage) {
      return (
        <span className={classes.error}>Error: {errorMessage}</span>
      )
    }
  }

  const clearAll = () => {
    setToken0("");
    setToken1("");
    setErrorMessage(null);
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
      <div className={classes.headerSection}>
        <div className={classes.logoSection}>
          <div className={classes.image}>
            <img src={uniswapLogo} alt="react-logo" />
          </div> 
          <a className={classes.link} href="https://info.uniswap.org/pairs">
            Uniswap Pairs
          </a>
          <a className={classes.link} href="https://github.com/atkinsonholly/paireth">
            Github
          </a>
        </div>
        <button className={classes.button}
          onClick={() => {
            if (!provider) {
              loadWeb3Modal();
            } else {
              logoutOfWeb3Modal();
            }
          }}
        >
          {!provider ? "Connect Wallet" : "Disconnect Wallet"}
        </button>
      </div>
      <div className={classes.pairContent}>
        <div className={classes.heroImage}>
          <img src={logo} alt="react-logo" />
        </div> 
        <div className={classes.container}>
          <div className={classes.subtitle}>Enter token addresses</div>
          <div className={classes.about}>Search Uniswap token pairs. Create new ones.</div>
          <div className={classes.tokens}>
            <div className={classes.token}>
              <div className={classes.label}>token0</div>
              <input className={classes.tokenInput} placeholder="Token address" onChange={e => setToken0(e.target.value)} value={token0}></input>
            </div>
            <div className={classes.token}>
              <div className={classes.label}>token1</div>
              <input className={classes.tokenInput} placeholder="Token address" onChange={e => setToken1(e.target.value)} value={token1}></input>
            </div>
          </div>
          <div className={classes.buttonGroup}>
            <button className={pendingTx || token0 === "" || token1 === "" ? classes.disabledButton : classes.button} onClick={submitTokensForChecking}>
              Find Pair!
            </button>
            <span className={token0 !== "" || token1 !== "" || errorMessage ? classes.trash : classes.disabledTrash} onClick={clearAll}>X</span>
          </div>
        </div>
        <div className={classes.pairAddress}>{returnedPairAddress ? checkReturnedPairAddress(): checkForError()}</div>
      </div>
    </>
  );
}

export default withStyles(styles)(App);
