import React from 'react';
import {View,Text,StyleSheet,TouchableOpacity,StatusBar} from 'react-native';
import {Ionicons} from '@expo/vector-icons'

export default class BeatManagementScreen extends React.Component{

    static navigationOptions = {
        header: null,
      };

    render(){
        return(
            <View style={styles.header}>
                <StatusBar barStyle="light-content"></StatusBar>
                <TouchableOpacity onPress={() => this.props.navigation.navigate("Home")}>
                <Ionicons name="md-arrow-back" size={24} color="#fffff"></Ionicons>
                </TouchableOpacity>
                <Text>Beat Record Managemetn Screen</Text>
            </View>
        );
    }
}


const styles = StyleSheet.create({

     header: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 32,
        paddingVertical: 12,
        borderBottomWidth: 1,
        borderBottomColor: '#D8D9DB',
        marginTop:30
    },    
});