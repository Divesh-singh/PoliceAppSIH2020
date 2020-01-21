import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import LoadingScreen from './screens/LoadingScreen';
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import RegisterScreen from './screens/RegisterScreen';

import * as firebase from 'firebase';

var firebaseConfig = {
  apiKey: "AIzaSyC498XFsSwG4GVpuw5aylpOcUqAar-uhgI",
  authDomain: "socialapp-772f0.firebaseapp.com",
  databaseURL: "https://socialapp-772f0.firebaseio.com",
  projectId: "socialapp-772f0",
  storageBucket: "socialapp-772f0.appspot.com",
  messagingSenderId: "604219399697",
  appId: "1:604219399697:web:d63e84e4385154d6be5bb0"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const AppStack = createStackNavigator({
  Home: HomeScreen
})

const AuthStack = createStackNavigator({
  Login: LoginScreen,
  Register: RegisterScreen
})

export default createAppContainer(
  createSwitchNavigator(
    {
      Loading: LoadingScreen,
      App: AppStack,
      Auth: AuthStack
    },
    {
      initialRouteName:"Loading"
    }
    
  )
)