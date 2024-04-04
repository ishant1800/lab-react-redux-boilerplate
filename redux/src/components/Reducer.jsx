const initialCounterState = {
    countValue: 0,
  };
  
  const counterReducer = (currentState, action) => {
    switch (action.type) {
      case "INCREMENT":
        return {
          ...currentState,
          countValue: currentState.countValue + 1,
        };
      case "DECREMENT":
        return {
          ...currentState,
          countValue: currentState.countValue > 0 ? currentState.countValue - 1 : 0,
        };
      default:
        return currentState;
    }
  };
  
  export { initialCounterState, counterReducer };
  