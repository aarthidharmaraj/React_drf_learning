import { combineReducers } from "redux";
import usersReducers from "./reducer";
import actionReducers from "./editDeleteReducer";
const rootReducer = combineReducers({
  usersdata: usersReducers,
  actiondata: actionReducers,
});

export default rootReducer;
