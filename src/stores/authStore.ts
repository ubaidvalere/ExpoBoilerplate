import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import zustandStorage from "@/utils/zustandStorage";

interface State {
  isLogin: boolean;
  setIsLogin: (isLogin: boolean) => void;
  token: string;
  setToken: (token: string) => void;
}

const useAuthStore = create<State>()(
  persist(
    (set) => ({
      isLogin: false,
      setIsLogin: (isLogin: boolean) => set({ isLogin }),
      token: "",
      setToken: (token: string) => set({ token }),
    }),
    {
      name: "app-storage",
      storage: createJSONStorage(() => zustandStorage),
    }
  )
);

export default useAuthStore;
