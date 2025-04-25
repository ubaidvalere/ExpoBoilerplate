import { View } from "react-native";
import AppNavigation from "./src/navigation";
import AuthContext from "./src/contexts/AuthContext";
import useAuthStore from "./src/stores/authStore";
import { QueryClientProvider } from "@tanstack/react-query";
import queryClient from "@/utils/queryClient";

export default function App() {
  const { isLogin } = useAuthStore();

  return (
    <View style={{ flex: 1 }}>
      <QueryClientProvider client={queryClient}>
        <AuthContext.Provider value={isLogin}>
          <AppNavigation />
        </AuthContext.Provider>
      </QueryClientProvider>
    </View>
  );
}
