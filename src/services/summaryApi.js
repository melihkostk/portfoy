import api from "./api";

export const getCount = async () => {
    const response = await api.get("/auth/company/summary");
    return response.data.data.summary.counts;
}

export const getSummaryProperties = async () => {
    const response = await api.get("/auth/company/summary")
    return response.data.data.summary.properties;
}