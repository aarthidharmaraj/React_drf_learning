import * as types from "../action/actionTypes";
const initialState = {
  users: [],
  user: {},
  loading: false,
};
const usersReducers = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_USERS:
      return { ...state, users: action.payload, loading: false };
    case types.REGISTER_USER:
      return { ...state, loading: false };
    case types.LOGIN_USER:
      return { ...state, loading: false };
    default:
      return state;
  }
};
export default usersReducers;
