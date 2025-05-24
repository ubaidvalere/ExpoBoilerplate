import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "@/screens/app/Home";
import Profile from "@/screens/app/Profile";
import { TabBar } from "@/components";
import Chats from "@/screens/app/Chats";
import Cart from "@/screens/app/Cart";

const Tabs = createBottomTabNavigator({
  screens: {
    Home: Home,
    Chat: Chats,
    Cart: Cart,
    Profile: Profile,
  },
  tabBar: (props) => <TabBar {...props} />,
  screenOptions: {
    headerShown: false,
  },
});

export default Tabs;
