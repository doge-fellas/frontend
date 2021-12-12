import React from 'react';
import { useCountDown } from '../../../hooks/useCoutDown';
import s from './presaleCountdown.module.css';

const PresaleCountdown = React.memo(() => {
  const time = useCountDown()
  return (
    <div className={s.countdown}>
      <div className={s.countdown__item}>
        {time?.days}
      </div><div className={s.countdown__item}>
      {time?.hours}
    </div><div className={s.countdown__item}>
      {time?.minutes}
    </div><div className={s.countdown__item}>
      {time?.seconds}
    </div>
    </div>
  )
})

export default PresaleCountdown