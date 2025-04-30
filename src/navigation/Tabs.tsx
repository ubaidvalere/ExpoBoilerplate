import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "@/screens/app/Home";
import Profile from "@/screens/app/Profile";
import { TabBar } from "@/components";
import Chats from "@/screens/app/Chats";

const Tabs = createBottomTabNavigator({
  screens: {
    Home: Home,
    Chat: Chats,
    Profile: Profile,
  },
  tabBar: (props) => <TabBar {...props} />,
  screenOptions: {
    headerShown: false,
  },
});

export default Tabs;
