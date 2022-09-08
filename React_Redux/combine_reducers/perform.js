import combine_reducer from "./combine_reducers/combine_reducer";
import { createStore } from "redux";
export default function Perform() {
  //   const initialState = null;
  const store = createStore(combine_reducer);
  console.log("Before dispatch", store.getState());
  store.dispatch({
    type: "INCREAMENT",
    amount: 3,
  });
  store.dispatch({
    type: "INCREAMENT",
    amount: 2,
  });
  store.dispatch({
    type: "DECREAMENT",
    amount: 3,
  });
  console.log("Before changing reducer", store.getState());
  store.dispatch({
    type: "ADD",
    task_given: "task1",
  });
  store.dispatch({
    type: "ADD",
    task_given: "task2",
  });
  store.dispatch({
    type: "REMOVE",
    task_given: "task1",
  });
  console.log("Final", store.getState());
}
