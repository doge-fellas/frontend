import { useCallback, useState } from 'react';
import Web3 from 'web3';
import ABI from '../web3/ABI.json';

export const useWeb3: any = () => {
  const [currentAccount, setCurrentAccount] = useState(null);
  const [web3, setWeb3] = useState<any>(null);
  const [nftContract, setNftContract] = useState<any>(null);
  const [balance, setCurrentBalance] = useState(null);
  const [goalProgress, setGoalProgress] = useState<any>(null);

  let accounts: any;
  const provider = (window as any).ethereum;

  const init = useCallback(async () => {
    if (typeof provider !== undefined) {
      accounts = await provider.request({ method: 'eth_requestAccounts' });
      await setCurrentAccount(accounts[0]);

      (window as any).ethereum.on('accountsChanged', async (accounts: any) => {
        await setCurrentAccount(accounts[0]);
      });
    }
    const _web3 = new Web3(provider);
    await setWeb3(_web3);
    const _nftContract = new _web3.eth.Contract(
      ABI as any,
      process.env.REACT_APP_CONTRACT_ADDRESS,
    );

    await setCurrentBalance(
      accounts[0] && (await _web3.eth.getBalance(accounts[0])),
    );
    await setGoalProgress(
      await _web3.eth.getBalance(_nftContract.options.address),
    );

    const subscription = _web3.eth
      .subscribe(
        'logs',
        {
          address: _nftContract.options.address,
        },
        function (error: any, result: any) {},
      )
      .on('data', function (log: any) {
        _web3.eth
          .getTransaction(log.transactionHash)
          .then(function (transaction: any) {
            if (+transaction.value > 0) {
              console.log(
                'Ether sent from ' + transaction.from + ' to ' + transaction.to,
              );
            }
          });
      });

    return setNftContract(_nftContract);
  }, [provider, setCurrentAccount, setCurrentBalance]);

  return { init, currentAccount, balance, nftContract, goalProgress, web3 };
};
