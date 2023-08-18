import React, { useState, useEffect } from 'react';

function Countdown() {
  const targetDate = new Date('2023-09-19T00:00:00').getTime(); // Target date and time

  const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining());

  function calculateTimeRemaining() {
    const now = new Date().getTime();
    const difference = targetDate - now;

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    return { days, hours, minutes, seconds };
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeRemaining(calculateTimeRemaining());
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);
  return (
    <div >
      <div >
        <div >
            <span>
            {timeRemaining.days} 
            : 
            {timeRemaining.hours}
            :
            {timeRemaining.minutes}
            :
            {timeRemaining.seconds}
            </span>
        </div>
      </div>
    </div>
  );
}

export default Countdown;
