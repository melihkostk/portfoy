import api from "./api";

export const getAllCompanies = async () => {
    const response = await api.post("/companies");
    return response.data.data;
}

export const getCompaniesProperties = async (id) => {
    const response = await api.post(`/companies/${id}/properties`);
    return response.data.data;
}

export const getCompaniesTeam = async (id) => {
    const response = await api.get(`/companies/${id}/team`);
    return response.data.data;
}

export const getCompaniesLocation = async (id) => {
    const response = await api.get(`/companies/${id}/locations`);
    return response.data.data;
}

export const getCompanyTypes = async () => {
    const response = await api.post("/front/company-types", {
        locale: "tr",
    });
    return response.data.data;
}

export const filterCompany = async (type , country , city , district) => {
    const response = await api.post("/companies", {
        type: type,
        country:country,
        city:city,
        district:district
    });
    return response.data.data;
}