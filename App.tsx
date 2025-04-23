import { View } from "react-native";
import AppNavigation from "./src/navigation";
import AuthContext from "./src/contexts/AuthContext";
import useAuthStore from "./src/stores/authStore";

export default function App() {
  const { isLogin } = useAuthStore();

  return (
    <View style={{ flex: 1 }}>
      <AuthContext.Provider value={isLogin}>
        <AppNavigation />
      </AuthContext.Provider>
    </View>
  );
}
