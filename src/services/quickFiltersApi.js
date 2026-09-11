import api from "./api";

export const getQuickFilters = async () => {
    const response = await api.get("/auth/quick-filters");
    return response.data.data;
}

export const deleteQuickFilters = async (id) => {
    const response = await api.post(`/auth/quick-filters/${id}/delete`)
    return response.data;
}