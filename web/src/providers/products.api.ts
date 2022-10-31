import client from "./client";

export const getProducts = async () => {
  return await client
    .get("/products")
    .then((response) => response.data)
    .catch((e) => {
      throw new Error(e)
    });
};

export const getProductById = async (id: number) => {
  return await client
    .get(`/products/${id}`)
    .then((response) => response.data)
    .catch((e) => {
      throw new Error(e)
    });
};

export const getProductByCategory = async (categoryId: number) => {
  return await client
    .get("/products", {
      params: {
        categoryId
      }
    })
    .then((response) => response.data)
    .catch((e) => {
      throw new Error(e)
    });
};

export const getProductByFilter = async (filter: string) => {
  return await client
    .get("/products", {
      params: {
        filter
      }
    })
    .then((response) => response.data)
    .catch((e) => {
      throw new Error(e)
    });
};
