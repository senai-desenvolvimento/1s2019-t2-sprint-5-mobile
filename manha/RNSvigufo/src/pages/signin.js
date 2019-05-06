import React, { Component } from "react";

import {
  StyleSheet,
  View,
  Text,
  Image,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  AsyncStorage
} from "react-native";

import api from "../services/api";

class SignIn extends Component {
  static navigationOptions = {
    header: null
  };

  constructor(props) {
    super(props);
    this.state = { email: "", senha: "" };
  }

  _realizarLogin = async () => {
    // console.warn(this.state.email + this.state.senha);

    const resposta = await api.post("/login", {
      email: this.state.email,
      senha: this.state.senha
    });

    // console.warn(token);
    const token = resposta.data.token;
    await AsyncStorage.setItem("userToken", token);
    this.props.navigation.navigate("MainNavigator");
  };

  render() {
    return (
      <ImageBackground
        source={require("../assets/img/login.png")}
        style={StyleSheet.absoluteFillObject}
      >
        <View style={styles.overlay} />
        <View style={styles.main}>
          <Image
            source={require("../assets/img/loginIcon2x.png")}
            style={styles.mainImgLogin}
          />
          <TextInput
            style={styles.inputLogin}
            placeholder="email"
            placeholderTextColor="#FFFFFF"
            underlineColorAndroid="#FFFFFF"
            onChangeText={email => this.setState({ email })}
          />

          <TextInput
            style={styles.inputLogin}
            placeholder="senha"
            placeholderTextColor="#FFFFFF"
            password="true"
            underlineColorAndroid="#FFFFFF"
            onChangeText={senha => this.setState({ senha })}
          />
          <TouchableOpacity
            style={styles.btnLogin}
            onPress={this._realizarLogin}
          >
            <Text style={styles.btnLoginText}>LOGIN</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(183, 39, 255, 0.79)"
  },
  main: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center"
  },
  mainImgLogin: {
    tintColor: "#FFFFFF",
    height: 100,
    width: 90,
    margin: 10
  },
  btnLogin: {
    height: 38,
    shadowColor: "rgba(0,0,0, 0.4)", // IOS
    shadowOffset: { height: 1, width: 1 }, // IOS
    shadowOpacity: 1, // IOS
    shadowRadius: 1, //IOS
    elevation: 3, // Android
    width: 240,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: "#FFFFFF",
    backgroundColor: "#FFFFFF",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10
  },
  btnLoginText: {
    fontSize: 10,
    fontFamily: "OpenSans-Light",
    color: "#B727FF",
    letterSpacing: 4
  },
  inputLogin: {
    width: 240,
    marginBottom: 10,
    fontSize: 10
  }
});

export default SignIn;
