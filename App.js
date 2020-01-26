import React from 'react';
import {View,StyleSheet, Dimensions} from 'react-native';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import { createDrawerNavigator} from 'react-navigation-drawer';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {Ionicons} from '@expo/vector-icons';
import {AntDesign} from '@expo/vector-icons';
import {Octicons} from '@expo/vector-icons';
// import FirebaseKeys from './config/config';


import LoadingScreen from './screens/LoadingScreen';
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import RegisterScreen from './screens/RegisterScreen';
import NotificationScreen from './screens/NotificationScreen';
import ScannerScreen from './screens/ScannerScreen';
import HeatMapScreen from './screens/HeatMapScreen';
import VerificationScreen from './screens/VerificationScreen';


import * as firebase from 'firebase';

var firebaseConfig = {
  apiKey: "AIzaSyAf79sr9bJjAHtQpJyQa7DVVNZvjwZ1zgQ",
  authDomain: "sih2020-42ea1.firebaseapp.com",
  databaseURL: "https://sih2020-42ea1.firebaseio.com",
  projectId: "sih2020-42ea1",
  storageBucket: "sih2020-42ea1.appspot.com",
  messagingSenderId: "43086957866",
  appId: "1:43086957866:web:87d03b215fb73387816253"
}
// Initialize Firebase
if(! firebase.apps.length){
  firebase.initializeApp(firebaseConfig);
}

// var firebaseConfig = FirebaseKeys;
// // Initialize Firebase
// if(! firebaseConfig.apps.length){
//    firebase.initializeApp(firebaseConfig);
// }
const firebaseConfig = {
  apiKey: "AIzaSyAf79sr9bJjAHtQpJyQa7DVVNZvjwZ1zgQ",
  authDomain: "sih2020-42ea1.firebaseapp.com",
  databaseURL: "https://sih2020-42ea1.firebaseio.com",
  projectId: "sih2020-42ea1",
  storageBucket: "sih2020-42ea1.appspot.com",
  messagingSenderId: "43086957866",
  appId: "1:43086957866:web:87d03b215fb73387816253"
};
firebase.initializeApp (firebaseConfig); 


const width = Dimensions.get("window").width;
const DrawerConfig = {
  drawerWidth: width * 0.83
};
const Drawer = createDrawerNavigator({
  Home:HomeScreen,
  Notification:NotificationScreen 
},
{
  headerMode: "none"
},
DrawerConfig
)



const AppTabNavigator = createBottomTabNavigator({
 Drawer:Drawer,
  Home:{
    screen: HomeScreen,
    
    navigationOptions:{
      tabBarIcon: ({tintColor}) => 
      <View style = {styles.bottomIcon1}>
      <Ionicons name = "ios-home" size={24} color={tintColor} />
     </View>
    }
    
  },
  Ver:{
    screen: VerificationScreen,
    navigationOptions:{
      tabBarIcon: ({tintColor}) => 
      <View style={styles.bottomIcon2}>
      <Octicons name = "verified" size={24} color={tintColor}/>
      </View>
    }
  },

 
  Qrscanner:{
    screen: ScannerScreen,
    navigationOptions:{
      tabBarIcon: ({tintColor}) =>
      <View style={styles.bottomIcon3}>
      <AntDesign 
      name = "qrcode" 
      size={49} 
      color= "#E9446A"
      style={{
          shadowColor: "#E9446A",
          shadowOffset: {width:0, height:0},
          shadowRadius: 100,
          shadowOpacity: 10
      }}
      />
      </View>
    }
  },
  Notification:{
    screen: NotificationScreen,
    navigationOptions:{
      tabBarIcon: ({tintColor}) => <Ionicons name = "ios-notifications" size={24} color={tintColor}/>
    }
  },
  Map:{
    screen: HeatMapScreen,
    navigationOptions:{
      tabBarIcon: ({tintColor}) => <AntDesign name = "dotchart" size={24} color={tintColor}/>
        }
  }
 
},
{
 tabBarOptions:{
   activeTintColor: "#161F3D",
   inactiveTintColor: "#BBBBC4",
   showLabel: false
 }
}
)





const AuthStack = createStackNavigator({
  Login: LoginScreen,
  Register: RegisterScreen

});

export default createAppContainer(
  createSwitchNavigator(
    {
      Loading: LoadingScreen,
      App: AppTabNavigator,
      Auth: AuthStack
    },
    {
      initialRouteName:"Loading",
    }
    
  )
)



//.....................adjusting a botton tab tab bar icon styling.............................

styles = StyleSheet.create({
  bottomIcon1:{
      marginRight:51
  },
  bottomIcon2:{
    marginRight:45
},
bottomIcon3:{
  marginRight:24
},

})