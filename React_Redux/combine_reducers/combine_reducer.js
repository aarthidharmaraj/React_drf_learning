import reducer from "./combine_reducers/task_reducer";
import counter from "./combine_reducers/counter_reducer";
import { combineReducers } from "redux";

export default combineReducers({ reducer, counter });
