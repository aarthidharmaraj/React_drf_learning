import * as types from "../action/actionTypes";
const initialState = {
  users: [],
  user: {},
  loading: false,
};
const actionReducers = (state = initialState, action) => {
  switch (action.type) {
    case types.DELETE_USER:
      return { ...state, loading: false };
    case types.GET_SINGLE_USER:
      return { ...state, user: action.payload, loading: false };
    case types.UPDATE_USER:
      return { ...state, loading: false };
    default:
      return state;
  }
};
export default actionReducers;
