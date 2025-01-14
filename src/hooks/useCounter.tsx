import { useState } from "react";

export const useCounter = () => {
  const [counter, setCounter] = useState<number>(0);

  const increaseBy = (value: number) => {
    setCounter(counter + value)
  }


  return {
    // propiedades
    counter,

    // metodos
    increaseBy
  }
}
