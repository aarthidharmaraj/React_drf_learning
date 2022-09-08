export default function counter(count = 0, action) {
  switch (action.type) {
    case "INCREAMENT":
      return count + action.amount;
    case "DECREAMENT":
      return count - action.amount;
    default:
      return count;
  }
  //   return count;
}
