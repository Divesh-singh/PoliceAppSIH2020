import React from 'react';
import {View,TextInput,StyleSheet, TouchableOpacity, Text} from 'react-native';
import * as firebase from 'firebase';


export default class CaptureText extends React.Component{


    state = {
        userText: ""
    }

    handleCapture = () => {

        //to save the data of users into the database
        firebase.database().ref('/chatBot').push({userText: this.state.userText})
                
    };



    render(){
        return(
            <View>
                    <View style={styles.container}>
                        <TextInput
                        placeholder='type message..' 
                        autoCapitalize="none" 
                        onChangeText={userText => this.setState({userText})}
                        value={this.state.number}>
                        </TextInput>
                    </View>

            <TouchableOpacity 
            style={styles.button}
            onPress={
                this.handleCapture}
            >
                <Text style={styles.text}>Send</Text>
            </TouchableOpacity>
            </View>
        )
    }

}

const styles = StyleSheet.create({
    container:{
        flexDirection: "row",
    },
    text:{
        color: "black"
    }

})