import api from "./api";

export const getRecentlyProperties = async () => {
  const response = await api.post("/properties/recently");
  return response.data.data;
};

export const getDiscountedProperties = async (page) => {
  const response = await api.post("/properties/discounted", { page });
  return response.data;
};

export const getAllProperties = async (sort, page, q) => {
  const response = await api.get("/properties", {
    params: { r: sort, page: page, q: q },
  });

  return response.data;
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
  const response = await api.post("/auth/wishlist/property/toggle", {
    property_id: id
  });
  return response.data;
}

export const createPriceOffer = async (property_id, price, note) => {
  const response = await api.post("/offers/create", {
    property_id: property_id,
    price: price,
    note: note
  })
  return response.data;
}

export const filterPublishedProperties = async (params = {}) => {
  const cleanParams = Object.fromEntries(
    Object.entries(params).filter(([, value]) => value !== undefined && value !== null && value !== "")
  );

  const response = await api.post("/properties", cleanParams)
  return response.data;
}

export const createProperty = async (type_id, title, is_under_construction, country_id, city_id, district_id, street_id, currency_id, sell_price, pass_price, pricing_type) => {
  const response = await api.post("/properties/drafts/create", {
    type_id,
    title,
    country_id,
    city_id,
    district_id,
    street_id,
    currency_id,
    sell_price,
    pass_price,
    pricing_type,
    is_under_construction
  });
  return response.data;
}

export const deleteProperty = async (id) => {
  const response = await api.post(`/properties/${id}/delete`);
  return response.data;
}

export const cloneProperty = async (id, title, clone_images) => {
  const response = await api.post(`/properties/${id}/clone`, {
    title: title,
    clone_images: clone_images
  });
  return response.data;
}

export const updateDraftStatus = async (id , status) => {
  const response = await api.post(`/properties/${id}/status/update` , {
    status:status
  });
  return response.data;
}

export const updateSoldStatus = async (id , hold , action) => {
  const response = await api.post(`/properties/${id}/sold/update` , {
    hold:hold,
    action:action
  })
  return response.data;
}