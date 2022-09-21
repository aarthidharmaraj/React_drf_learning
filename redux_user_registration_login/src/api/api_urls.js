import axios from "axios";
export const apiUrl = "http://localhost:8000/users/";
export const apiUrlId = (id) => {
  return `http://localhost:8000/users/${id}`;
};

export const instance = axios.create({
  baseURL: "http://127.0.0.1:8000/users/",
});
