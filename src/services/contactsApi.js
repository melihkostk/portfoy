import api from "./api";

export const getContactInfo = async () => {
    const response = await api.get("/contacts/info");
    return response.data.data;
}