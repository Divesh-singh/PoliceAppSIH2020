import React from 'react';
import {View, Text, StyleSheet,FlatList, TouchableOpacity} from 'react-native';
import {Constants} from 'expo';
import * as firebase from 'firebase';


export default class ShowCrimeRecords extends React.Component{

    


    componentDidMount(){
        firebase.database().ref('Stations').child('Delhi').child('Dwarka').child('Dwarka North Police Station').on('value', (snapshot)=> {
             data = snapshot.val();
            console.log(data.longitude);
           
        })  
      }



    render(){
        return(
            <View style = {styles.container}>
        
            </View>
        )
    }
}

styles= StyleSheet.create({
    container:{
        justifyContent: "center",
        margin: 54,
        marginTop: 56
    }
})