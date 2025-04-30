import { View } from "react-native";
import { KeyboardProvider } from "react-native-keyboard-controller";
import { QueryClientProvider } from "@tanstack/react-query";
import AppNavigation from "@/navigation";
import AuthContext from "@/contexts/AuthContext";
import useAuthStore from "@/stores/authStore";
import queryClient from "@/utils/queryClient";
import { StatusBar } from "expo-status-bar";
import { useTheme } from "@/hooks/useTheme";

export default function App() {
  const { isLogin } = useAuthStore();
  const colors = useTheme();

  return (
    <View style={{ flex: 1 }}>
      <StatusBar backgroundColor={colors.background} />
      <KeyboardProvider>
        <QueryClientProvider client={queryClient}>
          <AuthContext.Provider value={isLogin}>
            <AppNavigation />
          </AuthContext.Provider>
        </QueryClientProvider>
      </KeyboardProvider>
    </View>
  );
}
