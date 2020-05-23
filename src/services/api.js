import axios from "axios";

const api = axios.create({
    baseURL: "https://bdh-backend.herokuapp.com"
});

export default api;
