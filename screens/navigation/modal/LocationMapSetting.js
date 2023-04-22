import { View, StyleSheet, Dimensions, Text } from 'react-native'
import MapView, { Callout, Marker } from 'react-native-maps';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';

const {width, height} = Dimensions.get('window')

const LocationMapSetting = () => {
    const [pin, setPin] = React.useState({
        latitude: 37.78825,
        longitude: -122.4324,
    })
  return (
    <SafeAreaView style={styles.container}>
        <GooglePlacesAutocomplete
            placeholder='Search'
            onPress={(data, details = null) => {
                // 'details' is provided when fetchDetails = true
                console.log(data, details);
            }}
            query={{
                key: 'AIzaSyAtlFqMrvvyKqr5EhCYbeJ9o29FEY5q_2s',
                language: 'en',
            }}
        />
        <MapView 
            initialRegion={{
                latitude: 37.78825,
                longitude: -122.4324,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
            }}
            style={styles.map} 
        >
            <Marker
                coordinate={pin}
                pinColor='pink'
                draggable={true}
                onDragStart={(e) => {
                    console.log('Drag start', e.nativeEvent.coordinate)
                }}
                onDragEnd={(e) => {
                    setPin({
                        latitude: e.nativeEvent.coordinate.latitude,
                        longitude: e.nativeEvent.coordinate.longitude
                    })
                }}
            >
                <Callout>
                    <Text>I'm here</Text>
                </Callout>
            </Marker>
        </MapView>
    </SafeAreaView>
  )
}

export default LocationMapSetting

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor:'white',
      alignItems:'center',
      justifyContent:'center'
    },
    map: {
      width: width,
      height: height
    },
  });