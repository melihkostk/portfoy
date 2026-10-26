import api from "./api";

export const loginRequest = async (email, password, locale) => {
  const response = await api.post("/auth/login", {
    email,
    password,
    locale,
  });
  return response.data;
};

export const logOut = async () => {
    const response = await api.post("/auth/logout");
    return response.data;
}

export const resetPassword = async (email , locale) => {
  const response  = await api.post("/auth/password/reset" , {
    email:email,
    locale:locale
  });
  return response.data;
}

export const register = async (email , password , name , invitation_code) => {
  const response = await api.post("/auth/register" , {
    email:email,
    password:password,
    name:name,
    invitation_code:invitation_code
  });
  return response.data;
}