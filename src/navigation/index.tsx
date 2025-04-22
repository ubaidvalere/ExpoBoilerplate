import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createStaticNavigation } from "@react-navigation/native";
import AppStack from "./AppStack";
import AuthStack from "./AuthStack";
import { isSignedIn, isSignedOut } from "../contexts/AuthContext";

const RootStack = createNativeStackNavigator({
  screens: {
    AppStack: {
      if: isSignedIn,
      screen: AppStack,
    },
    AuthStack: {
      if: isSignedOut,
      screen: AuthStack,
    },
  },
  screenOptions: {
    headerShown: false,
  },
});

const Navigation = createStaticNavigation(RootStack);

export default Navigation;
