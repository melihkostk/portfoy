import axios from "axios";

const api = axios.create({
    baseURL: "https://demo.pigasoft.com/portfoy/public/api",
    headers: {
        "Content-Type": "application/json",
    },
});

export default api;