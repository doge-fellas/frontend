import React from 'react';
import s from './countdown.module.css';

const Countdown: React.FC = React.memo(() => {
  return (
    <div className={s.countdown}>
      <div className={s.countdown__item}>
        <div className={s.item__value}>00</div>
        <small className={s.countdown__small}>DAYS</small>
      </div>
      <div className={s.countdown__item}>
        <div className={s.item__value}>08</div>
        <small className={s.countdown__small}>HOURS</small>
      </div>
      <div className={s.countdown__item}>
        <div className={s.item__value}>33</div>
        <small className={s.countdown__small}>MINUTES</small>
      </div>
      <div className={s.countdown__item}>
        <div className={s.item__value}>45</div>
        <small className={s.countdown__small}>SECONDS</small>
      </div>
    </div>
  );
});

export default Countdown;
