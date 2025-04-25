import apiClient from "../axios";
import { ENDPOINTS } from "../endpoints";

export const userAPI = {
  me: () => apiClient.get(ENDPOINTS.USER.ME),
};
