import api from "./api";

export const getCompanyInfo = async () => {
    const response = await api.get("/auth/company")
    return response.data.data
}

export const getTeam = async () => {
    const response = await api.get("/auth/company/team")
    return response.data.data
}

export const getAllInvitations = async () => {
    const response = await api.get("/auth/company/team/invitations")
    return response.data.data
}

export const getAllCustomers = async () => {
    const response = await api.get("/auth/company/customers")
    return response.data.data
}

export const getLocation = async () => {
    const response = await api.get("/auth/company/locations")
    return response.data.data.locations
}

export const getCompanyProperties = async () => {
    const response = await api.post("/auth/company/properties");
    return response.data.data.properties;
}

export const getCompanyProposals = async () => {
    const response = await api.post("/auth/company/proposals");
    return response.data.data.proposals;
}

