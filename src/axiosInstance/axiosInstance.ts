import axios, { AxiosInstance } from "axios";
const BASE_URL = "https://reqres.in/";

const axiosInstance: AxiosInstance = axios.create({
  baseURL: <string>BASE_URL, // Set your API base URL
  timeout: <number>10000, // Set a timeout for requests
  headers: {
    "Content-Type": "application/json", // Set default headers
  },
});

export default axiosInstance;
