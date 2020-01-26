import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  View,
  Picker
} from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';

export default class HeatMapScreen extends Component<{}> {
constructor(props) {
super(props);

  this.state = {
  markers: [{
      
	  coordinates: {
      latitude: 3.148561,
      longitude: 101.652778
    },
  },
 
 {
	  
      coordinates: {
      latitude: 3.149771,
      longitude: 101.655449
    },  
  },
  
  {
	  
	  coordinates: {
		  latitude: 4.149888,
		  longitude: 121.655449
	  },
  },
{
	  
	  coordinates: {
		  latitude: 5.14982,
		  longitude: 131.652249
	  },
	  
	// generate database from here  
	        },
{         
       coordinates:{
       latitude:  25.878077,
       longitude:  79.712099
      },
      },
{         
       coordinates:{
       latitude:  27.247294,
       longitude:  80.670951
      },
      },
{         
       coordinates:{
       latitude:  25.403090,
       longitude:  80.251239
      },
      },
{         
       coordinates:{
       latitude:  27.517427,
       longitude:  82.639597
      },
      },
{         
       coordinates:{
       latitude:  24.959550,
       longitude:  81.779137
      },
      },
{         
       coordinates:{
       latitude:  26.891369,
       longitude:  79.588272
      },
      },
{         
       coordinates:{
       latitude:  26.981393,
       longitude:  81.273206
      },
      },
{         
       coordinates:{
       latitude:  25.543350,
       longitude:  81.959817
      },
      },
{         
       coordinates:{
       latitude:  26.811897,
       longitude:  80.080135
      },
      },
{         
       coordinates:{
       latitude:  26.799306,
       longitude:  82.494414
      },
      },
{         
       coordinates:{
       latitude:  26.786583,
       longitude:  81.882245
      },
      },
{         
       coordinates:{
       latitude:  26.921134,
       longitude:  79.343210
      },
      },
{         
       coordinates:{
       latitude:  25.920957,
       longitude:  81.612296
      },
      },
{         
       coordinates:{
       latitude:  25.935440,
       longitude:  80.649005
      },
      },
{         
       coordinates:{
       latitude:  25.688428,
       longitude:  81.679550
      },
      },
{         
       coordinates:{
       latitude:  26.113318,
       longitude:  82.136708
      },
      },
{         
       coordinates:{
       latitude:  26.484252,
       longitude:  80.388838
      },
      },
{         
       coordinates:{
       latitude:  25.794550,
       longitude:  80.420221
      },
      },
{         
       coordinates:{
       latitude:  27.179520,
       longitude:  79.388530
      },
      },
{         
       coordinates:{
       latitude:  26.277488,
       longitude:  81.354967
      },
      },
{         
       coordinates:{
       latitude:  25.007674,
       longitude:  80.327612
      },
      },
{         
       coordinates:{
       latitude:  25.389388,
       longitude:  81.146667
      },
      },
{         
       coordinates:{
       latitude:  24.980797,
       longitude:  81.498620
      },
      },
{         
       coordinates:{
       latitude:  27.329219,
       longitude:  81.438073
      },
      },
{         
       coordinates:{
       latitude:  27.745006,
       longitude:  82.213245
      },
      },
{         
       coordinates:{
       latitude:  27.468125,
       longitude:  80.071549
      },
      },
{         
       coordinates:{
       latitude:  26.507237,
       longitude:  81.152978
      },
      },
{         
       coordinates:{
       latitude:  26.382363,
       longitude:  81.413316
      },
      },
{         
       coordinates:{
       latitude:  26.609043,
       longitude:  80.478665
      },
      },
{         
       coordinates:{
       latitude:  27.203711,
       longitude:  82.277213
      },
      },
{         
       coordinates:{
       latitude:  25.540332,
       longitude:  80.896440
      },
      },
{         
       coordinates:{
       latitude:  26.958879,
       longitude:  81.057151
      },
      },
{         
       coordinates:{
       latitude:  25.485557,
       longitude:  79.378447
      },
      },
{         
       coordinates:{
       latitude:  26.122500,
       longitude:  82.198747
      },
      },
{         
       coordinates:{
       latitude:  26.359458,
       longitude:  80.232999
      },
      },
{         
       coordinates:{
       latitude:  26.476770,
       longitude:  81.640378
      },
      },
{         
       coordinates:{
       latitude:  26.084112,
       longitude:  81.768204
      },
      },
{         
       coordinates:{
       latitude:  27.560668,
       longitude:  80.582656
      },
      },
{         
       coordinates:{
       latitude:  27.509522,
       longitude:  79.412969
      },
      },
{         
       coordinates:{
       latitude:  27.708302,
       longitude:  82.333927
      },
      },
{         
       coordinates:{
       latitude:  27.065941,
       longitude:  80.713554
      },
      },
{         
       coordinates:{
       latitude:  25.255932,
       longitude:  81.943538
      },
      },
{         
       coordinates:{
       latitude:  26.892774,
       longitude:  82.245358
      },
      },
{         
       coordinates:{
       latitude:  26.511713,
       longitude:  80.794263
      },
      },
{         
       coordinates:{
       latitude:  26.654330,
       longitude:  80.540443
      },
      },
{         
       coordinates:{
       latitude:  27.165315,
       longitude:  81.236223
      },
      },
{         
       coordinates:{
       latitude:  25.947940,
       longitude:  82.264050
      },
      },
{         
       coordinates:{
       latitude:  26.468415,
       longitude:  82.481468
      },
      },
{         
       coordinates:{
       latitude:  27.068974,
       longitude:  81.060655
      },
      },
{         
       coordinates:{
       latitude:  26.337975,
       longitude:  80.750627
      },
      },
{         
       coordinates:{
       latitude:  27.265680,
       longitude:  79.721870
      },
      },
{         
       coordinates:{
       latitude:  25.439029,
       longitude:  81.811042
      },
      },
{         
       coordinates:{
       latitude:  25.118962,
       longitude:  80.892605
      },
      },
{         
       coordinates:{
       latitude:  25.368394,
       longitude:  81.613985
      },
      },
{         
       coordinates:{
       latitude:  27.744095,
       longitude:  81.481232
      },
      },
{         
       coordinates:{
       latitude:  27.630388,
       longitude:  82.416385
      },
      },
{         
       coordinates:{
       latitude:  26.281980,
       longitude:  81.770336
      },
      },
{         
       coordinates:{
       latitude:  27.631333,
       longitude:  79.968240
      },
      },
{         
       coordinates:{
       latitude:  26.361622,
       longitude:  80.451424
      },
      },
{         
       coordinates:{
       latitude:  26.036857,
       longitude:  82.011684
      },
      },
{         
       coordinates:{
       latitude:  27.554725,
       longitude:  80.958231
      },
      },
{         
       coordinates:{
       latitude:  27.415067,
       longitude:  81.934597
      },
      },
{         
       coordinates:{
       latitude:  27.806583,
       longitude:  80.152523
      },
      },
{         
       coordinates:{
       latitude:  25.313663,
       longitude:  82.045229
      },
      },
{         
       coordinates:{
       latitude:  25.337330,
       longitude:  82.424198
      },
      },
{         
       coordinates:{
       latitude:  25.238012,
       longitude:  80.075770
      },
      },
{         
       coordinates:{
       latitude:  26.689963,
       longitude:  82.258782
      },
      },
{         
       coordinates:{
       latitude:  26.689474,
       longitude:  80.611402
      },
      },
{         
       coordinates:{
       latitude:  26.482114,
       longitude:  82.246823
      },
      },
{         
       coordinates:{
       latitude:  26.655577,
       longitude:  80.877646
      },
      },
{         
       coordinates:{
       latitude:  26.181858,
       longitude:  80.926925
      },
      },
{         
       coordinates:{
       latitude:  26.698671,
       longitude:  79.915544
      },
      },
{         
       coordinates:{
       latitude:  27.115744,
       longitude:  80.284792
      },
      },
{         
       coordinates:{
       latitude:  25.449569,
       longitude:  81.004921
      },
      },
{         
       coordinates:{
       latitude:  26.928406,
       longitude:  80.152645
      },
      },
{         
       coordinates:{
       latitude:  26.651128,
       longitude:  80.275456
      },
      },
{         
       coordinates:{
       latitude:  27.732994,
       longitude:  82.323164
      },
      },
{         
       coordinates:{
       latitude:  26.843754,
       longitude:  80.374163
      },
      },
{         
       coordinates:{
       latitude:  25.009618,
       longitude:  80.207775
      },
      },
{         
       coordinates:{
       latitude:  27.317017,
       longitude:  80.959858
      },
      },
{         
       coordinates:{
       latitude:  27.087872,
       longitude:  80.278640
      },
      },
{         
       coordinates:{
       latitude:  27.648352,
       longitude:  80.453095
      },
      },
{         
       coordinates:{
       latitude:  25.526681,
       longitude:  80.303210
      },
      },
{         
       coordinates:{
       latitude:  26.884337,
       longitude:  80.616202
      },
      },
{         
       coordinates:{
       latitude:  26.885761,
       longitude:  82.582500
      },
      },
{         
       coordinates:{
       latitude:  26.455614,
       longitude:  81.650347
      },
      },
{         
       coordinates:{
       latitude:  25.569628,
       longitude:  80.370339
      },
      },
{         
       coordinates:{
       latitude:  25.234579,
       longitude:  80.734116
      },
      },
{         
       coordinates:{
       latitude:  26.141507,
       longitude:  82.511626
      },
      },
{         
       coordinates:{
       latitude:  27.392963,
       longitude:  82.027903
      },
      },
{         
       coordinates:{
       latitude:  25.733804,
       longitude:  82.369654
      },
      },
{         
       coordinates:{
       latitude:  25.352518,
       longitude:  81.124410
      },
      },
{         
       coordinates:{
       latitude:  26.143050,
       longitude:  81.276936
      },
      },
{         
       coordinates:{
       latitude:  27.574414,
       longitude:  81.206564
      },
      },
{         
       coordinates:{
       latitude:  25.840319,
       longitude:  81.921689
      },
      },
{         
       coordinates:{
       latitude:  27.695053,
       longitude:  82.101841
      },
      },
{         
       coordinates:{
       latitude:  25.487142,
       longitude:  81.328786
      },
      },
{         
       coordinates:{
       latitude:  26.810120,
       longitude:  80.146513
      },
      },
{         
       coordinates:{
       latitude:  26.050938,
       longitude:  81.858181
      },
      },
{         
       coordinates:{
       latitude:  27.155133,
       longitude:  79.428750
      },



	 // to here
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
  }  
  ]
}

}

 render() {



    
	
	
	
	
	
	
	return (
	
	
	
	
	
	
      <View style ={styles.container}>
  

<Picker
  selectedValue={this.state.language}
  style={{height: 500, width: 380, flex: 1 , flexDirection: 'column', justifyContent: 'flex-start', marginBottom:550}}
  onValueChange={(itemValue, itemIndex) =>
    this.setState({language: itemValue})
  }>
  <Picker.Item label="Murder" value="Murder" />
  <Picker.Item label="Rape" value="Rape" />
   <Picker.Item label="Kindnapping" value="Kindnapping" />
    <Picker.Item label="Human Trafficking" value="Human Trafficking" />
	 <Picker.Item label="Domestic Violence" value="Domestic Violence" />
</Picker>










  <MapView
	  provider={PROVIDER_GOOGLE}
          style={styles.map}
          region={{
            latitude: 26.154512,
            longitude: 80.685005,
            latitudeDelta: 5,
            longitudeDelta: 5,
            
          }}
		
        >
         
	{this.state.markers.map(marker => (
    <MapView.Marker 
      coordinate={marker.coordinates}
      title= ""              //{marker.title}
      image={require('../assets/heatmarker.png')}
	  style={{opacity: 0.5}}
	/>
  ))}
			
        
		 
        </MapView>
      </View>
    );
  }
}

var styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
    map: {
      position: 'absolute',
      top: 90,
      left: 0,
      right: 0,
      bottom: 0,
	  zIndex: -1,
    }
});



/*const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    height: 700,
    width: 400,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
}); */
