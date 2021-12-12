import React from 'react';
import Block from '../../Block/Block';
import s from './contributor.module.css';

interface IProps {
  date: Date | string;
  name: string;
  amount: string;
}

const Contributor: React.FC<IProps> = React.memo(({ date, name, amount }) => {
  return (
    <Block>
      <div className={s.contributor}>
        <div className={s.contributor__date}>{date}</div>
        <div className={s.contributor__name}>{name}</div>
        <div className={s.contributor__value}>{amount}</div>
      </div>
    </Block>
  );
});

export default Contributor;
