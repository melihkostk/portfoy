import api from "./api";

export const getAllNotifications = async (page) => {
    const response = await api.get("/auth/notifications", { params: { page: page } });
    return response.data;
}

export const markAsRead = async (id) => {
    const response = await api.post(`/auth/notifications/${id}/read`);
    return response.data;
}