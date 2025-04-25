import { useQuery } from "@tanstack/react-query";
import { productsAPI } from "../services/products";

export const useProducts = () => {
  return useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      try {
        const res = await productsAPI.getProducts();
        return res.data;
      } catch (error) {
        throw error;
      }
    },
  });
};

export const useProductById = (id: number) => {
  return useQuery({
    queryKey: ["product", id],
    queryFn: async () => {
      try {
        const res = await productsAPI.getProductById(id);
        return res.data;
      } catch (error) {
        throw error;
      }
    },
  });
};

export const useProductsByCategory = (category: string) => {
  return useQuery({
    queryKey: ["products", category],
    queryFn: async () => {
      try {
        const res = await productsAPI.getProductsByCategory(category);
        return res.data;
      } catch (error) {
        throw error;
      }
    },
  });
};
