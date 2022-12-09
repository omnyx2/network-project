import axios from "axios";
import { SERVER_URL } from '../configs';

 
const instance = axios.create({
  baseURL: SERVER_URL,
  timeout: 1000,
  headers: {
    "X-Custom-Header": "foobar",
    "Content-Type": "application/json",
  },
});

export default instance;
