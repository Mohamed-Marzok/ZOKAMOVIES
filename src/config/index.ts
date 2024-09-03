import axios from "axios";

export const instanceAxios = axios.create({
  baseURL: "https://www.omdbapi.com/?apikey=396ee638",
  timeout: 1000,
});
