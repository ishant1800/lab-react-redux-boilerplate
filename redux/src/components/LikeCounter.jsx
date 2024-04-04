import React, { useReducer } from "react";
import { initialState, reducer } from "./Reducer";

const LikeCounter = () => {
  const [counterState, dispatchAction] = useReducer(reducer, initialState);

  const handleIncrement = () => {
    dispatchAction({ type: "INCREMENT" });
  };

  const handleDecrement = () => {
    dispatchAction({ type: "DECREMENT" });
  };

  return (
    <div>
      <h1>{counterState.count}</h1>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
    </div>
  );
};

export default LikeCounter;
