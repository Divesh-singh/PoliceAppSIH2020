import React from 'react';
import {View,Text,StyleSheet,ActivityIndicator,Image} from 'react-native';
import * as firebase from 'firebase';

export default class LoadingScreen extends React.Component{
    
    componentDidMount(){
        firebase.auth().onAuthStateChanged(user => {
            this.props.navigation.navigate(user ? "App" : "Auth");
        })
    }
    
    render() {
        return(
            <View style={styles.container}>
                <Image source={require('../assets/logo.jpg')} />
                <Text>Loading</Text>
                <ActivityIndicator size="large"></ActivityIndicator>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
});