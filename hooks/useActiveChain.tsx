import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from 'react';

import { isSupportedChain } from "../constants/networks";

interface Props {
  children: ReactNode;
}

interface IActiveChainContext {
  wrongChain: boolean;
  currentChain: number;
}

const ActiveChainContext = createContext<IActiveChainContext>({
  wrongChain: false,
  currentChain: 0,
});

export const useActiveChain = () => {
  const context = useContext(ActiveChainContext);

  return context;
}

export const ActiveChainProvider = ({ children } : Props) => {
  const [wrongChain, setWrongChain] = useState(false);
  const [currentChain, setCurrentChain] = useState<number>(0);

  useEffect(() => {
    if (window.ethereum) {
      setTimeout(() => {
        window.ethereum.request({ method: 'eth_chainId'  })
          .then((chainId: string) => {
            setCurrentChain(parseInt(chainId));
          });
      });
    }
  }, []);

  useEffect(() => {
    window.ethereum && window.ethereum.on('chainChanged', (chainId: string) => {
      setCurrentChain(parseInt(chainId));
    });
  }, []);

  useEffect(() => {
    if (!currentChain) {
      return;
    }
    if (isSupportedChain(currentChain)) {
      setWrongChain(false);
      return;
    }
    setWrongChain(true);
  }, [currentChain]);

  return (
    <ActiveChainContext.Provider
      value={{
        wrongChain,
        currentChain
      }}
    >
      {children}
    </ActiveChainContext.Provider>
  );
}
