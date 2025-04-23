import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Tabs from "./Tabs";

const AppStack = createNativeStackNavigator({
  screens: {
    Tab: Tabs,
  },
  screenOptions: {
    headerShown: false,
  },
});

export default AppStack;
