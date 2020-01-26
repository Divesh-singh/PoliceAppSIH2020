import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default class NocVerificationScreen extends React.Component{

    render(){
        return(
            <View style ={StyleSheet.container}>
                <Text>NocVerificationScreen ....</Text>
            </View>
        );
    }
}

styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems: "center",
        justifyContent: "center"
    }
})