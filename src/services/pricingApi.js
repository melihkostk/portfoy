import api from "./api"

export const getPackages = async () => {
    const response = await api.post("/front/packages");
    return response.data;
}