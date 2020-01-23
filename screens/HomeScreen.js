import React from 'react';
import {View,Text,Image,StyleSheet, Button,ImageBackground,ScrollView,rgba, TouchableOpacity} from 'react-native';
import * as firebase from 'firebase';
import { createDrawerNavigator } from 'react-navigation-drawer';
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
        firebase.auth().signOut();
        
    }

    static navigationOptions = {
        headerTitle: () => {},
        headerRight: () => (
            <TouchableOpacity 
                onPress={this.signOutUser}
            >
                <Text>LogOut</Text>
            </TouchableOpacity>
        ),
      };


    render() {
        return(
          <ImageBackground
          source={require('../assets/Back.jpg')} style={{width: '100%', height: '100%'}} 
          >
            <View style={styles.container}>
                {/* <Text>Hello, {this.state.email}!</Text>

                <TouchableOpacity 
                style={{marginTop:32}}
                onPress={this.signOutUser}
                >
                    <Text>LogOut</Text>
                </TouchableOpacity> */}

        <ScrollView>
                  <TouchableOpacity>
                    <View style={styles.tab_red} >
                      <Text  style={styles.item} >Manage Crime Records</Text>
                      <Image style={styles.img} source={require('../assets/1.png')}/>
                    </View>
                    </TouchableOpacity>  
                    <TouchableOpacity>
                    <View  style={styles.tab}>
                      <Text style={styles.item}>Beat Management</Text>
                      <Image  style={styles.img}  source={require('../assets/2.png')}/>
                    </View>
                    </TouchableOpacity>  
                    <TouchableOpacity>
                    <View  style={styles.tab}>
                      <Text style={styles.item}>Requested Fir</Text>
                      <Image style={styles.img} source={require('../assets/3.png')}/>
                    </View>
                    </TouchableOpacity>  
                    <TouchableOpacity>
                    <View  style={styles.tab}>
                      <Text style={styles.item}>NOC Verification</Text>
                      <Image style={styles.img} source={require('../assets/4.png')}/>
                    </View>
                    </TouchableOpacity>  
                    <TouchableOpacity>
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

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         justifyContent: "center",
//         alignItems: "center"
//     }
// });

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
  