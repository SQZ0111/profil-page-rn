import { useEffect } from 'react';


type SetBooleanState = React.Dispatch<React.SetStateAction<boolean>>;

const performCyberpunkRadiationOnInterval = (setGlow: SetBooleanState) : void => {
  useEffect(() => {
    const interval = setInterval(() => {
      setGlow((prevGlow) => !prevGlow);
    }, 1000);

    return () => clearInterval(interval);
  }, [setGlow]);
};

export default performCyberpunkRadiationOnInterval;