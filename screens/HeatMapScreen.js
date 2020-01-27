import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  View,
  Picker
} from 'react-native';
import MapView, { PROVIDER_GOOGLE, Heatmap } from 'react-native-maps';

export default class HeatMapScreen extends Component<{}> {




		 
 render() {
    return (
	  <View style ={styles.container}>



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
                    
              <Heatmap 
                
                
            //  type WeightedLatLng = {[
            //          latitude: 24.154512,
            //          longitude: 78.685005,
            //          weight?: 1 ]}
                
                
                points	={[
                    latitude: 24.154512,
                    longitude: 78.685005,
                    weight: 1 ]}
                //  radius: 20		 
                />
                  
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