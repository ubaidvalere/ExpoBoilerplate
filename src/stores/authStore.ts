import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import zustandStorage from "@/utils/zustandStorage";

interface State {
  isLogin: boolean;
  setIsLogin: (isLogin: boolean) => void;
  accessToken: string;
  setAccessToken: (token: string) => void;
  refreshToken: string;
  setRefreshToken: (token: string) => void;
}

const useAuthStore = create<State>()(
  persist(
    (set) => ({
      isLogin: false,
      setIsLogin: (isLogin: boolean) => set({ isLogin }),
      accessToken: "",
      setAccessToken: (token: string) => set({ accessToken: token }),
      refreshToken: "",
      setRefreshToken: (token: string) => set({ refreshToken: token }),
    }),
    {
      name: "auth-storage",
      storage: createJSONStorage(() => zustandStorage),
    }
  )
);

export default useAuthStore;
