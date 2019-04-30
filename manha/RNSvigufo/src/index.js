import { createBottomTabNavigator, createAppContainer } from "react-navigation";

import Main from "./pages/main";
import Profile from "./pages/profile";

const MainNavigator = createBottomTabNavigator(
  {
    Main,
    Profile
  },
  {
    swipeEnabled: true,
    tabBarOptions: {
      showLabel: false,
      showIcon: true,
      inactiveBackgroundColor: "#dd99ff",
      activeBackgroundColor: "#B727FF",
      activeTintColor: "#FFFFFF",
      inactiveTintColor: "#FFFFFF",
      style: {
        height: 50
      }
    }
  }
);

export default createAppContainer(MainNavigator);
