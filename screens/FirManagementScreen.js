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


const push1 = 'ExponentPushToken[T2vC37NTh_T1ecroeA0hml]';
const push2 = 'ExponentPushToken[iu3IrpIo2witn4bOaK_-0T]';
const push3 = 'ExponentPushToken[td1o7RLjC0PNGfDnaRxu-J]';

export default class Activities extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: "",
      keys: "",
      data2:'',
      keys2:'',
    };
  }

    sendPushNotification1 = ()=> {
        let response = fetch('https://exp.host/--/api/v2/push/send',{
            method: 'POST',
            headers:{
                Accept: 'application/json',
                'Content-Type': 'application/json' 
            },
            body: JSON.stringify({ 
                  to: push1,
                  sound: 'default',
                  title: 'FIR',
                  body: 'FIR COMPLAINT VERIFIED'
              })
        })
    }



    sendPushNotification2 = ()=> {
      let response = fetch('https://exp.host/--/api/v2/push/send',{
          method: 'POST',
          headers:{
              Accept: 'application/json',
              'Content-Type': 'application/json' 
          },
          body: JSON.stringify({ 
                to: push2,
                sound: 'default',
                title: 'NOC Request in Queue',
                body: 'NOC request will be verified by 12/03/2020'
            })
      })
  }

  
  sendPushNotification3 = ()=> {
    let response = fetch('https://exp.host/--/api/v2/push/send',{
        method: 'POST',
        headers:{
            Accept: 'application/json',
            'Content-Type': 'application/json' 
        },
        body: JSON.stringify({ 
              to: push3,
              sound: 'default',
              title: 'Character Certificate',
              body: 'Appontment Scheduling for Character Certificate '
          })
    })
}





  sendPushNotification3 = ()=> {
    let response = fetch('https://exp.host/--/api/v2/push/send',{
        method: 'POST',
        headers:{
            Accept: 'application/json',
            'Content-Type': 'application/json' 
        },
        body: JSON.stringify({ 
              to: push1,
              sound: 'default',
              title: 'FIR',
              body: 'FIR COMPLAIN VERIFIED'
          })
    })
}






  componentWillMount() {
    this.fetchDataUser();
    
    this.fetchDataUser2();
  }

  fetchDataUser = () => {
    firebase
      .database()
      .ref("Lost E-FIR/-M01_vZSORB9MGf5ZACG")
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
      .ref("NOC/-M-4nlvTqXaHFBBPDHc7")
      .on("value", snapshot => {
        data = snapshot.val();
        keys = Object.keys(data);
        dat= Object.values(data);
        //  console.log(snapshot);
        this.setState({ keys2: keys, data2: dat });
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
    console.log(this.state.keys);
    // // var dat=this.state.data;
    // console.log(this.state.data);
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
            text: "Reuested FIR",
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
            <Text style={{fontSize: 20}}>Type:Lost E-Fir</Text>
              <Text style={styles.text}>{key[0]}:{" "}{User[0]}</Text>
              <Text style={styles.text}>{key[6]}:{" "}{User[6]}</Text>
              <Text style={styles.text}>{key[3]}:{" "}{User[3]}</Text>
              <Text style={styles.text}>{key[5]}:{" "}{User[5]}</Text>
              <Text style={styles.text}>{key[4]}:{" "}{User[4]}</Text>
              <Text style={styles.text}>{key[10]}:{" "}{User[10]}</Text>
              <Text style={styles.text}>{key[7]}:{" "}{User[7]}</Text>
              <Text style={styles.text}>{key[8]}:{" "}{User[8]}</Text>
              {/*<Text style={styles.text}>{key[3]}:{" "}{User[3]}</Text> */}
             {/* {User.map(info => <Text>{info}</Text>)} */}
              <Button
                onPress={this.sendPushNotification1}
                title="REVIEW"
                color="#1C8ADB"
              />
            </Card>
            <Card style={{ padding: 10, margin: 10 }}>
            <Text style={{fontSize: 20}}>Type:Complaints</Text>
              <Text style={styles.text}>{key2[0]}:{" "}{User2[0]}</Text>
              <Text style={styles.text}>{key2[6]}:{" "}{User2[6]}</Text>
              <Text style={styles.text}>{key2[4]}:{" "}{User2[4]}</Text>
              <Text style={styles.text}>{key2[10]}:{" "}{User2[10]}</Text>
              <Text style={styles.text}>{key2[7]}:{" "}{User2[7]}</Text>
              <Text style={styles.text}>{key2[8]}:{" "}{User2[8]}</Text>
              <Text style={styles.text}>{key2[3]}:{" "}{User2[3]}</Text>
             {/* {User.map(info => <Text>{info}</Text>)} */}
              <Button
                onPress={this.sendPushNotification2}
                title="REVIEW"
                color="#1C8ADB"
              />
            </Card>
            <Card style={{ padding: 10, margin: 10 }}>
            <Text style={{fontSize: 20}}>Type:Complaints</Text>
            <Text style={styles.text}>{key2[0]}:{" "}{User2[0]}</Text>
              <Text style={styles.text}>{key2[6]}:{" "}{User2[6]}</Text>
              <Text style={styles.text}>{key2[4]}:{" "}{User2[4]}</Text>
              <Text style={styles.text}>{key2[10]}:{" "}{User2[10]}</Text>
              <Text style={styles.text}>{key2[7]}:{" "}{User2[7]}</Text>
              <Text style={styles.text}>{key2[8]}:{" "}{User2[8]}</Text>
              <Text style={styles.text}>{key2[3]}:{" "}{User2[3]}</Text>
             {/* {User.map(info => <Text>{info}</Text>)} */}
              <Button
                onPress={this.sendPushNotification3}
                title="REVIEW"
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
