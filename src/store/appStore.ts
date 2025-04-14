import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import zustandStorage from "../utils/zustandStorage";

interface State {
  isLogin: boolean;
  setIsLogin: (isLogin: boolean) => void;
}

const useAppStore = create<State>()(
  persist(
    (set) => ({
      isLogin: false,
      setIsLogin: (isLogin: boolean) => set({ isLogin }),
    }),
    {
      name: "app-storage",
      storage: createJSONStorage(() => zustandStorage),
    }
  )
);

export default useAppStore;
