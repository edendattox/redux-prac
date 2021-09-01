import { reducer } from "./reducer";

const createStore = (reducer) => {
  let state;

  const dispatch = (action) => {
    state = reducer(state, action);
  };

  const getState = () => {
    return state;
  };

  return {
    dispatch,
    getState,
  };
};

export default createStore(reducer);
