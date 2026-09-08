import api from "./api";

export const showProposal = async (id) => {
    const response = await api.get(`/proposals/${id}/show`);
    return response.data.data;
}