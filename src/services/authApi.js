import api from "./api";

export const loginRequest = async (email, password, locale) => {
  const response = await api.post("/auth/login", {
    email,
    password,
    locale,
  });
  return response.data;
};
