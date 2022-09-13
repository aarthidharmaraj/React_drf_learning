import { Types } from "../action/actionTypes";

export default function userUpdateDelete(state = [], action) {
  switch (action.type) {
    case Types.REGISTER:
      return [...state, action.payload];
    case Types.LOGIN:
      return [...state, action.payload];
    case Types.UPDATE_USER:
      return [...state, action.payload];
    case Types.DELETE_USER:
      return state.filter((e) => {
        if (e.name !== action.payload.name) {
          return true;
        }
        return false;
      });
    default:
      return state;
  }
}
