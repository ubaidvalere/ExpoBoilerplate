import apiClient from "../axios";
import { ENDPOINTS } from "../endpoints";

export const productsAPI = {
  getProducts: () => apiClient.get(ENDPOINTS.PRODUCTS.PRODUCTS),
  getProductById: (id: number) =>
    apiClient.get(ENDPOINTS.PRODUCTS.PRODUCT.replace(":id", id.toString())),
  getProductsByCategory: (category: string) =>
    apiClient.get(
      ENDPOINTS.PRODUCTS.PRODUCTS_BY_CATEGORY.replace(":category", category)
    ),
};
