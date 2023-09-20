import { useEffect } from 'react';

const performCyberpunkRadiationOnInterval = (callback) => {
  useEffect(() => {
    const interval = setInterval(() => {
      callback((prevGlow) => !prevGlow);
    }, 1000);

    return () => clearInterval(interval);
  }, [callback]);
};

export default performCyberpunkRadiationOnInterval;