import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import colors from '../constants/colors'
import { LinearGradient } from 'expo-linear-gradient'
import MyStyles from '../constants/MyStyles'

const HeartShape = (props) => {
  return (
    <View style={{width: 310, height: 310}}>
        <View style={[styles.borderWidth,{justifyContent:'center', paddingStart: 25, paddingVertical: 20}]}>
            <Text style={[MyStyles.text_sm, {maxWidth: 130}]}>{props.description}</Text>
        </View>
        <LinearGradient style={styles.borderHeight} colors={[ 'white', 'rgba(255, 255, 255, 0)']} />
        <View style={[styles.borderHeight, {alignItems:'center', justifyContent: 'center'}]} >
            <Image source={props.image} style={styles.borderImage} />
        </View>
        <View style={[styles.borderHeight,{backgroundColor:'rgba(255, 255, 255, 0.2)'}]} />
    </View>
  )
}

export default HeartShape

const styles = StyleSheet.create({
    borderWidth: {
        position:'absolute', 
        width: '100%', 
        height: 150, 
        backgroundColor: colors.lightPink, 
        bottom: 0,
        borderRadius: 80
    },
    borderHeight: {
        position:'absolute', 
        width: 150, 
        height: '100%', 
        // backgroundColor:'white', 
        end: 0,
        borderRadius: 80
    },
    borderImage: {
        position:'absolute', 
        width: 140, 
        height: '96%', 
        borderRadius: 70,
        resizeMode:'cover'
    },
    shadow: {
        shadowColor: colors.pink_20,
        shadowOpacity: 20,
        elevation: 10,
        shadowOffset: {
            width: -9,
            height: -9
        }
    }
})