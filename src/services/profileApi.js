import api from "./api";

export const getWishlist = async () => {
    const response = await api.post("/auth/wishlist");
    return response.data.data;
}

export const getUserProperties = async () => {
    const response = await api.post("/auth/properties");
    return response.data.data;
}

export const getProposals = async () => {
    const response = await api.get("/auth/proposals");
    return response.data.data;
}

export const getReceivedOffers = async () => {
    const response = await api.post("/auth/offers", {
        type: "received",
    });
    return response.data.data
}

export const getSendedOffers = async () => {
    const response = await api.post("/auth/offers", {
        type: "send",
    });
    return response.data.data
}