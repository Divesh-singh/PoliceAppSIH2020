import React from 'react';
import {View,Text,Image,StyleSheet, Button,ImageBackground,ScrollView,rgba,LayoutAnimation, TouchableOpacity} from 'react-native';
import {Header} from 'react-native-elements';
import Ripple from "react-native-material-ripple";
import {Ionicons} from '@expo/vector-icons';
import {AntDesign} from '@expo/vector-icons';
import * as firebase from 'firebase';
import LogoTitle from './LogoScreen';




//
// var this.state.language = 1    // 0: Hindi  1:English
const crimerecH = <Text style={{
      alignItems: "center",
      fontSize: 20,
      paddingTop: 10,
      fontWeight: "500",
      textAlign: "center"
    }}> क्राइम रिकॉर्ड की व्यवस्था करें </Text>;
const crimerecE = <Text style={{
      alignItems: "center",
      fontSize: 20,
      paddingTop: 10,
      fontWeight: "500",
      textAlign: "center"
    }}> CRIME RECORD</Text>;

const beatH = <Text style={{
      alignItems: "center",
      fontSize: 20,
      paddingTop: 10,
      fontWeight: "500",
      textAlign: "center"
    }}> बीट मैनेजमेंट </Text>;
const beatE = <Text style={{
      alignItems: "center",
      fontSize: 20,
      paddingTop: 10,
      fontWeight: "500",
      textAlign: "center"
    }}> BEAT MANAGE</Text>;


const firH = <Text style={{
      alignItems: "center",
      fontSize: 20,
      paddingTop: 10,
      fontWeight: "500",
      textAlign: "center"
    }}> प्राथमिकी अनुरोध </Text>;
const firE = <Text style={{
      alignItems: "center",
      fontSize: 20,
      paddingTop: 10,
      fontWeight: "500",
      textAlign: "center"
    }}> REQUESTED FIRs </Text>;


const nocH = <Text style={{
      alignItems: "center",
      fontSize: 20,
      paddingTop: 10,
      fontWeight: "500",
      textAlign: "center"
    }}> NOC सत्यापन</Text>;
const nocE = <Text style={{
      alignItems: "center",
      fontSize: 20,
      paddingTop: 10,
      fontWeight: "500",
      textAlign: "center"
    }}> VERIFY NOC </Text>;


const statsH = <Text style={{
      alignItems: "center",
      fontSize: 20,
      paddingTop: 10,
      fontWeight: "500",
      textAlign: "center"
    }}> आपराधिक सांख्यिकीं </Text>;
const statsE = <Text style={{
      alignItems: "center",
      fontSize: 20,
      paddingTop: 10,
      fontWeight: "500",
      textAlign: "center"
    }}> CRIMINAL STATS </Text>;

const fingerH = <Text style={{
      alignItems: "center",
      fontSize: 20,
      paddingTop: 10,
      fontWeight: "500",
      textAlign: "center"
    }}> स्कैन फ़िंगरप्रिंट </Text>;
const fingerE = <Text style={{
      alignItems: "center",
      fontSize: 20,
      paddingTop: 10,
      fontWeight: "500",
      textAlign: "center"
    }}> SCAN FINGERPRINT </Text>;

const changeH = <Text style={{
      alignItems: "center",
      fontSize: 20,
      paddingTop: 10,
      fontWeight: "500",
      textAlign: "center"
    }}> भाषा बदले </Text>;
const changeE = <Text style={{
      alignItems: "center",
      fontSize: 20,
      paddingTop: 10,
      fontWeight: "500",
      textAlign: "center"
    }}> Change language </Text>;






export default class HomeScreen extends React.Component{

    state ={
        email:"",
        displayname: "",
        language:1,
    }
    componentDidMount(){
        const {email, displayname} = firebase.auth().currentUser;
        this.setState({email, displayname});
    }

    switch=()=>{
      if (this.state.language === 0)
      {
alert("Language CHANGED to English")
          this.setState({language:1});
              return false;                   //HINDI
      }
      else if(this.state.language===1){
        alert("Language CHANGED to Hindi")
              this.setState({language:0});
                return false;                   //eNGLISH
      }
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
                  {this.state.language === 0 ? crimerecH : crimerecE}
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
                   {this.state.language === 0 ? beatH : beatE}
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
     {this.state.language === 0 ? firH : firE}
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
                   {this.state.language === 0 ? nocH : nocE}
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
                   {this.state.language === 0 ? statsH : statsE}
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
                    source={require("../assets/fing.png")}
                  />
                   {this.state.language === 0 ? fingerH : fingerE}
                </Ripple>
              </View>
              
            </View>
            <View style={styles.split}>
                <Ripple
                  rippleColor="#1C8ADB"
                  backgroundColor="white"
                  style={styles.tab}
                  onPress={()=>{this.switch()}}
                >
                  <Image
                    style={styles.img}
                    source={require("../assets/ENG.png")}
                  />
                   {this.state.language === 0 ? changeH : changeE}
                </Ripple>
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
  