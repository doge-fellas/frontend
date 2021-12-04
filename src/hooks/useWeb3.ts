import { useState } from 'react';
import Web3 from 'web3';
import ABI from '../web3/ABI.json';

type IUseWeb3 = () => [init: any, currentAccount: any];

export const useWeb3: IUseWeb3 = () => {
  const [currentAccount, setCurrentAccount] = useState(null);

  const provider = (window as any).ethereum;

  const init = () => {
    if (typeof provider !== undefined) {
      provider
        .request({ method: 'eth_requestAccounts' })
        .then((accounts: any) => {
          setCurrentAccount(accounts[0]);
        })
        .catch((err: Error) => {
          console.log(err);
        });
      (window as any).ethereum.on('accountsChanged', (accounts: any) => {
        setCurrentAccount(accounts[0]);
      });
    }

    const web3 = new Web3(provider);
    const nftContract = new web3.eth.Contract(
      ABI as any,
      process.env.REACT_APP_CONTRACT_ADDRESS,
    );
  };

  return [init, currentAccount];
};
