import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "@/screens/app/Home";
import Profile from "@/screens/app/Profile";
import { TabBar } from "@/components";

const Tabs = createBottomTabNavigator({
  screens: {
    Home: Home,
    Profile: Profile,
  },
  tabBar: (props) => <TabBar {...props} />,
  screenOptions: {
    headerShown: false,
  },
});

export default Tabs;
