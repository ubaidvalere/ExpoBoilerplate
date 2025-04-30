import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Tabs from "./Tabs";
import ProductDetail from "@/screens/app/ProductDetail";
import Conversation from "@/screens/app/Conversation";

const AppStack = createNativeStackNavigator({
  screens: {
    Tab: Tabs,
    ProductDetail: ProductDetail,
    Conversation: Conversation,
  },
  screenOptions: {
    headerShown: false,
  },
});

export default AppStack;
