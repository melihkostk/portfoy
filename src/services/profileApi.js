import api from "./api";

export const getWishlist = async (sort, type, country, city, district) => {
    const response = await api.post("/auth/wishlist", {}, {
        params: { r: sort, type_id: type, country_id: country, city_id: city, district_id: district },
    });
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

export const showOffer = async (id) => {
    const response = await api.get(`/offers/${id}/show`)
    return response.data;
}