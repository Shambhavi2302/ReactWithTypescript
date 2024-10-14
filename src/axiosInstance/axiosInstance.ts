import axios, { AxiosInstance } from "axios";
const BASE_URL = "https://reqres.in/";

const axiosInstance: AxiosInstance = axios.create({
  baseURL: BASE_URL, // Set your API base URL
  timeout: 10000, // Set a timeout for requests
  headers: {
    "Content-Type": "application/json", // Set default headers
  },
});

export default axiosInstance;
