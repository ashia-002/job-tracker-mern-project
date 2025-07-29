import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:3000", // Replace with your backend URL
    withCredentials: true, // Ensures cookies are sent with requests
});

export default api;
