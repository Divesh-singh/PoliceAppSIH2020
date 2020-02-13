import React from 'react';
import {View, Text,Dimensions, ScrollView,ImageBackground,Alert} from 'react-native';

import { Header } from "react-native-elements";
import {
    LineChart,
    BarChart,
    PieChart,
    ProgressChart,
    ContributionGraph,
    StackedBarChart
  } from "react-native-chart-kit";
import { styles } from 'react-native-material-ripple/styles';


  export default class CrimeStatsScreen extends React.Component{
      render(){
          return( 
            <ImageBackground
            source={require("../assets/white.jpg")}
            style={{ width: "100%", height: "100%" }}
          >
           <Header
          leftComponent={{
            icon: "arrow-back",
            color: "#fff",
            onPress: () => this.props.navigation.navigate("Home")
          }}
          centerComponent={{
            text: "CRIME STATS",
            style: {
              color: "#fff",
              fontWeight: "bold",
              fontSize: 18,
              letterSpacing: 1
            }
          }}
          rightComponent={{
            icon: "help",
            color: "#fff",
            onPress: () =>
              Alert.alert(
                "INFO",
                "Here you can easily see and graphically analyze the stats of crime in india.\n"
              )
          }}
          backgroundColor="#1C8ADB"
        />
              <ScrollView style={{margin:10}}>
                       
                         <View>
                             <Text style={{marginTop: 30, fontSize:20, marginLeft: 12}}>Crime commited against SC</Text>
                              <ScrollView  horizontal= {true}>
                         
                                  <View>
                                     <BarChart
                                        data={{
                                          labels: [" ANDHRA PRADESH", "BIHAR", "HARYANA", "KARNATAKA", "KERALA","MADHYA PRADESH","MAHARASHTRA","UTTAR PRADESH", "RAJASTHAN", "TAMIL NADU", "UTTARAKHAND", "GUJARAT", "ODISHA"],
                                          datasets: [
                                            {
                                              data: [ 1006,240,67,316,127,2645,288,3683,1219,1105,45,566, 386]
                    
                                            }
                                          ]
                                        }}
                                      width={1500}// from react-native
                                      height={250}
                                      yAxisLabel=""
                                      yAxisSuffix=""
                                      chartConfig={{
                                        backgroundColor: "#e26a00",
                                        backgroundGradientFrom: "#455c73",
                                        backgroundGradientTo: "#ffa726",
                                        decimalPlaces: 2, // optional, defaults to 2dp
                                        color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                                        labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                                        style: {
                                          borderRadius: 16,
                                        },
                                        propsForDots: {
                                          r: "6",
                                          strokeWidth: "2",
                                          stroke: "#ffa726"
                                        }
                                      }}
                                      bezier
                                      style={{
                                        marginVertical: 1,
                                        borderRadius: 12,
                                        marginTop: 20,
                                        marginLeft: 1,
                                        padding:0
                                      }}
                                    />

                          
                                  </View>
                           
                            </ScrollView>

                                  <View>

                                  <Text style={{marginTop: 30, fontSize:20, marginLeft: 12}}>Crime rate against Child</Text>
                                      <ScrollView   horizontal={true}>
                                          <View>
                                           
                                            <BarChart
                                              data={{
                                                labels: [" Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Haryana", "Karnataka", "Kerala", "Madhya Pradesh"],
                                                datasets: [
                                                  {
                                                    data: [2576, 82, 518, 1580,1640,1353, 1877,8247]
                                                    
                                                  }
                                                ]
                                              }}
                                              width={1000}// from react-native
                                              height={300}
                                              yAxisLabel=""
                                              yAxisSuffix=""
                                              chartConfig={{
                                                backgroundColor: "#e26a00",
                                                backgroundGradientFrom: "#1abb9c",
                                                backgroundGradientTo: "#ffa726",
                                                decimalPlaces: 2, // optional, defaults to 2dp
                                                color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                                                labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                                                style: {
                                                  borderRadius: 16,
                                                },
                                                propsForDots: {
                                                  r: "6",
                                                  strokeWidth: "2",
                                                  stroke: "#ffa726"
                                                }
                                              }}
                                              bezier
                                              style={{
                                                marginVertical: 1,
                                                borderRadius: 12,
                                                marginTop: 20,
                                                marginLeft: 1,
                                                padding:0
                                              }}
                                            />
                                          </View>
                                   </ScrollView>
                        

                                  </View>
                                      
                                  <View>

                                  <Text style={{marginTop: 30, fontSize:20, marginLeft: 12}}>Crime rate against Child</Text>
                                      <ScrollView   horizontal={true}>
                                          <View>
                                           
                                            <LineChart
                                              data={{
                                                labels: [" January", "February", "March", "April", "May", "June"],
                                                datasets: [
                                                  {
                                                    data: [
                                                      1006,
                                                      432,
                                                      4255,2352,2352
                                                      
                                                    ]
                                                  }
                                                ]
                                              }}
                                              width={800}// from react-native
                                              height={300}
                                              yAxisLabel=""
                                              yAxisSuffix=""
                                              chartConfig={{
                                                backgroundColor: "#e26a00",
                                                backgroundGradientFrom: '#b3cdd2',
                                                backgroundGradientTo: "#ffa726",
                                                decimalPlaces: 2, // optional, defaults to 2dp
                                                color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                                                labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                                                style: {
                                                  borderRadius: 16,
                                                },
                                                propsForDots: {
                                                  r: "6",
                                                  strokeWidth: "2",
                                                  stroke: "#ffa726"
                                                }
                                              }}
                                              bezier
                                              style={{
                                                marginVertical: 1,
                                                borderRadius: 12,
                                                marginTop: 20,
                                                marginLeft: 1,
                                                padding:0
                                              }}
                                            />
                                          </View>
                                   </ScrollView>
                        

                                  </View>


                        </View>

          </ScrollView>
          </ImageBackground>
          )
      }
  }