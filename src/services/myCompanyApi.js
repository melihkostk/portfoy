import api from "./api";

export const getCompanyInfo = async () => {
    const response = await api.get("/auth/company")
    return response.data.data
}

export const getTeam = async () => {
    const response = await api.get("/auth/company/team")
    return response.data.data
}

export const toogleStatus = async (id) => {
    const response = await api.post(`/auth/company/team/${id}/status/toggle`)
    return response.data;
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

export const getCompanyProperties = async (country_id, city_id, district_id, created_by, min_sell_price , max_sell_price , currency_id) => {
    const response = await api.post("/auth/company/properties", {
        country_id: country_id,
        city_id: city_id,
        district_id: district_id,
        created_by: created_by,
        min_sell_price: min_sell_price,
        max_sell_price: max_sell_price,
        currency_id:currency_id,
    });
    console.log(response.data.data.properties)
    return response.data.data.properties;
}

export const getCompanyProposals = async () => {
    const response = await api.post("/auth/company/proposals");
    return response.data.data.proposals;
}

export const getCustomerProposals = async (customer_id) => {
    const response = await api.post("/auth/company/proposals", {
        customer_id: customer_id
    });
    return response.data.data;
}

export const getSubscriptions = async () => {
    const response = await api.get("/auth/company/subscriptions");
    return response.data.data
}

export const getSubsFeatures = async () => {
    const response = await api.get("/auth/company/subscriptions/active");
    return response.data.data;
}

export const getSubsUsage = async () => {
    const response = await api.get("/auth/company/subscriptions/active/usage");
    return response.data.data;
}

export const removeInvite = async (id) => {
    const response = await api.post(`/auth/company/team/invitations/${id}/delete`);
    return response.data;
}

export const addInvite = async (name, email, role, locale, phone, phone_code) => {
    const response = await api.post("/auth/company/team/invitations/create", {
        name: name,
        email: email,
        role: role,
        locale: locale,
        phone: phone,
        phone_code: phone_code
    });
    return response.data;
}

export const updateTeamMember = async (id, name, email, role, locale, phone, phone_code) => {
    const response = await api.post(`/auth/company/team/${id}/profile/update`, {
        name: name,
        email: email,
        role: role,
        locale: locale,
        phone: phone,
        phone_code: phone_code
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

export const addLocation = async (country_id, city_id, district_id, street_id, address) => {
    const response = await api.post("/auth/company/locations/create", {
        country_id: country_id,
        city_id: city_id,
        district_id: district_id,
        address: address,
        street_id: street_id
    });
    return response.data;
}

export const deleteAddress = async (id) => {
    const response = await api.post(`/auth/company/locations/${id}/delete`);
    return response.data;
}

export const addCustomer = async (name, email, phone, phone_code, locale, note) => {
    const response = await api.post("/auth/company/customers/create", {
        name: name,
        email: email,
        phone: phone,
        phone_code: phone_code,
        locale: locale,
        note: note

    });
    return response.data;
}

export const updateLocation = async (id, country_id, city_id, district_id, address, street_id) => {
    const response = await api.post(`/auth/company/locations/${id}/update`, {
        country_id: country_id,
        city_id: city_id,
        district_id: district_id,
        address: address,
        street_id: street_id
    });
    return response.data;
}

export const updateInvite = async (id, name, email, role, locale, phone, phone_code) => {
    const response = await api.post(`/auth/company/team/invitations/${id}/update`, {
        name: name,
        email: email,
        role: role,
        locale: locale,
        phone: phone,
        phone_code: phone_code
    });
    return response.data;
}