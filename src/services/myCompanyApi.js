import api from "./api";

export const getCompanyInfo = async () => {
    const response = await api.get("/auth/company")
    return response.data.data
}

