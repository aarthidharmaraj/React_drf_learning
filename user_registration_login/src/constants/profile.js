import { Types } from "./constants/actionTypes";

export const ActionCreators = {
  addProfile: (user) => ({ type: Types.ADD_USER, payload: { user } }),

  updateProfile: (user) => ({ type: Types.UPDATE_USER, payload: { user } }),
  deleteProfile: (user) => ({ type: Types.DELETE_USER, payload: { user } }),
  register: (user) => ({ type: Types.REGISTER, payload: { user } }),
  login: (user) => ({ type: Types.LOGIN, payload: { user } }),
};
