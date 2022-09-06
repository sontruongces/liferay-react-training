import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8080",
  headers: {
    Authorization: `Basic ${btoa("test@liferay.com:123")}`,
    "Content-Type": "application/json"
  }
});

export default api;
