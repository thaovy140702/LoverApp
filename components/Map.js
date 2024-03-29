import React, { useState } from 'react';
import MapView, {Marker, Callout, Circle} from 'react-native-maps';
import { StyleSheet, View, Text } from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import colors from '../constants/colors';

const Map = () => {
    const [pin, setPin] = useState({
        latitude: 37.78825,
        longitude: -122.4324,
    })
    const [region, setRegion] = useState({
      latitude: 37.78825,
      longitude: -122.4324,
  })
  return (
    <View style={{ height: 120, width: 150}}>
      <GooglePlacesAutocomplete
        // placeholder='Enter your location'
        fetchDetails={true}
        // GooglePlacesSearchQuery={{
        //   rankby: "distance"
        // }}
        onPress={(data, details = null) => {
          console.log(data, details)
        }}
        query={{
          key: 'AIzaSyDWisMZFr8yJ657ijvtNg8Seo-bPljFn9Y',
          language: 'en',
          components: "country:us",
          type: "establishment",
          radius: 30000,
          location: `${region.latitude}, ${region.longitude}`
        }}
        // styles={{
        //   container: {flex: 0, position: 'absolute', width: '100%', zIndex: 1},
        //   listView: { backgroundColor: 'white'},
        //   textInput: { fontFamily: 'regular', borderWidth: 2, borderColor: colors.lightPink},
        // }} 
        />

      <MapView 
        style={styles.map}
        initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
          provider="google"
      >
        <Marker 
            coordinate={pin}
            draggable={true}
            onDragStart={ (e) => {

            }

            }
            onDragEnd={ (e) => {
                setPin({
                    latitude: e.nativeEvent.coordinate.latitude,
                    longitude: e.nativeEvent.coordinate.longitude
                })
            }}


            >
                <Callout>
                    <Text>Your location</Text>
                </Callout>
        </Marker>
        <Circle center={pin}
        radius={1000}/>

    
        </MapView>
    </View>
  )
}

export default Map

const styles = StyleSheet.create({
    container: {
        flex: 1,
      },
      map: {
        width: '100%',
        height: '100%'
      }
})