import axios from "axios";
let BASE_URL = "http://localhost:5000";
let AxiosInstances = axios.create({
  baseURL: BASE_URL,
});

export default AxiosInstances;
