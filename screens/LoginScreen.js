import React from 'react';
import {View,Text,StyleSheet,Image,StatusBar,KeyboardAvoidingView,LayoutAnimation} from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import * as firebase from 'firebase';

export default class LoginScreen extends React.Component{

    static navigationOptions = {
            header: null,
          };


    state= {
        email: "",
        password: "",
        errorMessage: null
    };

    handleLogin = () => {
        const {email, password} = this.state
        firebase.auth().signInWithEmailAndPassword(email,password).catch(error => this.setState({errorMessage: error.message}))
    }



    render() {
        return(
            <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
                <View style={styles.container}>
                    <StatusBar barStyle="light-content"></StatusBar>
                    <View style={styles.logoBox}>
                        <Image
                        style={styles.logo}
                        source={require('../assets/logopolice.png')}
                        />
                        <Text style={styles.head}>{`Police Officer Registaration`}</Text>
                    </View>
                    <View style={styles.errorBox}>
                    {this.state.errorMessage && <Text style={styles.error}> {this.state.errorMessage} </Text>}
                    </View>

                    <View style={styles.form}>
                        <View >
                            <TextInput 
                            placeholder='Email'
                            style={styles.input}
                            autoCapitalize="none" 
                            onChangeText={email => this.setState({email})}
                            value={this.state.email}></TextInput>
                        </View>
                        <View >
                            <TextInput 
                            placeholder='Password'
                            style={styles.input} 
                            autoCapitalize="none" 
                            secureTextEntry
                            onChangeText={password => this.setState({password})}
                            value={this.state.password}
                            >
                            </TextInput>
                        </View>

                        <TouchableOpacity 
                        style={styles.button}
                        onPress={this.handleLogin}
                        >
                        <Text style={{color:"#FFF", fontWeight:"500"}}>Sign In</Text>
                        </TouchableOpacity>

                        <TouchableOpacity 
                        style={{alignSelf: "center", marginTop:32}}
                        onPress={() => this.props.navigation.navigate("Register")}
                        >
                            <Text style={{color: "#414959", fontSize: 15 }}>
                                Do not have an account? <Text style={styles.signup}>Sign Up</Text>
                                </Text>
                        </TouchableOpacity>

                    </View>
                
                </View>
            </KeyboardAvoidingView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        translateY:50
    },
    head: {
        marginTop:20,
        fontSize:25,
        fontWeight:"600",
        textAlign: "center"
    },
        logo:{
        width:100,
        height:150,
        alignItems:"center"
        },

    logoBox:{
        translateY:-70,
        alignItems:"center"
        },
    
    form:{
        translateY:-60,
        marginBottom:60,
        marginHorizontal:30,
    },
    inputTitle:{
        marginBottom:10,
        color:"#8A8F9E",
        fontSize: 20,
        textTransform: "uppercase"
    },
    input: {
        borderBottomColor:"#8A8F9E",
        borderBottomWidth: 2,
        height:40,
        fontSize:20,
        color: "#161F3D",
        marginBottom:20,
        marginTop:-5,
    },
    button:{
        marginHorizontal: -30,
        backgroundColor:"#385da8",
        borderRadius:15,
        height:40,
        alignItems: "center",
        justifyContent:"center"
    },
    signup:{
        fontWeight: "900",
        color:"#ff0000"
    },
    error:{
        color: "#ff0000",
        fontSize:20,
        fontWeight:"600",
        textAlign:"center"
    },
    errorBox:{
        backgroundColor: "#ffffff",
        alignItems:"center",
        justifyContent:"center",
        marginHorizontal:20,
        translateY:-60
    },
    
});