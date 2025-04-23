import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import zustandStorage from "@/utils/zustandStorage";
import { UserData } from "@/utils/interfaces";

interface State {
  userData: UserData | null;
  setUserData: (userData: UserData) => void;
}

const useAppStore = create<State>()(
  persist(
    (set) => ({
      userData: null,
      setUserData: (userData: UserData) => set({ userData }),
    }),
    {
      name: "app-storage",
      storage: createJSONStorage(() => zustandStorage),
    }
  )
);

export default useAppStore;
