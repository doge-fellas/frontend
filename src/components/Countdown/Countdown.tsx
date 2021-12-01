import React, { useEffect, useState } from 'react';
import s from './countdown.module.css';

type ITime = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
} | null;

const Countdown: React.FC = React.memo(() => {
  const [countDownDate, setCountDownDate] = useState(
    new Date('January 1, 2022 00:00:00').getTime(),
  );
  const [time, setTime] = useState<ITime>();
  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = countDownDate - now;
      if (distance < 0) clearInterval(timer);
      setTime({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
        ),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      });
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, [countDownDate]);

  return (
    <div className={s.countdown}>
      <div className={s.countdown__item}>
        <div className={s.item__value}>{time?.days || 0}</div>
        <small className={s.countdown__small}>DAYS</small>
      </div>
      <div className={s.countdown__item}>
        <div className={s.item__value}>{time?.hours || 0}</div>
        <small className={s.countdown__small}>HOURS</small>
      </div>
      <div className={s.countdown__item}>
        <div className={s.item__value}>{time?.minutes || 0}</div>
        <small className={s.countdown__small}>MINUTES</small>
      </div>
      <div className={s.countdown__item}>
        <div className={s.item__value}>{time?.seconds || 0}</div>
        <small className={s.countdown__small}>SECONDS</small>
      </div>
    </div>
  );
});

export default Countdown;
