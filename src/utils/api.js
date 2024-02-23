import axios from "axios";

export const api = axios.create({
  // baseURL: "http://localhost:5050/api/v1",
  // baseURL: "https://carrental.dinnre.com/api/v1",
  baseURL: "https://api.collisioncam.org/api/v1",
});

const token = window.localStorage.getItem("token");
api.defaults.headers.common["Authorization"] = "Bearer " + token;
