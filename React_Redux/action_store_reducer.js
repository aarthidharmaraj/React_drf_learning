import { createStore, applyMiddleware } from "redux";
// action
function add_task(task) {
  return {
    type: "ADD",
    task_given: task,
  };
}
function remove_task(task) {
  return {
    type: "REMOVE",
    task_given: task,
  };
}
// reducer
// function taskList(tasks = [], action) {
//   if (action.type === "ADD") {
//     console.log("task has been added" + action.task_given);
//     return [tasks, action.task_given];
//   } else if (action.type === "REMOVE") {
//     console.log("task has been removed" + action.task_given);
//     // console.log(tasks);
//     return tasks.filter((task) => task !== action.task_given);
//   }
// }

function taskList(tasks = [], action) {
  switch (action.type) {
    case "ADD": {
      console.log("task has been added" + action.task_given);
      return [tasks, action.task_given];
    }
    case "REMOVE": {
      console.log("task has been removed" + action.task_given);
      // console.log(tasks);
      return tasks.filter((task) => task !== action.task_given);
    }
    default: {
      break;
    }
  }
}
//Using middlewares
const storeMiddleware = (store) => (next) => (action) => {
  console.log(action);
  action.task_given = "Task6";
  // action.type = "REMOVE";
  next(action);
};
const middleware = applyMiddleware(storeMiddleware);
const store = createStore(taskList, middleware);

store.dispatch(add_task("Task1"));
store.dispatch(add_task("Task1"));
console.log(store.getState());

store.dispatch(add_task("Task2"));

store.dispatch(add_task("Task3"));

store.dispatch(remove_task("Task1"));
console.log(store.getState());
export default taskList;
