import api from "./api";

export const getRecentlyProperties = async () => {
  const response = await api.post("/properties/recently");
  return response.data.data;
};

export const getDiscountedProperties = async () => {
  const response = await api.post("/properties/discounted");
  return response.data.data;
};