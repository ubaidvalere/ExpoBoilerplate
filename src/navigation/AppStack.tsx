import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Tabs from "./Tabs";
import ProductDetail from "@/screens/app/ProductDetail";

const AppStack = createNativeStackNavigator({
  screens: {
    Tab: Tabs,
    ProductDetail: ProductDetail,
  },
  screenOptions: {
    headerShown: false,
  },
});

export default AppStack;
