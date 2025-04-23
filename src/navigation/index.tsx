import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createStaticNavigation } from "@react-navigation/native";
import AppStack from "./AppStack";
import AuthStack from "./AuthStack";
import { useIsSignedIn, useIsSignedOut } from "../contexts/AuthContext";

const RootStack = createNativeStackNavigator({
  screens: {
    AppStack: {
      if: useIsSignedIn,
      screen: AppStack,
    },
    AuthStack: {
      if: useIsSignedOut,
      screen: AuthStack,
    },
  },
  screenOptions: {
    headerShown: false,
  },
});

const Navigation = createStaticNavigation(RootStack);

export default Navigation;
