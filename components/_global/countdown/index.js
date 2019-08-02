import React, { useState, useEffect } from 'react';
import CountdownTimer from '@assets/_global/js/partials/countdown-timer';

export default function Countdown({ endDate }) {

  const [days, setDay] = useState(0);
  const [hours, setHour] = useState(0);
  const [minutes, setMinute] = useState(0);
  const [seconds, setSecond] = useState(0);

  useEffect(() => {
    return () => {
      if (!endDate) return;
      CountdownTimer.countdown(endDate, setTime);
    };
  })

  function setTime(timeObj) {
    if (!timeObj) return;

    const { days, hours, minutes, seconds } = timeObj;

    setDay(days);
    setHour(hours);
    setMinute(minutes);
    setSecond(seconds);
  }

  return (
    <>
      <span className="countdown">
        <span className="countdown__piece  days">
          <span className="time">{days}</span>
          <span className="label">days</span>
        </span>
        <span className="countdown__piece  hours">
          <span className="time">{hours}</span>
          <span className="label">hours</span>
        </span>
        <span className="countdown__piece  minutes">
          <span className="time">{minutes}</span>
          <span className="label">mins</span>
        </span>
        <span className="countdown__piece  seconds">
          <span className="time">{seconds}</span>
          <span className="label">secs</span>
        </span>
      </span>
    </>
  )
}
