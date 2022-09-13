import { Types } from "../action/actionTypes";

export default function displayUserReducer(state = [], action) {
  switch (action.type) {
    case Types.DISPLAY_USER:
      return [...action.payload];
    default:
      return state;
  }
}
