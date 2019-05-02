import React, { Component } from "react";

import { Text, Image, StyleSheet } from "react-native";

class Profile extends Component {
  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => (
      <Image
        source={require("../assets/img/profile.png")}
        style={styles.tabNavigatorIconProfile}
      />
    )
  };

  render() {
    return <Text style={{ fontSize: 40 }}>Profile</Text>;
  }
}

const styles = StyleSheet.create({
  tabNavigatorIconProfile: { width: 25, height: 25, tintColor: "#FFFFFF" }
});

export default Profile;
