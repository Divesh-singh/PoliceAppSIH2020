import React from 'react';
import {View,Text,Image,StyleSheet, Button,ImageBackground,ScrollView,rgba,LayoutAnimation, TouchableOpacity} from 'react-native';
import {Header} from 'react-native-elements';

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
                    leftComponent={{
                      icon: 'menu',
                      color: "#1C8ADB",
                      onPress: () => alert('Menu'),
                    }}
                    centerComponent = {<LogoTitle />}
                    
                    rightComponent={{
                         icon: "exit-to-map",
                          color: "#1C8ADB",
                           onPress: this.signOutUser
                       }}
                    backgroundColor='#fff'
                    
                  />
                

            <View style={styles.container}>
                {/* <Text>Hello, {this.state.email}!</Text>

                <TouchableOpacity 
                style={{marginTop:32}}
                onPress={this.signOutUser}
                >
                    <Text>LogOut</Text>
                </TouchableOpacity> */}

        <ScrollView>
                    <TouchableOpacity
                      onPress={()=> this.props.navigation.navigate("crimeRecord")}
                    >
                    <View style={styles.tab_red} >
                      <Text  style={styles.item} >Manage Crime Records</Text>
                      <Image style={styles.img} source={require('../assets/1.png')}/>
                    </View>
                    </TouchableOpacity>

                    <TouchableOpacity
                    onPress={()=>{this.props.navigation.navigate("BeatManagement");}}
                    >
                    <View  style={styles.tab}>
                      <Text style={styles.item}>Beat Management</Text>
                      <Image  style={styles.img}  source={require('../assets/2.png')}/>
                    </View>
                    </TouchableOpacity>  

                    <TouchableOpacity 
                    onPress={()=>{this.props.navigation.navigate("FirManagement");}}
                    >
                    <View  style={styles.tab}>
                      <Text style={styles.item}>Requested Fir</Text>
                      <Image style={styles.img} source={require('../assets/3.png')}/>
                    </View>
                    </TouchableOpacity> 

                    <TouchableOpacity
                      onPress={()=>{this.props.navigation.navigate("NocVerification");}}
                    >
                    <View  style={styles.tab}>
                      <Text style={styles.item}>NOC Verification</Text>
                      <Image style={styles.img} source={require('../assets/4.png')}/>
                    </View>
                    </TouchableOpacity>  
                    <TouchableOpacity
                         onPress={()=>{this.props.navigation.navigate("HeatMap");}}
                    >
                    <View  style={styles.tab}>
                      <Text style={styles.item}>Criminal statistics</Text>
                      <Image  style={styles.img}  source={require('../assets/6.png')}/>
                    </View>
                    </TouchableOpacity>  
                    <TouchableOpacity>
                    <View  style={styles.tab}>
                      <Text style={styles.item}>Recent Activities</Text>
                      <Image  style={styles.img}  source={require('../assets/6.png')}/>
                    </View>
                    </TouchableOpacity>  
                </ScrollView>
            </View>
            </ImageBackground>
        )
    } 
}


const style = StyleSheet.create({
    container: {
      flex: 1,
    },
  });
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: 10,
      paddingHorizontal: 10,
    },
    img:{
      position: "absolute",
      right:10,
      bottom:10,
      alignItems:"center",
      height:50,
      width:50
    },
    tab:{
      flexDirection:'row',
      marginTop: 14,
      padding: 20,
      backgroundColor: 'rgba(255,255,255,0.9)',
      borderRadius:5,
    },
    tab_red:{
      flexDirection:'row',
      marginTop: 14,
      padding: 20,
      backgroundColor: 'rgba(255,0,0,0.65)',
      borderRadius:5,
    },
    item: {
      alignItems:"center",
      fontSize:20 ,
    }
  });
  