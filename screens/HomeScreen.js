import React from 'react';
import {View,Text,StyleSheet,TouchableOpacity} from 'react-native';
import * as firebase from 'firebase'

export default class HomeScreen extends React.Component{

    state ={
        email:"",
        displayname: "",
    }
    componentDidMount(){
        const {email, displayname} = firebase.auth().currentUser;
        this.setState({email, displayname});
    }

    signOutUser = () => {
        firebase.auth().signOut();
    }


    render() {
        return(
            <View style={styles.container}>
                <Text>Hello, {this.state.email}!</Text>

                <TouchableOpacity 
                style={{marginTop:32}}
                onPress={this.signOutUser}
                >
                    <Text>LogOut</Text>
                </TouchableOpacity>
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