import { useCounter } from "../hooks/useCounter";

export const Counter = () => {

  const { counter, increaseBy } = useCounter();

  return (
    <>
      <h3>Contador <small>{counter}</small></h3>

      <div className="flex gap-2">
        <button className="bg-red-500 hover:bg-red-600  p-2 rounded-xl w-10  text-white" onClick={() => increaseBy(-1)}>-1</button>
        <button className="bg-blue-500 hover:bg-blue-600 p-2 rounded-xl w-10  text-white" onClick={() => increaseBy(+1)}>+1</button>
      </div>

    </>
  )
}
