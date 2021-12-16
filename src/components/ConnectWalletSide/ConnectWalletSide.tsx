import React from 'react';
import s from './connectWalletSide.module.css';
import Button from '../Button/Button';
import Countdown from '../Countdown/Countdown';
import logo from '../../utilities/images/logo.png';
import { useWeb3 } from '../../hooks/useWeb3';

const ConnectWalletSide: React.FC = React.memo(() => {
  const { init, currentAccount } = useWeb3();

  const handleConnectWallet = async () => {
    await init();
  };

  return (
    <div className={s.block}>
      <h2 className={s.block__title}>CURRENT ERA: DILLINGER</h2>
      <img src={logo} alt={'dogefellas_logo'} className={s.block__logo} />
      <Countdown />
      <Button onClick={handleConnectWallet} className={s.block__button}>
        {currentAccount || 'Connect wallet'}
      </Button>
    </div>
  );
});

export default ConnectWalletSide;
