import { useQuery } from "@tanstack/react-query";
import { userAPI } from "../services/user";

export const useUser = () => {
  return useQuery({
    queryKey: ["user-me"],
    queryFn: async () => {
      try {
        const res = await userAPI.me();
        return res.data;
      } catch (error) {
        throw error;
      }
    },
  });
};
