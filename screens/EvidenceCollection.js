import React, { Component } from "react";
import {
  Button,
  View,
  StyleSheet,
  Text,
  ScrollView,
  TextInput,
  Dimensions,
  KeyboardAvoidingView,
  ImageBackground,
  ImageBackgroundComponent
} from "react-native";
import * as firebase from 'firebase';
import { Header } from "react-native-elements";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Dropdown } from "react-native-material-dropdown";
import * as ImagePicker from 'expo-image-picker';

export default class EvidenceCollection extends Component {
    
    state = {
      SuspectName: "",
      CrimeType: ""
      
    }

    chooseImage = async () => {
      //let result=await ImagePicker.launchCameraAsync();
      let result = await ImagePicker.launchImageLibraryAsync();
      
      // this.setState({ image:blob.data.name })
      if (!result.cancelled) {
        this.uploadImage(result.uri,this.state.SuspectName)
          .then(() => {
            Alert.alert("Success");
          })
          .catch(error => {
            Alert.alert(error);
          });
      }
    };
    uploadImage = async (uri,imageName) => {
      const response = await fetch(uri);
      blob = await response.blob();
      var ref = firebase
        .storage()
        .ref()
        .child("ElderlyManagement/" + imageName,+"1");

        photo=blob.data.name
      return ref.put(blob);
      
    }
    uploadImage = async (uri,imageName) => {
        const response = await fetch(uri);
        blob = await response.blob();
        var ref = firebase
          .storage()
          .ref()
          .child("ElderlyManagement/" + imageName,+"2");
  
          photo=blob.data.name
        return ref.put(blob);
        
      }
      uploadImage = async (uri,imageName) => {
        const response = await fetch(uri);
        blob = await response.blob();
        var ref = firebase
          .storage()
          .ref()
          .child("ElderlyManagement/" + imageName,+"3");
  
          photo=blob.data.name
        return ref.put(blob);
        
      };

  
  onePressed() {
    alert("yes");
  }
  twoPressed() {
    alert("no");
  }

  render() {

    let data = [
        {
          value: "Female"
        },
        {
          value: "Male"
        },
        {
          value: "Other"
        }
      ];

    return (
      <ImageBackground
        source={require("../assets/background.jpg")}
        style={{ width: "100%", height: "100%" }}
      >
        <Header
          leftComponent={{
            icon: "home",
            color: "#fff",
            onPress: () => this.props.navigation.navigate("Home")
          }}
          centerComponent={{
            text: "Evidence ",
            style: {
              color: "#fff",
              fontWeight: "bold",
              fontSize: 18,
              letterSpacing: 1
            }
          }}
          rightComponent={{
            icon: "close",
            color: "#fff",
            onPress: () => this.props.navigation.navigate("BeatManagement")
          }}
          backgroundColor="#1C8ADB"
        />
        <KeyboardAvoidingView
          style={styles.container}
          behavior="padding"
          enabled
        >
          <ScrollView>
            <View style={styles.entrybox}>
              <Text style={styles.text}>Suspect Name</Text>
              <TextInput
                style={styles.input}
                placeholder="Suspect Name"
                placeholderTextColor="#000"
                onChangeText={SuspectName => this.setState({SuspectName})}
                value={this.state.SuspectName}
              />
            </View>

            <View style={styles.entrybox}>
              <Text style={styles.text}>Crime Type</Text>
              <TextInput
                style={styles.input}
                placeholder="crime Type"
                placeholderTextColor="#000"
                onChangeText={CrimeType => this.setState({CrimeType})}
                value={this.state.CrimeType}
              />
            </View>
            
          
            
            

            <View style={styles.entrybox}>
              <Text style={styles.text}>Evidence 1</Text>
              <TouchableOpacity
                style={styles.button}
                onPress={this.chooseImage}
              >
                <Text>Upload</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.entrybox}>
              <Text style={styles.text}>Evidence 2</Text>
              <TouchableOpacity
                style={styles.button}
                onPress={this.chooseImage}
              >
                <Text>Upload</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.entrybox}>
              <Text style={styles.text}>Evidence 2</Text>
              <TouchableOpacity
                style={styles.button}
                onPress={this.chooseImage}
              >
                <Text>Upload</Text>
              </TouchableOpacity>
            </View>
            
            <View style={{ paddingBottom: 100 }}>
              <TouchableOpacity
                style={styles.button}
                title="Submit Form"
                value="Submit"
                onPress={()=>{firebase.database().ref('/EvidenceCollection').push(this.state).then(this.props.navigation.navigate("Home"))}}
              >
                <Text
                  style={{ color: "#FFF", fontWeight: "400", fontSize: 22 }}
                >
                  Submit
                </Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 8,
    paddingTop: 50
  },
  split: {
    flexDirection: "row"
  },
  error: {
    position: "absolute",
    bottom: 0,
    color: "red",
    fontSize: 12
  },
  text: {
    color: "#1C8ADB",
    fontWeight: "bold",
    fontSize: 22
  },
  form: {
    flex: 1,
    marginBottom: 60,
    marginHorizontal: 30
  },
  input: {
    borderBottomColor: "#1C8ADB",
    borderBottomWidth: 2,
    height: 40,
    fontSize: 20,
    color: "black"
  },
  drop: {
    fontSize: 20
  },
  entrybox: {
    flex: 1,
    marginHorizontal: 10,
    marginBottom: 20
  },
  button: {
    backgroundColor: "#1C8ADB",
    borderRadius: 40,
    height: 50,
    marginHorizontal: "10%",
    alignItems: "center",
    justifyContent: "center"
  }
});
