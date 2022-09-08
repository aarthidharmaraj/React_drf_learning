const reducer = (tasks = [], action) => {
  switch (action.type) {
    case "ADD":
      console.log("Task has been added" + action.task_given);
      return tasks.concat(action.task_given);
    case "REMOVE":
      console.log("Task has been removed" + action.task_given);
      return tasks.filter((task) => task !== action.task_given);
    default:
      return tasks;
  }
};
export default reducer;
