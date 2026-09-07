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

export const getSubscriptions = async () => {
    const response = await api.get("/auth/company/subscriptions");
    return response.data.data
}

export const removeInvite = async (id) => {
    const response = await api.post(`/auth/company/team/invitations/${id}/delete`);
    return response.data;
}

export const addInvite = async (name, email , role , locale , phone , phone_code) => {
    const response = await api.post("/auth/company/team/invitations/create", {
        name:name,
        email:email,
        role:role,
        locale:locale,
        phone:phone,
        phone_code:phone_code
    });
    return response.data;
}

export const getAllRoles = async () => {
    const response = await api.post("/front/roles");
    return response.data.data
}

export const getAllLanguages = async () => {
    const response = await api.get("/front/languages");
    return response.data.data;
}

export const addLocation = async (country_id , city_id , district_id , address) => {
    const response = await api.post("/auth/company/locations/create" , {
        country_id:country_id,
        city_id:city_id,
        district_id:district_id,
        address:address
    });
    return response.data;
}
