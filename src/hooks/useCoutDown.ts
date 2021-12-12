import { useEffect, useState } from 'react';

type ITime = {
  days: string;
  hours: string;
  minutes: string;
  seconds: string;
} | null;


export const useCountDown = (countDownDateProp?: Date): ITime|undefined => {
  const [countDownDate] = useState(
    new Date(countDownDateProp ?? 'January 1, 2022 00:00:00').getTime(),
  );

  const [time, setTime] = useState<ITime>();

  const handleSetTime = (countDownDate: number) => {
    let now = new Date().getTime();
    let distance = countDownDate - now;
    const days =  Math.floor(distance / (1000 * 60 * 60 * 24))
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
    const seconds = Math.floor((distance % (1000 * 60)) / 1000)
    setTime({
      days: days< 10 ? `0${days}` : `${days}`,
      hours: hours< 10 ? `0${hours}` : `${hours}`,
      minutes: minutes< 10 ? `0${minutes}` : `${minutes}`,
      seconds: seconds< 10 ? `0${seconds}` : `${seconds}`,
    });
  };

  useEffect(() => {
    handleSetTime(countDownDate);
    const timer = setInterval(() => {
      handleSetTime(countDownDate);
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, [countDownDate]);

  return time

}