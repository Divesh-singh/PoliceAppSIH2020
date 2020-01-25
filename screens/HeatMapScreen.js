import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default class HeatMapScreen extends React.Component{

    render(){
        return(
            <View style ={StyleSheet.container}>
                <Text>HeatMapScreen....</Text>
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