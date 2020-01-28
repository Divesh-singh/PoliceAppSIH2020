import React,{useState} from 'react';
import {View,Text,Image,StyleSheet, Button,ImageBackground,ScrollView,rgba,StatusBar} from 'react-native';
import {Header} from 'react-native-elements';
import { Constants } from 'expo';
import PropTypes from 'prop-types';
import {Ionicons} from '@expo/vector-icons';
import { TextInput, TouchableOpacity, FlatList } from 'react-native-gesture-handler';
import { Right, Row, Form } from 'native-base';


export default class CrimeRecords extends React.Component{
    
    static navigationOptions = {
        header: null,
    };
  
    render() {            
        return(
            <ImageBackground source={require('../assets/Back.jpg')} style={{width: '100%', height: '100%'}}>
                <StatusBar barStyle="light-content"></StatusBar>
                {/* <TouchableOpacity onPress={() => this.props.navigation.navigate("Home")}>
                <Ionicons name="md-arrow-back" size={24} color="#fffff"></Ionicons>
                </TouchableOpacity> */}

                <View style={style.container}>

                 <Header
                    leftComponent={{
                      icon: 'arrow-back',
                      color: "#1C8ADB",
                      onPress: () => this.props.navigation.navigate('Home'),
                    }}
                    centerComponent={{ text: 'Criminal Records', style: { color: "#1C8ADB",fontWeight:'bold',fontSize:22,letterSpacing:3 } }}
                    //rightComponent={{ icon: 'lock', color: "#1C8ADB", onPress: () => this.props.navigation.navigate("Login") }}
                    backgroundColor='#fff'
                  /> 
                </View>
				
				<Image style={styles.mainicon}  source={require('../assets//cricon.png')}/>
				
				
				
                          
              <View style={styles.container}>
                <ScrollView>
                  <TouchableOpacity>
                    <View style={styles.tab} >
                      <Text  style={styles.item} >Add Record</Text>
                      <Image style={styles.img}  source={require('../assets//adddb.png')}/>
                    </View>
                    </TouchableOpacity>  
                    <TouchableOpacity>
                    <View  style={styles.tab}>
                      <Text style={styles.item}>Fetch Record</Text>
                      <Image  style={styles.img}  source={require('../assets//fetchdb.png')}/>
                    </View>
                    </TouchableOpacity>  
                    <TouchableOpacity>
                    <View  style={styles.tab}>
                      <Text style={styles.item}>Update Record</Text>
                      <Image style={styles.img} source={require('../assets//updatedb.png')}/>
                    </View>
                    </TouchableOpacity>  
                    
                     
                </ScrollView>
              </View>
            </ImageBackground>
        )
    }
}
const style = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 500,
    paddingHorizontal: 10,
    marginTop:-500
  },
  img:{
    position: "absolute",
    right:10,
    bottom:10,
    alignItems:"center",
    height:50,
    width:50
  },
  tab:{
    flexDirection:'row',
    marginTop: 14,
    padding: 30,
    backgroundColor: 'rgba(255,255,255,0.9)',
    borderRadius:5,
  },
  item: {
    alignItems:"center",
    fontSize:20 ,
  },
  mainicon: {
	  position: "absolute",
	  alignItems:"center",
	  marginLeft:110,
	  marginTop:130,
	  height:200,
	  width:200,
	  
	  
  }
});
