import React from 'react';
import s from './countdown.module.css';
import { useCountDown } from '../../hooks/useCoutDown';

interface IProps {
  countDownDateProp?: Date;
  className?: any;
  showExtra?: boolean;
  [key: string]: any;
}

const Countdown: React.FC<IProps> = React.memo(
  ({ showExtra = true, className, countDownDateProp, ...props }) => {
    const time = useCountDown(countDownDateProp);

    return (
      <div {...props} className={`${s.countdown} ${className}`}>
        <div className={s.countdown__item}>
          <div className={s.item__value}>{time?.days || 0}</div>
          {showExtra && <small className={s.countdown__small}>DAYS</small>}
        </div>
        <div className={s.countdown__item}>
          <div className={s.item__value}>{time?.hours || 0}</div>
          {showExtra && <small className={s.countdown__small}>HOURS</small>}
        </div>
        <div className={s.countdown__item}>
          <div className={s.item__value}>{time?.minutes || 0}</div>
          {showExtra && <small className={s.countdown__small}>MINUTES</small>}
        </div>
        <div className={s.countdown__item}>
          <div className={s.item__value}>{time?.seconds || 0}</div>
          {showExtra && <small className={s.countdown__small}>SECONDS</small>}
        </div>
      </div>
    );
  },
);

export default Countdown;
