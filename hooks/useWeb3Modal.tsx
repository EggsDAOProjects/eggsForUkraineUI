import React from 'react';
import WalletConnectProvider from "@walletconnect/web3-provider";
import { useEthers } from '@usedapp/core';
import {
  RPC_URLS,
  supportedChainIds,
} from "../constants/networks";
import { Web3ModalConnector } from "../utils/Web3ModalConnector";

const web3ModalOptions = {
  network: "mainnet", // optional
  cacheProvider: false, // optional
  providerOptions: {
    walletconnect: {
      package: WalletConnectProvider, // required
      options: {
        rpc: RPC_URLS
      },
    },
  },
};

export const useWeb3Modal = () => {
  const { activate } = useEthers()

  const openWeb3Modal = async () => {
    const injected = new Web3ModalConnector(
      supportedChainIds,
      web3ModalOptions
    );

    await activate(injected);
  }

  return openWeb3Modal;
}
