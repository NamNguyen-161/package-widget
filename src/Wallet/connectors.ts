import { InjectedConnector } from "@web3-react/injected-connector";
import { ethers } from "ethers";
// import { WalletConnectConnector } from "@web3-react/walletconnect-connector";

export const supportedChainIds = [3];

// const POLLING_INTERVAL = 8000
// const RPC_URLS: { [chainId: number]: string } = {
//   1: process.env.REACT_APP_URL_CHAINID_MAINNET as string,
//   3: process.env.REACT_APP_URL_CHAINID_ROPSTEN as string,
// }

export const injected = new InjectedConnector({
  supportedChainIds,
});

// export const walletconnect = new WalletConnectConnector({
//   // rpc: {
//   //   [+process.env.REACT_APP_CHAINID]: 'https://rpc-mumbai.maticvigil.com/',
//   // },
//   infuraId: "dd06a82f76af41d0916cf0f117b65024",
//   supportedChainIds,
//   // chainId: +process.env.REACT_APP_CHAINID,
//   bridge: "https://bridge.walletconnect.org/",
//   qrcode: true,
//   // pollingInterval: POLLING_INTERVAL,
// });

export const provider = ethers.getDefaultProvider(3);
