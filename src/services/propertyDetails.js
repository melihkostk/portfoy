import api from "./api";

export const getDetails = async (id) => {
    const response = await api.get(`/properties/${id}/details`);
    return response.data.data;
}