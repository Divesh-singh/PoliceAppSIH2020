import React from 'react';
import {View,Text,StyleSheet,Image,KeyboardAvoidingView,StatusBar,LayoutAnimation} from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import * as firebase from 'firebase';


export default class RegisterScreen extends React.Component{

    static navigationOptions = {
        header: null,
      };

    state= {
        name:"",
        email: "",
        adhar:"",
        number:"",
        errorMessage: null,
    };

    handleAdd = () => {
        firebase.database().ref('/Elder').push(state)
        .then(
          this.props.navigation.navigate('Home')
        )
        .catch(error => this.setState({errorMessage: error.message}));
    };



    render() {
        LayoutAnimation.easeInEaseOut();

        return(
            
            <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
                <View style={styles.container}>
                    <TouchableOpacity>
                         
                    </TouchableOpacity>
                <StatusBar barStyle="light-content"></StatusBar>
                    <View style={styles.logoBox}>
                        <Text style={styles.head}>{`Elder Person Record`}</Text>
                    </View>

                    <View style={styles.errorBox}>
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
                            placeholder='Adhar Card Number' 
                            style={styles.input}
                            autoCapitalize="none" 
                            onChangeText={adhar => this.setState({adhar})}
                            value={this.state.adhar}></TextInput>
                        </View>
                        <View >
                            <TextInput
                            placeholder='Mobile Number' 
                            style={styles.input}
                            autoCapitalize="none" 
                            onChangeText={number => this.setState({number})}
                            value={this.state.number}></TextInput>
                        </View>

                        <TouchableOpacity 
                        style={styles.button}
                        onPress={()=>{
                            this.handleAdd;
                        }}
                        >
                            <Text style={{color:"#FFF", fontWeight:"500"}}>Add</Text>
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
        backgroundColor:"#385da8",
        borderRadius:15,
        height:40,
        alignItems: "center",
        justifyContent:"center"
    },
    signup:{
        fontWeight: "600",
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
        translateY:-75,
    },
    
});