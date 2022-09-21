import * as types from "./actionTypes";
import * as api from "api/api_urls";
const getUsers = (users) => ({
  type: types.GET_USERS,
  payload: users,
});
const userLogin = () => ({
  type: types.LOGIN_USER,
});
const userRegister = () => ({
  type: types.REGISTER_USER,
});
const userCheck = () => ({
  type: types.CHECK_EMAIL,
});
const userUpdate = () => ({
  type: types.UPDATE_USER,
});
const singleUserGet = (user) => ({
  type: types.GET_SINGLE_USER,
  payload: user,
});

const userDelete = () => ({
  type: types.DELETE_USER,
});
export const displayUsers = () => {
  return function (dispatch) {
    api.instance
      .get(api.apiUrl)
      .then((response) => {
        if (response.status === 200) {
          // console.log("response", response.data);
          dispatch(getUsers(response.data));
        } else {
          alert(`Cannot get response from api ${response.status}`);
        }
      })
      .catch((error) => {
        console.log("error", error);
        alert("Cannot get data from api");
      });
  };
};
export const deleteUser = (id) => {
  console.log(id);
  return function (dispatch) {
    api.instance
      .delete(api.apiUrlId(id))
      .then((response) => {
        console.log("status", response.status);
        if (!(response.status === 404)) {
          dispatch(userDelete());
          dispatch(displayUsers());
        } else {
          alert(`Cannot get response from api ${response.status}`);
        }
      })
      .catch((error) => {
        console.log("error", error);
        alert("Cannot access the api");
      });
  };
};

export const registerUser = (user) => {
  return function (dispatch) {
    api.instance
      .post(api.apiUrl, user)
      .then((response) => {
        if (response.status === 200) {
          // console.log("response", response.data);
          dispatch(userRegister());
          alert("The user has been added successfully");
        } else {
          alert(`Cannot get response from api ${response.status}`);
        }
      })
      .catch((error) => {
        console.log("error", error);
        alert("Cannot add the data to api");
      });
  };
};

export const getSingleUser = (id) => {
  return function (dispatch) {
    api.instance
      .get(api.apiUrlId(id))
      .then((response) => {
        if (response.status === 200) {
          dispatch(singleUserGet(response.data));
        } else {
          alert(`Cannot get response from api ${response.status}`);
        }
      })
      .catch((error) => {
        console.log("error", error);
        alert("Cannot get user details from api");
      });
  };
};

export const updateSingleUser = (user, id) => {
  return function (dispatch) {
    fetch(api.apiUrlId(id), user)
      .then((response) => {
        if (response.status === 200) {
          dispatch(userUpdate());
          alert("The user details has been updated successfully");
        } else {
          alert(`Cannot get response from api ${response.status}`);
        }
      })

      .catch((error) => {
        console.log("error", error);
        alert("Cannot update the user details to api");
      });
  };
};

export const loginUser = (email, password) => {
  return function (dispatch) {
    let data = {
      credentials: { EMAIL_ADDRESS: email, PASSWORD: password },
    };

    api.instance
      .get(api.apiUrl, { body: data })
      .then((response) => {
        console.log(response.status);
        if (response.status === 200) {
          dispatch(userLogin());
          alert("The user has been logged in successfully");
        } else {
          alert(`Cannot get response from api ${response.status}`);
        }
      })
      .catch((error) => {
        console.log("error", error);
        alert("Invalid User credentials");
      });
  };
};

export const checkEmail = (email) => {
  return function (dispatch) {
    api.instance
      .get(api.apiUrl, email)
      .then((response) => {
        if (response.status === 200) {
          dispatch(userCheck());
          alert("The entered email is already present");
        } else {
          alert(`Cannot get response from api ${response.status}`);
        }
      })
      .catch((error) => {
        console.log("error", error);
        alert("Cannot connect api");
      });
  };
};
