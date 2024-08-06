// import "./App.css";
import { useEffect, useState } from "react";
import { useCounter } from "./store/useCounter";
import Card from "./Components/card";

function App() {
  const { count, increaseCount } = useCounter();

  const [counter, setCounter] = useState(0);
  useEffect(() => {
    setCounter(count);
  }, [count]);
  return (
    <>
      <div className="flex justify-center bg-slate-950 text-white">
        <div>
          <p>counter:{counter}</p>
          <button
            type="button"
            onClick={() => {
              increaseCount(5);
            }}
          >
            Increase Count
          </button>
        </div>
      </div>
      <Card name="saugat" address="palpa" />
    </>
  );
}

export default App;
