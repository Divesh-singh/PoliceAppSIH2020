import React from 'react';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {Ionicons} from '@expo/vector-icons';
import {AntDesign} from '@expo/vector-icons';
import {Octicons} from '@expo/vector-icons';


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
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);




// const AppStack = createStackNavigator({
//   Home: HomeScreen,
//   Crime: CrimeRecordScreen,
//   Beat: BeatManagementScreen, 
// })



const AppTabNavigator = createBottomTabNavigator({

  Home:{
    screen: HomeScreen,
    navigationOptions:{
      tabBarIcon: ({tintColor}) => <Ionicons name = "ios-home" size={24} color={tintColor}/>
    }
  },
  Ver:{
    screen: VerificationScreen,
    navigationOptions:{
      tabBarIcon: ({tintColor}) => <Octicons name = "verified" size={24} color={tintColor}/>
    }
  },

 
  Qrscanner:{
    screen: ScannerScreen,
    navigationOptions:{
      tabBarIcon: ({tintColor}) => <AntDesign 
      name = "qrcode" 
      size={48} 
      color= "#E9446A"
      style={{
          shadowColor: "#E9446A",
          shadowOffset: {width:0, height:0},
          shadowRadius: 40,
          shadowOpacity: 10
      }}
      />
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