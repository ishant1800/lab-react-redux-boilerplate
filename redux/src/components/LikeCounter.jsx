import React, { useReducer } from "react";
import { initialCounterState, counterReducer } from "./Reducer";

const LikeCounter = () => {
  const [counterState, dispatchAction] = useReducer(counterReducer, initialCounterState);

  const handleIncrement = () => {
    dispatchAction({ type: "INCREMENT" });
  };

  const handleDecrement = () => {
    dispatchAction({ type: "DECREMENT" });
  };

  return (
    <div>
      <h1>{counterState.countValue}</h1> 
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
    </div>
  );
};

export default LikeCounter;
