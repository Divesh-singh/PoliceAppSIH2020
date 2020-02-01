import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native' 
import * as ImagePicker from 'expo-image-picker';

import * as firebase from 'firebase';


  export default class CaptureImage extends React.Component{


    chooseImage = async () => {
        // let result=await ImagePicker.launchCameraAsync();
        let result = await ImagePicker.launchImageLibraryAsync();
    
        // this.setState({ image:blob.data.name })
        if (!result.cancelled) {
          this.uploadImage(result.uri, this.state.name)
            .then(() => {
              Alert.alert("Success");
            })
            .catch(error => {
              Alert.alert(error);
            });
        }
      };
      uploadImage = async (uri,imageName) => {
        const response = await fetch(uri);
        blob = await response.blob();
        var ref = firebase
          .storage()
          .ref()
          .child("chatbot/" + imageName);
          // firebase
          // .database()
          // .ref("Tenant/")
          // .push({image:blob.data.name});
          photo=blob.data.name
        return ref.put(blob);
    
      };

      render(){
          return(
              <View style={styles.container}>
            <TouchableOpacity
            
            onPress={this.chooseImage}
          >
            <Text style={styles.text}>Upload</Text>
          </TouchableOpacity>
          </View>
          )
      }
  }

  const styles= StyleSheet.create({
      container:{
          justifyContent:"center",
          backgroundColor: "skyblue",
          paddingLeft: 150,
          margin: -12,
          borderRadius: 4,
          
      },
      text:{
          color: "white",
          fontSize: 20,
          backfaceVisibility: "hidden",

      }
  })
