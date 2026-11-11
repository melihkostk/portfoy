import axios from "axios";

const api = axios.create({
    baseURL: "https://demo.pigasoft.com/portfoy/public/api",
    headers: {
        "Content-Type": "application/json",
    },
});

api.interceptors.request.use((config) => {
    const user = JSON.parse(localStorage.getItem("user"));
    const token = user?.data?.token;
    const locale = localStorage.getItem("locale") || user?.data?.locale?.key || "en";
    config.headers['Accept-Language'] = locale;

    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
});

export default api;