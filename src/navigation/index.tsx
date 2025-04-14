import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeStack from "./HomeStack";
import AuthStack from "./AuthStack";
import { createStaticNavigation } from "@react-navigation/native";

const isSignedIn = () => false;

const isSignedOut = () => !isSignedIn();

const RootStack = createNativeStackNavigator({
  screens: {
    Home: {
      if: isSignedIn,
      screen: HomeStack,
    },
    SignIn: {
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
