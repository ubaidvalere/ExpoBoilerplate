import { useMutation } from "@tanstack/react-query";
import { authAPI, LOGIN_TYPE } from "../services/auth";

export const useLogin = () => {
  return useMutation({
    mutationFn: async (data: LOGIN_TYPE) => {
      try {
        const res = await authAPI.login(data);
        return res.data;
      } catch (error) {
        throw error;
      }
    },
  });
};
