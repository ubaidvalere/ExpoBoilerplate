import { StyleSheet, Text, View } from "react-native";
import AppNavigation from "./src/navigation";
import AuthContext from "./src/contexts/AuthContext";
import useAuthStore from "./src/store/authStore";

export default function App() {
  const { isLogin } = useAuthStore();

  return (
    <View style={styles.container}>
      <AuthContext.Provider value={isLogin}>
        <AppNavigation />
      </AuthContext.Provider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
