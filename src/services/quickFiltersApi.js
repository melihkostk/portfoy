import api from "./api";

export const getQuickFilters = async () => {
    const response = await api.get("/auth/quick-filters");
    return response.data.data;
}