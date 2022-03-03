import {
  Mainnet,
  Hardhat,
  Chain,
} from '@usedapp/core'

export const RPC_URLS = {
  1: process.env.NEXT_PUBLIC_RPC_URL || '',
  31337: 'http://localhost:8545',
}

export const CHAINID_NAMES: {[key: number]: string} = {
  1: 'mainnet',
  31337: 'localhost',
}

export const supportedChains = [ Mainnet, Hardhat ];
export const supportedChainIds = supportedChains.map((network: Chain) => network.chainId);

const dest = process.env.NEXT_PUBLIC_DEPLOY_DEST ?? 'local';
export const defaultChainId = Mainnet.chainId;

export const isSupportedChain = (chainId: number) => supportedChainIds.includes(chainId);
