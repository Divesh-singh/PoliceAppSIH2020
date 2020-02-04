// import React from 'react';
// import {View, Text, StyleSheet,TouchableOpacity} from 'react-native';


// const push1 = 'ExponentPushToken[td1o7RLjC0PNGfDnaRxu-J]';
// const push2 = 'ExponentPushToken[Rl1kLmDiQuMD8eApyfQCvF]';

// export default class NotificationScreen extends React.Component{

//     sendPushNotification1 = ()=> {
//         let response = fetch('https://exp.host/--/api/v2/push/send',{
//             method: 'POST',
//             headers:{
//                 Accept: 'application/json',
//                 'Content-Type': 'application/json' 
//             },
//             body: JSON.stringify({ 
//                   to: push1,
//                   sound: 'default',
//                   title: 'FIR',
//                   body: 'FIR COMPLAIN VERIFIED'
//               })
//         })
//     }

//     sendPushNotification2 = ()=> {
//         let response = fetch('https://exp.host/--/api/v2/push/send',{
//             method: 'POST',
//             headers:{
//                 Accept: 'application/json',
//                 'Content-Type': 'application/json' 
//             },
//             body: JSON.stringify({ 
//                   to: push2,
//                   sound: 'default',
//                   title: 'FIR',
//                   body: 'FIR COMPLAIN VERIFIED'
//               })
//         })
//     }




//     render(){
//         return(
//             <View style ={styles.container}>
//                 <Text>Notification Screen....</Text>
//             <View>
//             <TouchableOpacity 
//                         style={styles.button}
//                         onPress={
//                             this.sendPushNotification1}
//                         >
//                             <Text style={{ fontWeight:"500"}}>send Notification1</Text>
//                         </TouchableOpacity>


//                         <TouchableOpacity 
//                         style={styles.button}
//                         onPress={
//                             this.sendPushNotification2}
//                         >
//                             <Text style={{ fontWeight:"500"}}>send Notification2</Text>
//                         </TouchableOpacity>
//             </View>
//             </View>
//         );
//     }
// }

// styles = StyleSheet.create({
//     container:{
//         flex:1,
//         alignItems: "center",
//         justifyContent: "center",
//         marginTop: 20,

//     }
// })




import React, { Component } from 'react';
import { StyleSheet, Platform, Share, Linking, View, Text, Image } from 'react-native';



export default class App extends Component {
  onShare = async () => {
    const uri = await getGalleryImageAsync(1);

    Share.share(
      {
        title: 'test title',
        url: uri,
      },
      {
        excludedActivityTypes: [

        ],
      }
    );
  };

  onLinkToInstagramAndroid = async () => {
    const uri = await getGalleryImageAsync();
    const encodedURL = encodeURIComponent(uri);
    const whatsappURL = `whatsapp://library?AssetPath=${encodedURL}`;
    return Linking.openURL(whatsappURL);
  };

  onSubToYoutube = async () => {
    const whatsappURL = `https://play.google.com/store/apps/details?id=com.ACPL.FM220_Telecom&hl=en`;
    return Linking.openURL(whatsappURL);
  };

  onOpenApp = async () => {

    const settings = 'app-settings://';
    const notes = 'mobilenotes://';
    const clashOfClans = 'clashofclans://';

    if(Platform.OS === 'android'){

        const snapchat = Platform.select({
            android: 'snapchat://add/baconbrix',
            default: 'https://www.acpl.in.net/',
          });
    } 


    return Linking.openURL(snapchat);
  };

  render() {
    return (
      <View style={styles.container}>
         <Image
            style={styles.img}
            source={require("../assets/fing.png")}
          />
        <Text style={styles.text} onPress={this.onSubToYoutube}>
          Scan the Suspect fingerprint 
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: '#FFFF',
    justifyContent: 'space-around',
    alignItems: 'center',

  },
  img: {
    alignItems: "center",
    height: 150,
    width: 150,

  },
  text: {
    color: '#FFFF',
    fontWeight: 'bold',
    fontSize: 20,
    paddingHorizontal: 24,
    paddingVertical: 16,
    backgroundColor: 'black',
    borderRadius: 12,
    overflow: 'hidden',
  },
});
