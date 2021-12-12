import React from 'react';
import s from './presale.module.css';
import Block from '../Block/Block';
import Countdown from '../Countdown/Countdown';

const Presale:React.FC = () => {
  return (
    <div className={s.content}>
      <Block>
        <>
        Presale starts in
        <Countdown/>
        </>
      </Block>
    </div>
  )
}

export default Presale