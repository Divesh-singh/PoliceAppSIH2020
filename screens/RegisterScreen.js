import React from 'react';
import {View,Text,StyleSheet,Image,FlatList,FormLabel, FormInput, FormValidationMessage} from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import * as firebase from 'firebase';

export default class RegisterScreen extends React.Component{

    state= {
        name:"",
        email: "",
        number:"",
        password: "",
        errorMessage: null
    };

    handleSignUp = () => {
        firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).then(userCredentials =>{
            return userCredentials.user.updateProfile({
                displayName: this.state.name
            })
        })
        .catch(error => this.setState({errorMessage: error.message}));
    };



    render() {
        return(
            <View style={styles.container}>
                <View style={styles.logoBox}>
                    <Image
                    style={styles.logo}
                    source={require('../assets/logopolice.png')}
                    />
                    <Text style={styles.head}>{`Police Officer Registaration`}</Text>
                </View>

                <View style={styles.errorMessage}>
                {this.state.errorMessage && <Text style={styles.error}> {this.state.errorMessage} </Text>}
                </View>

                <View style={styles.form}>
                    <View >
                        <TextInput
                        placeholder='Full Name' 
                        style={styles.input}
                        autoCapitalize="none" 
                        onChangeText={name => this.setState({name})}
                        value={this.state.name}></TextInput>
                    </View>
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
                        placeholder='Mobile Number' 
                        style={styles.input}
                        autoCapitalize="none" 
                        onChangeText={number => this.setState({number})}
                        value={this.state.number}></TextInput>
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
                    onPress={this.handleSignUp}
                    >
                        <Text style={{color:"#FFF", fontWeight:"500"}}>Sign Up</Text>
                    </TouchableOpacity>

                    <TouchableOpacity 
                    style={{alignSelf: "center", marginTop:32}}
                    onPress={() => this.props.navigation.navigate("Login")}
                    >
                        <Text style={{color: "#414959", fontSize: 15 }}>
                            Already Registered? <Text style={styles.signup}>Log In</Text>
                            </Text>
                    </TouchableOpacity>

                </View>
            
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
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
    head: {
        
        fontSize:25,
        fontWeight:"600",
        textAlign: "center"
    },
    errorMessage:{
        height:72,
        alignItems:"center",
        justifyContent:"center",
        marginHorizontal:30
    },
    form:{
        translateY:-70
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
        backgroundColor:"#E9446A",
        borderRadius:15,
        height:40,
        alignItems: "center",
        justifyContent:"center"
    },
    signup:{
        fontWeight: "600",
        color:"#E9446A"
    },
    error:{
        color: "#ff0000",
        fontSize:15,
        fontWeight:"600",
        textAlign:"center"
    }
    
});