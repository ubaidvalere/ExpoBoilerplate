import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../screens/auth/Login";

const AuthStack = createNativeStackNavigator({
  screens: {
    Login: Login,
  },
  screenOptions: {
    headerShown: false,
  },
});

export default AuthStack;
