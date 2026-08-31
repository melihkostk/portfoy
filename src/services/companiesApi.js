import api from "./api";

export const getAllCompanies = async () => {
    const response = await api.post("/companies");
    return response.data.data;
}