import React, { Component } from "react";

import { Text, Image, StyleSheet, View, AsyncStorage } from "react-native";

import jwt from "jwt-decode";

class Profile extends Component {
  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => (
      <Image
        source={require("../assets/img/profile.png")}
        style={styles.tabNavigatorIconProfile}
      />
    )
  };

  constructor(props) {
    super(props);
    this.state = { token: "", nome: "" };
  }

  _buscarDadosDoStorage = async () => {
    try {
      const value = await AsyncStorage.getItem("userToken");
      if (value !== null) {
        this.setState({ nome: jwt(value).Nome });
        this.setState({ token: value });
      }
    } catch (error) {}
  };

  componentDidMount() {
    this._buscarDadosDoStorage();
  }

  render() {
    return (
      <View style={styles.main}>
        <View style={styles.mainHeader}>
          <View style={styles.mainHeaderRow}>
            <Image
              source={require("../assets/img/profile.png")}
              style={styles.mainHeaderImg}
            />
            <Text style={styles.mainHeaderText}>{"Perfil".toUpperCase()}</Text>
          </View>
          <View style={styles.mainHeaderLine} />
        </View>
        <View style={styles.mainBody}>
          <View style={styles.mainBodyProfile}>
            <Text>{this.state.token}</Text>
            <Text>{this.state.nome}</Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  tabNavigatorIconProfile: {
    width: 25,
    height: 25,
    // tintColor: "purple"
    tintColor: "#FFFFFF"
  },
  main: {
    flex: 1,
    backgroundColor: "#F1F1F1"
  },
  mainHeader: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  mainHeaderRow: {
    flexDirection: "row"
  },
  mainHeaderImg: {
    width: 22,
    height: 22,
    tintColor: "#cccccc",
    marginRight: -9,
    marginTop: -9
  },
  mainHeaderText: {
    fontSize: 16,
    letterSpacing: 5,
    color: "#999999",
    fontFamily: "OpenSans-Regular"
  },
  mainHeaderLine: {
    width: 170,
    paddingTop: 10,
    borderBottomColor: "gray",
    borderBottomWidth: 0.9
  },
  mainBody: {
    flex: 4
  },
  mainBodyProfile: {
    paddingTop: 30,
    paddingRight: 50,
    paddingLeft: 50,
    justifyContent: "center",
    alignItems: "center"
  }
});

export default Profile;
