import client from "./client";

export const getCategories = async () => {
  return await client
    .get("/categories")
    .then((response) => response.data)
    .catch((e) => {
      throw new Error(e)
    });
};

export const getCategoryById = async (id: number) => {
  return await client
    .get(`/categories/${id}`)
    .then((response) => response.data)
    .catch((e) => {
      throw new Error(e)
    });
};
