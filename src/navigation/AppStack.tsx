import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Tabs from "./Tabs";
import ProductDetail from "@/screens/app/ProductDetail";
import Conversation from "@/screens/app/Conversation";
import Cart from "@/screens/app/Cart";

const AppStack = createNativeStackNavigator({
  screens: {
    Tab: Tabs,
    ProductDetail: ProductDetail,
    Conversation: Conversation,
    Cart: Cart,
  },
  screenOptions: {
    headerShown: false,
  },
});

export default AppStack;
