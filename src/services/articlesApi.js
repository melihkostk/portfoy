import api from "./api";

export const getArticles = async () => {
  const response = await api.post("/front/articles", { locale: "tr" });
  return response.data.data;
};

export const showArticle = async (id) => {
  const response = await api.post(`/articles/${id}/show`);
  return response.data.data;

}