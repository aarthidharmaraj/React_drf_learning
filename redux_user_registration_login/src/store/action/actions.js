import * as types from "./actionTypes";
import instance from "../../api/api_instance";
import apiUrl from "../../constants/api_url";
const getUsers = (users) => ({
  type: types.GET_USERS,
  payload: users,
});

const userDelete = () => ({
  type: types.DELETE_USER,
});
export const loadUsers = () => {
  return function (dispatch) {
    instance
      .get(apiUrl)
      .then((response) => {
        console.log("response", response.data);
        dispatch(getUsers(response.data));
      })
      .catch((error) => {
        console.log("error", error);
        alert("Cannot get data from api");
      });
  };
};
export const deleteUser = (id) => {
  return function (dispatch) {
    instance
      //   .delete(apiUrl`/${id}`)
      .delete(`http://localhost:8000/employee_user/${id}`)
      .then((response) => {
        console.log("response", response.data);
        dispatch(userDelete());
      })
      .catch((error) => {
        console.log("error", error);
        alert("Cannot get data from api");
      });
  };
};
