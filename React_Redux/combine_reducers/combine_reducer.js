import reducer from "./combine_reducers/c_reducer";
import counter from "./combine_reducers/counter_reducer";
import { combineReducers } from "redux";

export default combineReducers({ reducer, counter });
