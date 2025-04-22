import { StyleSheet, Text, View } from "react-native";
import AppNavigation from "./src/navigation";
import AuthContext from "./src/contexts/AuthContext";
import useAuthStore from "./src/stores/authStore";
import { useEffect } from "react";

export default function App() {
  const { isLogin } = useAuthStore();

  useEffect(() => {}, []);

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
