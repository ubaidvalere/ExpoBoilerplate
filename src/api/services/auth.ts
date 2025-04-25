import apiClient from "../axios";
import { ENDPOINTS } from "../endpoints";

export interface LOGIN_TYPE {
  username: string;
  password: string;
}

export const authAPI = {
  login: (data: LOGIN_TYPE) =>
    apiClient.post(ENDPOINTS.AUTH.LOGIN, data, {
      headers: {
        credentials: "include",
      },
    }),
};
