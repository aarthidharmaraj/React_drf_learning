import { Types } from "./actionTypes.js";
import axios from "axios";
const apiUrl = "http://localhost:8000/employee_user/";
export const register = (data) => {
  return {
    type: Types.REGISTER,
    payload: { data },
  };
};
export const login = (data) => {
  return {
    type: Types.LOGIN,
    payload: {
      name: data,
    },
  };
};
// thunk action creaor
export const displayUser = () => {
  return (dispatch) => {
    return (
      axios
        .get(apiUrl)
        .then((response) => {
          dispatch({
            type: Types.DISPLAY_USER,
            payload: response.data,
          });
          console.log(response.data);
        })
        // .then((data) => {
        //   dispatch({
        //     type: Types.DISPLAY_USER,
        //     payload: data.data,
        //   });
        // })
        .catch((error) => {
          // throw error;
          console.log(error);
          // alert("Cannot get the details from api");
        })
    );
  };
};
// export const dispalyUser = (dispatch) => {
//   dispatch({ type: Types.DISPLAY_USER });
//   axios
//     .get(apiUrl)
//     .then((response) => response.json())
//     .then((data) =>
//       dispatch({ type: Types.DISPLAY_USER, data }).catch((error) => {
//         // throw error;
//         alert("Cannot upload the user details to api");
//       })
//     );
// };
