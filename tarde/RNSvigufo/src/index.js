// react-router

import Main from "./pages/main";
import Profile from "./pages/profile";
import { createBottomTabNavigator, createAppContainer } from "react-navigation";

const MainNavigator = createBottomTabNavigator(
  {
    Main,
    Profile
  },
  {
    initialRouteName: "Main",
    tabBarOptions: {
      showLabel: false,
      showIcon: true,
      inactiveBackgroundColor: "#dd99ff",
      activeBackgroundColor: "#B727FF",
      style: {
        height: 50
      }
    }
  }
);

export default createAppContainer(MainNavigator);
