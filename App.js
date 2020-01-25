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
import VerificationScreen from './screens/VerificationScreen';
import BeatManagementScreen from './screens/BeatManagementScreen';
import CrimeRecordScreen from './screens/CrimeRecordScreen';
import HeatMapScreen from './screens/HeatMapScreen';

import FirebaseKeys from './config/config';


import * as firebase from 'firebase';

var firebaseConfig = FirebaseKeys;
// Initialize Firebase
if(! firebase.apps.length){
   firebase.initializeApp({firebaseConfig});
}



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
},

{
  headerMode:'none',
}
)


const screenStack = createStackNavigator({
  
  App: AppTabNavigator,
  Home: HomeScreen,
  Beat: BeatManagementScreen,
  Crime: CrimeRecordScreen,
  Heat: HeatMapScreen,
},
{
  headerMode:'none'
});


const AuthStack = createStackNavigator({
  Login: LoginScreen,
  Register: RegisterScreen

},
{
  headerMode:'none'
});


export default createAppContainer(
  createSwitchNavigator(
    {
      Loading: LoadingScreen,
      App: AppTabNavigator,
      Auth: AuthStack,
      screen: screenStack
    },
    {
      initialRouteName:"Loading",
      headerMode:'none'
    }
    
  )
)