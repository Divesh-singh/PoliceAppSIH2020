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


export default class ElderlyManagementView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: "",
      keys: "",
      data2:'',
      keys2:'',
      data3:'',
      keys3:'',
    };
  }

  // state={

  //   // }
  componentWillMount() {
    this.fetchDataUser();
    
    this.fetchDataUser2();

    this.fetchDataUser3();
  }

  fetchDataUser = () => {
    firebase
      .database()
      .ref("ElderlyManagement/-M-0y0l_rtU7gl2l8hwX")
      .on("value", snapshot => {
        data = snapshot.val();
        keys = Object.keys(data);
        dat= Object.values(data);
        //  console.log(snapshot);
        this.setState({ keys: keys, data: dat });
      });

    // this.fetchDataEach();
  };
  fetchDataUser2 = () => {
    firebase
      .database()
      .ref("ElderlyManagement/-M-DH8x4YAGmHuexLuo8")
      .on("value", snapshot => {
        data = snapshot.val();
        keys = Object.keys(data);
        dat= Object.values(data);
        //  console.log(snapshot);
        this.setState({ keys2: keys, data2: dat });
      });

    // this.fetchDataEach();
  };
  fetchDataUser3 = () => {
    firebase
      .database()
      .ref("ElderlyManagement/-M-DHTLsMxQaQIHegDgL")
      .on("value", snapshot => {
        data = snapshot.val();
        keys = Object.keys(data);
        dat= Object.values(data);
        //  console.log(snapshot);
        this.setState({ keys3: keys, data3: dat });
      });

    // this.fetchDataEach();
  };
  //   fetchDataEach = () => {
  //     firebase.database().ref('Clearance/'+this.state.keys[0]).on('value', (snapshot)=> {
  //          data = Object.values(snapshot.val());
  //         //  console.log(snapshot);
  //       this.setState({data:data});
  //     })
  // };
  render() {
    // delete this.state.data[0];
    // // var dat=this.state.data;
    console.log(this.state.keys3);
    // const tmp=this.state.keys.map((dat)=>{
    //     return (
    //         <FlatList data={this.state.data}
    //       renderItem={
    //         ({item}) =>
    //         <View >
    //           <Text>
    //             {item.dat}
    //           </Text>
    //         </View>
    //         }
    //       />
    //     )
    //   });
    var User=this.state.data;
    var key=this.state.keys;
    
    var User2=this.state.data2;
    var key2=this.state.keys2;

    var User3=this.state.data3;
    var key3=this.state.keys3;
    // console.log(User[0]);
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
            text: "Pending Complaints",
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
                "Here You can see the records of Elderly Management System.\n"
              )
          }}
          backgroundColor="#1C8ADB"
        />
        {/* {tmp} */}
        {/*
        <FlatList data={this.state.data.keys[0]}
          renderItem={
            ({item}) => 
            <View >
              <Text>
                {item.Name}
              </Text>
            </View>
            }
          /> */}
        <View style={styles.container}>
          <ScrollView>
            <Card style={{ padding: 10, margin: 10 }}>
              <Text style={styles.text}>{key[4]}:{" "}{User[4]}</Text>
              <Text style={styles.text}>{key[2]}:{" "}{User[2]}</Text>
              <Text style={styles.text}>{key[1]}:{" "}{User[1]}</Text>
              <Text style={styles.text}>{key[5]}:{" "}{User[5]}</Text>
              <Text style={styles.text}>{key[6]}:{" "}{User[6]}</Text>
              <Text style={styles.text}>{key[0]}:{" "}{User[0]}</Text>
              <Text style={styles.text}>{key[3]}:{" "}{User[3]}</Text>
             {/* {User.map(info => <Text>{info}</Text>)} */}
              <Button
                onPress={() => {}}
                title="LOCATE"
                color="#1C8ADB"
              />
            </Card>
            <Card style={{ padding: 10, margin: 10 }}>
            <Text style={styles.text}>{key2[4]}:{" "}{User2[4]}</Text>
              <Text style={styles.text}>{key2[2]}:{" "}{User2[2]}</Text>
              <Text style={styles.text}>{key2[1]}:{" "}{User2[1]}</Text>
              <Text style={styles.text}>{key2[5]}:{" "}{User2[5]}</Text>
              <Text style={styles.text}>{key2[6]}:{" "}{User2[6]}</Text>
              <Text style={styles.text}>{key2[0]}:{" "}{User2[0]}</Text>
             {/* {User.map(info => <Text>{info}</Text>)} */}
              <Button
                onPress={() => {}}
                title="LOCATE"
                color="#1C8ADB"
              />
            </Card>
            <Card style={{ padding: 10, margin: 10 }}>
              <Text style={styles.text}>{key3[4]}:{" "}{User3[4]}</Text>
              <Text style={styles.text}>{key3[2]}:{" "}{User3[2]}</Text>
              <Text style={styles.text}>{key3[1]}:{" "}{User3[1]}</Text>
              <Text style={styles.text}>{key3[5]}:{" "}{User3[5]}</Text>
              <Text style={styles.text}>{key3[6]}:{" "}{User3[6]}</Text>
              <Text style={styles.text}>{key3[0]}:{" "}{User3[0]}</Text>
             {/* {User.map(info => <Text>{info}</Text>)} */}
              <Button
                onPress={() => {}}
                title="LOCATE"
                color="#1C8ADB"
              />
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
