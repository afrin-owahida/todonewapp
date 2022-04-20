
import axios from "axios";
import { baseURL } from "./constants";
export const axiosWrapper = axios.create({
  baseURL: baseURL,
  headers: {
 
    Accept: "application/json",
    "Content-Type": "application/json",
    CREATE_SUBTASK : 'subtaskee/create/',

  },
});