import { useState } from "react";

export function useShowComponentTimer(): [boolean, () => void] {
  const [show, setShow] = useState(false);

  const startTimer = () => {
    setShow(true);
    setTimeout(() => {
      setShow(false);
    }, 4000);
  };

  return [show, startTimer];
}
