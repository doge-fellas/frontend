import React from 'react';
import s from './connectWalletSide.module.css';
import Button from '../Button/Button';
import Countdown from '../Countdown/Countdown';
import logo from '../../utilities/images/logo.png';

const ConnectWalletSide: React.FC = React.memo(() => {
  return (
    <div className={s.block}>
      <h2 className={s.block__title}>CURRENT ERA: DILLINGER</h2>

      <img src={logo} alt={'dogefellas_logo'} className={s.block__logo} />
      <Countdown />
      <Button>Connect wallet</Button>
    </div>
  );
});

export default ConnectWalletSide;
