import { StyleSheet, Text, View } from "react-native";
import AppNavigation from "./src/navigation";
import AuthContext from "./src/context/AuthContext";
import useAppStore from "./src/store/appStore";

export default function App() {
  const { isLogin } = useAppStore();

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
    backgroundColor: "#fff",
  },
});
