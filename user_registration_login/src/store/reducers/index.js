import { combineReducers } from "redux";
// import from './termsReducer';
// import favoritesReducer from './favoritesReducer';
import userUpdateDelete from "./userUpdateDelete";
import displayUserReducer from "./displayUserReducer";
export default combineReducers({ displayUserReducer, userUpdateDelete });
