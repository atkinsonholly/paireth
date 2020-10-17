import Web3Modal from "web3modal";
import WalletConnectProvider from "@walletconnect/web3-provider";

const INFURA_ID = "https://mainnet.infura.io/v3/65504bd4d88b4664946a8372940c209d";

// Web3Modal also supports many other wallets.
// You can see other options at https://github.com/Web3Modal/web3modal
export const web3Modal = new Web3Modal({
  network: "mainnet",
  cacheProvider: true,
  providerOptions: {
    walletconnect: {
      package: WalletConnectProvider,
      options: {
        infuraId: INFURA_ID,
      },
    },
  },
});

export const logoutOfWeb3Modal = async function() {
  await web3Modal.clearCachedProvider();
  window.location.reload();
};
