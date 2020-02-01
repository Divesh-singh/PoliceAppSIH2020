import React from 'react';
import {View, Text, StyleSheet,TouchableOpacity} from 'react-native';


const push = 'ExponentPushToken[7TQIf2N8Pl82_322-iBcBJ]';

export default class NotificationScreen extends React.Component{

    sendPushNotification = ()=> {
        let response = fetch('https://exp.host/--/api/v2/push/send',{
            method: 'POST',
            headers:{
                Accept: 'application/json',
                'Content-Type': 'application/json' 
            },
            body: JSON.stringify({ 
                  to: push,
                  sound: 'default',
                  title: 'Demo',
                  body: 'Demo Notification'
              })
        })
    }




    render(){
        return(
            <View style ={styles.container}>
                <Text>Notification Screen....</Text>
            <View>
            <TouchableOpacity 
                        style={styles.button}
                        onPress={
                            this.sendPushNotification}
                        >
                            <Text style={{ fontWeight:"500"}}>send Notification</Text>
                        </TouchableOpacity>
            </View>
            </View>
        );
    }
}

styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 20,

    }
})