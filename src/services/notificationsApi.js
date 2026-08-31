import api from "./api";

export const getAllNotifications = async () => {
    const response = await api.get("/auth/notifications");
    return response.data.data.notifications;
}