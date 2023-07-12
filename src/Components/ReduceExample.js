import React, { useReducer } from 'react';
export default function ReduceExample() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const action = {
    type: 'ActionType'
  };
  return (
    <button onClick={() => dispatch(action)}>
      Click me
    </button>
  );
}