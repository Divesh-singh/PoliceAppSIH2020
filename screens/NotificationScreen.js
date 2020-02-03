import React from 'react';
import {View, Text, StyleSheet,TouchableOpacity} from 'react-native';


const push1 = 'ExponentPushToken[td1o7RLjC0PNGfDnaRxu-J]';
const push2 = 'ExponentPushToken[Rl1kLmDiQuMD8eApyfQCvF]';

export default class NotificationScreen extends React.Component{

    sendPushNotification1 = ()=> {
        let response = fetch('https://exp.host/--/api/v2/push/send',{
            method: 'POST',
            headers:{
                Accept: 'application/json',
                'Content-Type': 'application/json' 
            },
            body: JSON.stringify({ 
                  to: push1,
                  sound: 'default',
                  title: 'FIR',
                  body: 'FIR COMPLAIN VERIFIED'
              })
        })
    }

    sendPushNotification2 = ()=> {
        let response = fetch('https://exp.host/--/api/v2/push/send',{
            method: 'POST',
            headers:{
                Accept: 'application/json',
                'Content-Type': 'application/json' 
            },
            body: JSON.stringify({ 
                  to: push2,
                  sound: 'default',
                  title: 'FIR',
                  body: 'FIR COMPLAIN VERIFIED'
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
                            this.sendPushNotification1}
                        >
                            <Text style={{ fontWeight:"500"}}>send Notification1</Text>
                        </TouchableOpacity>


                        <TouchableOpacity 
                        style={styles.button}
                        onPress={
                            this.sendPushNotification2}
                        >
                            <Text style={{ fontWeight:"500"}}>send Notification2</Text>
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