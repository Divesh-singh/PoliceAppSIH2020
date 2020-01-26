import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Header} from 'react-native-elements';

export default class FirManagementScreen extends React.Component{

    static navigationOptions = {
        header: null
    };

    render(){
        return(

            <View style ={styles.container}>
                <Text>FirManagementScreen Screen....</Text>
            </View>
        );
    }
}

styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems: "center",
        justifyContent: "center",
        marginTop:90
    }
})