import React, { Component } from "react";

import { Text, Image, StyleSheet, View, FlatList } from "react-native";

import api from "../services/api";

class Main extends Component {
  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => (
      <Image
        source={require("../assets/img/calendar.png")}
        style={styles.tabNavigatorIconHome}
      />
    )
  };

  constructor(props) {
    super(props);
    this.state = {
      listaEventos: []
    };
  }

  componentDidMount() {
    // realizar a chamada a api
    // emulator -list-avds
    // emulator -avd nomeAVD
    this.carregarEventos();
  }

  carregarEventos = async () => {
    const resposta = await api.get("/eventos");
    const dadosDaApi = resposta.data;
    this.setState({ listaEventos: dadosDaApi });
  };

  render() {
    return (
      <View style={styles.main}>
        {/* Cabecalho - header */}
        <View style={styles.mainHeader}>
          <View style={styles.mainHeaderRow}>
            <Image
              source={require("../assets/img/calendar.png")}
              style={styles.mainHeaderImg}
            />
            <Text style={styles.mainHeaderText}>{"Eventos".toUpperCase()}</Text>
          </View>
          <View style={styles.mainHeaderLine} />
        </View>

        {/* conteudo - body - section */}
        <View style={styles.mainBody}>
          <FlatList
            contentContainerStyle={styles.mainBodyConteudo}
            data={this.state.listaEventos}
            keyExtractor={item => item.id}
            renderItem={this.renderizaItem}
          />
        </View>
      </View>
    );
  }

  renderizaItem = ({ item }) => (
    // <Text style={{ fontSize: 20, color: 'red' }}>{item.titulo}</Text>
    <View style={styles.flatItemLinha}>
      <View style={styles.flatItemContainer}>
        <Text style={styles.flatItemTitulo}>{item.titulo}</Text>
        <Text style={styles.flatItemData}>{item.dataEvento}</Text>
      </View>

      <View style={styles.flatItemImg}>
        <Image
          source={require("../assets/img/view.png")}
          style={styles.flatItemImgIcon}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  tabNavigatorIconHome: {
    width: 25,
    height: 25,
    // tintColor: "purple"
    tintColor: "#FFFFFF"
  },
  // conteúdo da main
  main: {
    flex: 1,
    backgroundColor: "#F1F1F1"
  },
  // cabecalho
  mainHeaderRow: {
    flexDirection: "row"
  },
  mainHeader: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  // imagem do cabeçalho
  mainHeaderImg: {
    width: 22,
    height: 22,
    tintColor: "#cccccc",
    marginRight: -9,
    marginTop: -9
  },
  // texto do cabecalho
  mainHeaderText: {
    fontSize: 16,
    letterSpacing: 5,
    color: "#999999",
    fontFamily: "OpenSans-Regular"
  },
  // linha de separacao do cabecalho
  mainHeaderLine: {
    width: 170,
    paddingTop: 10,
    borderBottomColor: "#999999",
    borderBottomWidth: 0.9
  },
  // corpo do texto
  mainBody: {
    // backgroundColor: "#999999",
    flex: 4
  },
  // conteúdo da lista
  mainBodyConteudo: {
    paddingTop: 30,
    paddingRight: 50,
    paddingLeft: 50
  },
  // dados do evento de cada item da linha
  flatItemLinha: {
    flexDirection: "row",
    borderBottomWidth: 0.9,
    borderBottomColor: "gray"
  },
  flatItemContainer: {
    flex: 7,
    marginTop: 5
  },
  flatItemTitulo: {
    fontSize: 14,
    color: "#333",
    fontFamily: "OpenSans-Light"
  },
  flatItemData: {
    fontSize: 10,
    color: "#999",
    lineHeight: 24
  },
  flatItemImg: {
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center"
  },
  flatItemImgIcon: {
    width: 22,
    height: 22,
    tintColor: "#B727FF"
  }
});

export default Main;
