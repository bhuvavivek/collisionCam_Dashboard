import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:5000/api/v1",
  // baseURL: "https://collisionapi.treegreet.com/api/v1",
});

const token = window.localStorage.getItem("token");
api.defaults.headers.common["Authorization"] = "Bearer " + token;
