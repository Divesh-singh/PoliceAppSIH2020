import React from 'react';
import {View,Text,Image,StyleSheet, Button,ImageBackground,ScrollView,rgba,LayoutAnimation, TouchableOpacity} from 'react-native';
import {Header} from 'react-native-elements';
import Ripple from "react-native-material-ripple";
import {Ionicons} from '@expo/vector-icons';
import {AntDesign} from '@expo/vector-icons';
import * as firebase from 'firebase';
import LogoTitle from './LogoScreen';
export default class HomeScreen extends React.Component{

    state ={
        email:"",
        displayname: "",
    }
    componentDidMount(){
        const {email, displayname} = firebase.auth().currentUser;
        this.setState({email, displayname});
    }

    signOutUser = () => {
        firebase.auth().signOut().then(() => {
          this.props.navigation.navigate("Login")
        });
        
    }
    
    //----------------- Header---------------
    static navigationOptions = {
    // headerTitle: () =><LogoTitle /> ,
    //     headerTitleStyle: {
                
    //     },
    //     headerStyle: {
    //         backgroundColor: '#ffffff',
    //     },
    //     headerRight: () => (
    //         <TouchableOpacity 
    //             onPress={this.signOutUser}
    //         >
    //             <Text>LogOut</Text>
    //         </TouchableOpacity>
    //     ),
        header: null,
      };
      //--------------header End=-------------------


    render() {
      LayoutAnimation.easeInEaseOut();
        return(
          <ImageBackground
          source={require('../assets/Back.jpg')} style={{width: '100%', height: '100%'}}>
               <Header
                    // leftComponent={{
                    //   icon: 'menu',
                    //   color: "#1C8ADB",
                    //   onPress: () => alert('Menu'),
                    // }}
                    centerComponent = {<LogoTitle />}
                    
                    rightComponent={{
                         icon:"exit-to-app",
                          color: "#1C8ADB",
                           onPress: this.signOutUser
                       }}
                    backgroundColor='#fff'
                    
                  />
                

                <View style={styles.container}>
          <ScrollView>
            <View style={styles.splitupper}>
              <View style={styles.split}>
                <Ripple
                  rippleColor="#1C8ADB"
                  backgroundColor="white"
                  style={styles.tab}
                  onPress={() => this.props.navigation.navigate("crimeRecord")}
                >
                  <Image
                    style={styles.img}
                    source={require("../assets/cricon.png")}
                  />
                  <Text
                    style={styles.item}
                  >
                  CRIME RECORDS
                  </Text>
                </Ripple>
              </View>
              <View style={styles.split}>
                <Ripple
                  rippleColor="#1C8ADB"
                  backgroundColor="white"
                  style={styles.tab}
                  onPress={() => this.props.navigation.navigate("BeatManagement")}
                >
                  <Image
                  style={{alignItems: "center",
                  height: 80,
                  width: 80}}
                    source={require("../assets/2.png")}
                  />
                  <Text style={styles.item}>MANAGE BEAT</Text>
                </Ripple>
              </View>
            </View>
            <View style={styles.splitupper}>
              <View style={styles.split}>
                <Ripple
                  rippleColor="#1C8ADB"
                  backgroundColor="white"
                  style={styles.tab}
                  onPress={() => this.props.navigation.navigate("FirManagement")}
                >
                  <Image
                    style={styles.img}
                    source={require("../assets/3.png")}
                  />
    <Text style={styles.item}>MANAGE FIR</Text>
                </Ripple>
              </View>
              <View style={styles.split}>
                <Ripple
                  rippleColor="#1C8ADB"
                  backgroundColor="white"
                  style={styles.tab}
                  onPress={() => this.props.navigation.navigate("NocVerification")}
                >
                  <Image
                    style={styles.img}
                    source={require("../assets/4.png")}
                  />
                  <Text style={styles.item}>VERIFY NOC</Text>
                </Ripple>
              </View>
            </View>
            <View style={styles.splitupper}>
              <View style={styles.split}>
                <Ripple
                  rippleColor="#1C8ADB"
                  backgroundColor="white"
                  style={styles.tab}
                  onPress={() => this.props.navigation.navigate("CrimeStats")}
                >
                  <Image
                    style={styles.img}
                    source={require("../assets/5.png")}
                  />
                  <Text style={styles.item}>CRIMINAL STATS</Text>
                </Ripple>
              </View>
              <View style={styles.split}>
                <Ripple
                  rippleColor="#1C8ADB"
                  backgroundColor="white"
                  style={styles.tab}
                  onPress={() => this.props.navigation.navigate("RecentActivity")}
                >
                  <Image
                    style={styles.img}
                    source={require("../assets/6.png")}
                  />
                  <Text style={styles.item}>RECENT ACTIVITIES</Text>
                </Ripple>
              </View>
            </View>
            
          </ScrollView>
        </View>
            </ImageBackground>
        )
    } 
}


  const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding:10
    },
    splitupper: {
      flex: 1,
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center"
    },
    split: {
      flex: 1,
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      marginTop: 6,
      marginHorizontal:6,
    },
    sos: {
      flex: 1,
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      margin: 10
    },
    img: {
      alignItems: "center",
      height: 60,
      width: 60
    },
    tab: {
      marginTop: 10,
      alignItems: "center",
      justifyContent: "center",
      textAlign: "center",
      width: "100%",
      height: 150,
      padding: 20,
      borderRadius: 8
    },
    item: {
      alignItems: "center",
      fontSize: 20,
      paddingTop:10,
      fontWeight: "500",
      textAlign: "center"
    },
    titleWrapper: {
      backgroundColor: "transparent",
      flex: 1,
      justifyContent: "center",
      alignItems: "center"
    }
  });
  