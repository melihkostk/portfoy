import api from "./api";

export const getContactInfo = async () => {
    const response = await api.get("/contacts/info");
    return response.data.data;
}

export const sendContactForm = async (name , email , phone , subject , message , locale) => {
    const response = await api.post("/contacts/form" , {name:name , email:email , phone:phone , subject:subject , message:message , locale:locale});
    return response.data.data
}