

///----------------------------------------------------------/////////////////////////////


import React, { Component } from 'react';
import { StyleSheet, Platform, Share, Linking, View, Text, Image ,ImageBackground} from 'react-native';
import { TouchableOpacity } from "react-native-gesture-handler";


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
      
      <ImageBackground
        source={require("../assets/background.jpg")}
        style={{ width: "100%", height: "100%" }}
      >
      <View style={styles.container}>
         <Image
            style={styles.img}
            source={require("../assets/fing.png")}
          />
          <TouchableOpacity
                style={styles.button}
                title="Submit Form"
                value="Submit"
                onPress={this.onSubToYoutube}
              >
                <Text
                  style={{ color: "#FFF", fontWeight: "400", fontSize: 22 }}
                >
                  SCAN FINGERPRINT
                </Text>
              </TouchableOpacity>
      </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
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
  button: {
    backgroundColor: "#1C8ADB",
    borderRadius: 40,
    height: 50,
    marginHorizontal: "10%",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal:30
  }
});
