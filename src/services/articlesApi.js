import api from "./api";

export const getArticles = async (locale) => {
  const response = await api.post("/front/articles", { locale: locale });
  return response.data.data;
};

export const showArticle = async (id) => {
  const response = await api.post(`/articles/${id}/show`);
  return response.data.data;

}