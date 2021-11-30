import React from 'react';
import s from './connectWalletSide.module.css';
import logo from '../../utilities/images/logo.png';
import Button from '../Button/Button';

const ConnectWalletSide: React.FC = React.memo(() => {
  return (
    <div className={s.block}>
      <h2>CURRENT ERA: DILLINGER</h2>
      <img src={logo} alt={'dogefellas_logo'} />
      <Button>Connect wallet</Button>
    </div>
  );
});

export default ConnectWalletSide;
