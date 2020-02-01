import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import CustomChatbot from '../Components/CustomChatbot';

export default class ScannerScreen extends React.Component{

    state={

    }

  render(){
    return(
      
      <View style ={styles.chat}>
        <CustomChatbot/>
        </View>
    )
  }
}

const styles= StyleSheet.create({
  chat:{
    marginTop: 20,
    
  }
})

