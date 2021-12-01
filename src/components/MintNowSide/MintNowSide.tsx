import React from 'react';
import s from './mintNowSide.module.css';
import Button from '../Button/Button';
import mintImg from '../../utilities/images/mint.png';

const MintNowSide: React.FC = React.memo(() => {
  return (
    <div className={s.block}>
      <img src={mintImg} alt={'dogefellas_nft'} />
      <Button className={s.button}>Mint now</Button>
    </div>
  );
});

export default MintNowSide;
