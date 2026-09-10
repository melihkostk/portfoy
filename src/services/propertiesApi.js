import api from "./api";

export const getRecentlyProperties = async () => {
  const response = await api.post("/properties/recently");
  return response.data.data;
};

export const getDiscountedProperties = async () => {
  const response = await api.post("/properties/discounted");
  return response.data.data;
};

export const getAllProperties = async () => {
  const response = await api.get("/properties");
  return response.data.data
}

export const getSortingOptions = async () => {
  const response = await api.get("/properties/sort-options");
  return response.data.data;
}

export const getAllPropertiesType = async () => {
  const response = await api.post("/properties/types");
  return response.data.data;
}

export const toggleWishlist = async (id) => {
  const response = await api.post("/auth/wishlist/property/toggle" , {
    property_id:id
  });
  return response.data;
}

export const createPriceOffer = async (property_id , price , note) => {
  const response = await api.post("/offers/create" , {
    property_id:property_id,
    price:price,
    note:note
  })
  return response.data;
}