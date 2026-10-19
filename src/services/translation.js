import api from "./api";

export const getTranslation = async (locale) => {
    const response = await api.post("/front/translations" , {
        locale:locale
    });
    return response.data;
}