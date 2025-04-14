import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createStaticNavigation } from "@react-navigation/native";
import HomeStack from "./HomeStack";
import AuthStack from "./AuthStack";
import { isSignedIn, isSignedOut } from "../context/AuthContext";

const RootStack = createNativeStackNavigator({
  screens: {
    HomeStack: {
      if: isSignedIn,
      screen: HomeStack,
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
