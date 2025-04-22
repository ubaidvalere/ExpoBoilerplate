import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/app/Home";

const AppStack = createNativeStackNavigator({
  screens: {
    Home: Home,
  },
  screenOptions: {
    headerShown: false,
  },
});

export default AppStack;
