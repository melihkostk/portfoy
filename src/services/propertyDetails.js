import api from "./api";

export const getDetails = async (id) => {
    const response = await api.get(`/properties/${id}/details`);
    return response.data.data;
}

export const createProposal = async (notes , notify , currency_id , customer_id , properties) => {
    const response = await api.post("/proposals/create" , {
        notes:notes,
        notify:notify,
        currency_id:Number(currency_id),
        customer_id:Number(customer_id),
        properties:properties.map(Number)

    });
    return response.data;
}