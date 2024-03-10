import { useEffect, useState } from 'react';
import P from 'prop-types';

export default function ProgressBar({ max }) {
  const [remainingTime, setRemainingTime] = useState(max);

  useEffect(() => {
    const interval = setInterval(() => {
      console.log('interval');
      setRemainingTime((prevTime) => prevTime - 10);
    }, 10);

    return () => {
      console.log('cleaning up interval');
      clearInterval(interval);
    };
  }, []);

  return <progress value={remainingTime} max={max} />;
}

ProgressBar.propTypes = {
  max: P.number,
};
