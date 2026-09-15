import api from "./api";

export const getWishlist = async (sort, type, country, city, district) => {
    const response = await api.post("/auth/wishlist", {}, {
        params: { r: sort, type_id: type, country_id: country, city_id: city, district_id: district },
    });
    return response.data.data;
}

export const getUserProperties = async (page) => {
    const response = await api.post("/auth/properties", { page: page });
    return response.data;
}

export const getProposals = async (page) => {
    const response = await api.get("/auth/proposals" , {
        params:{page:page}
    });
    return response.data;
}

export const getReceivedOffers = async (page) => {
    const response = await api.post("/auth/offers", {
        type: "received",
        page: page
    });
    return response.data;
}

export const getSendedOffers = async (page) => {
    const response = await api.post("/auth/offers", {
        type: "send",
        page: page
    });
    return response.data;
}

export const showOffer = async (id) => {
    const response = await api.get(`/offers/${id}/show`)
    return response.data;
}