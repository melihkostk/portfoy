import api from "./api";

export const getAllCountries = async () => {
    const response = await api.get("/front/countries");
    return response.data;
}

export const getAllCities = async (id) => {
    const response = await api.get(`/front/${id}/cities`)
    return response.data.data;
}

export const getAllDistricts = async (id) => {
    const response = await api.get(`/front/${id}/districts`)
    return response.data.data;
}

export const getAllStreets = async (id) => {
    const response = await api.get(`/front/${id}/streets`)
    return response.data.data;
}

export const getAllCurrencies = async () => {
    const response = await api.get("/front/currencies")
    return response.data.data
}