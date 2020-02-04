import React, { useEffect, Component, useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  TextInput,
  Dimensions,
  KeyboardAvoidingView,
  ImageBackground,
  ImageBackgroundComponent,
  Platform,
  PermissionsAndroid,
  Image,
  Button,
  FlatList,
  Alert
} from "react-native";
import { Header } from "react-native-elements";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Dropdown } from "react-native-material-dropdown";
import * as firebase from "firebase";
import { Card } from "react-native-shadow-cards";

export default class Activities extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: "",
      keys: "",
      data2: "",
      keys2: ""
    };
  }

  componentWillMount() {
    this.fetchDataUser();

    this.fetchDataUser2();
  }

  fetchDataUser = () => {
    firebase
      .database()
      .ref("NOC/-M-4nlvTqXaHFBBPDHc7")
      .on("value", snapshot => {
        data = snapshot.val();
        keys = Object.keys(data);
        dat = Object.values(data);
        //  console.log(snapshot);
        this.setState({ keys: keys, data: dat });
      });
  };
  fetchDataUser2 = () => {
    firebase
      .database()
      .ref("NOC/-M-4nlvTqXaHFBBPDHc7")
      .on("value", snapshot => {
        data = snapshot.val();
        keys = Object.keys(data);
        dat = Object.values(data);
        //  console.log(snapshot);
        this.setState({ keys2: keys, data2: dat });
      });
  };

  render() {
    console.log(this.state.keys);

    var User = this.state.data;
    var key = this.state.keys;

    var User2 = this.state.data2;
    var key2 = this.state.keys2;
    return (
      <ImageBackground
        source={require("../assets/Back.jpg")}
        style={{ width: "100%", height: "100%" }}
      >
        <Header
          leftComponent={{
            icon: "arrow-back",
            color: "#fff",
            onPress: () => this.props.navigation.navigate("Home")
          }}
          centerComponent={{
            text: "NOC Verification",
            style: {
              color: "#fff",
              fontWeight: "bold",
              fontSize: 18,
              letterSpacing: 1
            }
          }}
          rightComponent={{
            icon: "help",
            color: "#fff",
            onPress: () =>
              Alert.alert(
                "INFO",
                "Here you can easily see your past form entries and activities.\n"
              )
          }}
          backgroundColor="#1C8ADB"
        />

        <View style={styles.container}>
          <ScrollView>
            <Card style={{ padding: 10, margin: 10 }}>
              <Text style={styles.text}>
                {key[0]}: {User[0]}
              </Text>
              <Text style={styles.text}>
                {key[6]}: {User[6]}
              </Text>
              <Text style={styles.text}>
                {key[4]}: {User[4]}
              </Text>
              <Text style={styles.text}>
                {key[10]}: {User[10]}
              </Text>
              <Text style={styles.text}>
                {key[7]}: {User[7]}
              </Text>
              <Text style={styles.text}>
                {key[8]}: {User[8]}
              </Text>
              <Text style={styles.text}>
                {key[3]}: {User[3]}
              </Text>

              <Button onPress={() => {}} title="REVIEW" color="#1C8ADB" />
            </Card>
            <Card style={{ padding: 10, margin: 10 }}>
              <Text style={styles.text}>
                {key2[0]}: {User2[0]}
              </Text>
              <Text style={styles.text}>
                {key2[6]}: {User2[6]}
              </Text>
              <Text style={styles.text}>
                {key2[4]}: {User2[4]}
              </Text>
              <Text style={styles.text}>
                {key2[10]}: {User2[10]}
              </Text>
              <Text style={styles.text}>
                {key2[7]}: {User2[7]}
              </Text>
              <Text style={styles.text}>
                {key2[8]}: {User2[8]}
              </Text>
              <Text style={styles.text}>
                {key2[3]}: {User2[3]}
              </Text>
              {/* {User.map(info => <Text>{info}</Text>)} */}
              <Button onPress={() => {}} title="REVIEW" color="#1C8ADB" />
            </Card>
            <Card style={{ padding: 10, margin: 10 }}>
              <Text style={styles.text}>
                {key2[0]}: {User2[0]}
              </Text>
              <Text style={styles.text}>
                {key2[6]}: {User2[6]}
              </Text>
              <Text style={styles.text}>
                {key2[4]}: {User2[4]}
              </Text>
              <Text style={styles.text}>
                {key2[10]}: {User2[10]}
              </Text>
              <Text style={styles.text}>
                {key2[7]}: {User2[7]}
              </Text>
              <Text style={styles.text}>
                {key2[8]}: {User2[8]}
              </Text>
              <Text style={styles.text}>
                {key2[3]}: {User2[3]}
              </Text>
              {/* {User.map(info => <Text>{info}</Text>)} */}
              <Button onPress={() => {}} title="REVIEW" color="#1C8ADB" />
            </Card>
          </ScrollView>
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  split: {
    flexDirection: "row"
  },
  error: {
    position: "absolute",
    bottom: 0,
    color: "red",
    fontSize: 12
  },
  img: {
    position: "absolute",
    right: 10,
    bottom: 10,
    alignItems: "center",
    height: 50,
    width: 50
  },
  item: {
    alignItems: "center",
    fontSize: 20
  },
  tab: {
    flexDirection: "row",
    marginTop: 14,
    padding: 20,
    backgroundColor: "rgba(255,255,255,0.9)",
    borderRadius: 5
  },
  // map: {
  //   padding: 100,
  //   justifyContent: "flex-end",
  //   alignItems: "center"
  // },
  container: {
    flex: 1,
    paddingTop: 10,
    paddingHorizontal: 10
  },
  titleWrapper: {
    backgroundColor: "transparent",
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  txtInput: {
    flex: 1
  },
  listItemContainer: {
    margin: 5,
    borderRadius: 5
  },
  listItem: {
    marginTop: 300,
    color: "black",
    fontSize: 20,
    padding: 10
  },
  text: {
    color: "black",
    fontSize: 18
  },
  form: {
    flex: 1,
    marginBottom: 60,
    marginHorizontal: 30
  },
  input: {
    borderBottomColor: "#1C8ADB",
    borderBottomWidth: 2,
    height: 40,
    fontSize: 20,
    color: "black"
  },
  drop: {
    fontSize: 20
  },
  entrybox: {
    flex: 1,
    marginHorizontal: 10,
    marginBottom: 20
  },
  button: {
    backgroundColor: "#1C8ADB",
    borderRadius: 40,
    height: 50,
    marginHorizontal: "10%",
    alignItems: "center",
    justifyContent: "center"
  }
});
