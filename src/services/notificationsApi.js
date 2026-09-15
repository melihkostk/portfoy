import api from "./api";

export const getAllNotifications = async (page) => {
    const response = await api.get("/auth/notifications", { params: { page: page } });
    return response.data;
}