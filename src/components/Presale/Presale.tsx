import React, { useState } from 'react';
import s from './presale.module.css';
import Block from '../Block/Block';
import PresaleCountdown from './PresaleCountdown/PresaleCountdown';
import { useWeb3 } from '../../hooks/useWeb3';
import Contributor from './Contributor/Contributor';

const Presale: React.FC = () => {
  const { init, currentAccount, balance, goalProgress, nftContract, web3 } =
    useWeb3();
  const [input, setInput] = useState('0');

  const sendMoney = async (value: number) => {
    await nftContract.methods
      .safeTransferFrom(
        currentAccount,
        nftContract.options.address,
        web3?.utils?.toWei(`${value}`, 'ether'),
      )
      .call({
        from: currentAccount,
        value: web3?.utils?.toWei(`${value}`, 'ether'),
        gasLimit: 3000000000,
      });
  };
  return (
    <div className={s.content}>
      <Block className={s.info}>
        <div className={s.info__content}>
          <h1 className={s.title}>Presale starts in</h1>
          <PresaleCountdown />
        </div>
      </Block>
      <Block className={s.status}>
        <div className={s.status__content}>
          <div className={s.progress_bar}>
            <div
              className={s.progress}
              style={{ width: `${(goalProgress / 1000) * 100}%` }}
            />
          </div>
          <div className={s.values}>
            <small>0 WEI</small>
            <small>1000 WEI</small>
          </div>
        </div>
      </Block>

      <Block className={s.connect_wallet}>
        {currentAccount ? (
          <div className={s.wallet}>
            <h2 className={s.balance}>
              Connected Balance: {balance ? `${balance} WEI` : 'Loading...'}
            </h2>
            <div className={s.wallet__input_wrapper}>
              <input
                type={'number'}
                max={balance}
                value={input}
                onChange={(e) => {
                  if (e.target.value <= balance) {
                    setInput(e.target.value);
                  }
                }}
                min={0}
                className={s.wallet__input}
              />
              <span className={s.max} onClick={() => setInput(balance)}>
                MAX
              </span>
            </div>

            <button
              className={s.connect_wallet__button}
              onClick={async () => {
                await sendMoney(+input);
              }}
            >
              Contribute
            </button>
          </div>
        ) : (
          <button onClick={() => init()} className={s.connect_wallet__button}>
            Connect Wallet
          </button>
        )}
      </Block>
      <h2 className={s.title}>Last Contributions</h2>
      <Contributor name={'heea.1243'} amount={'42 WEI'} date={'1 month ago'} />
      <Contributor name={'heea.1243'} amount={'42 WEI'} date={'1 month ago'} />
      <Contributor name={'heea.1243'} amount={'42 WEI'} date={'1 month ago'} />
      <Contributor name={'heea.1243'} amount={'42 WEI'} date={'1 month ago'} />
      <Contributor name={'heea.1243'} amount={'42 WEI'} date={'1 month ago'} />
      <Contributor name={'heea.1243'} amount={'42 WEI'} date={'1 month ago'} />
    </div>
  );
};

export default Presale;
