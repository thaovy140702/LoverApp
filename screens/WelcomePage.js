import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import rectangleWelcome from '../assets/images/rectangleWelcome.png'
import welcome from '../assets/images/welcome.png'
import RegularText from "../components/text/RegularText";
import Title from '../components/text/Title';
import SmallButton from '../components/button/SmallButton';
import colors from "../constants/colors";

const WelcomePage = () => {
  return (
    <View style={styles.container}>

      <View style={{flex: 2}}>
        <Image source={welcome} style={styles.image}/>
        <Text style={styles.text}>Find your lover</Text>
      </View>

      <View style={{flex: 3}}>
      <ImageBackground source={rectangleWelcome} style={styles.recWelcome}>
        <View style={styles.welcomeBottom}>
        <Title text="Hello !"/>
        <RegularText text ={`It is a long established fact that a reader will`}/>
        <RegularText text="be distracted by the readable content of a"/>
        <RegularText text="page when looking at its layout."/>

        <View style={{flexDirection: 'row', marginTop: 90}}>
        <SmallButton text="SIGN IN" backgroundColor={colors.pink} color={colors.textColorWhite}/>
        <SmallButton text="SIGN UP" backgroundColor={'white'} color={colors.textColorBlack}/>
        </View>

        </View>

        
      </ImageBackground>
        </View>
    </View>
  )
}

export default WelcomePage

const styles = StyleSheet.create({
    container:{
       flex: 1,
       flexDirection: 'column'
    },
    image:{
        marginStart: 30,
        marginTop: 30
    },
    text:{
        alignSelf: 'center',
        marginTop: 20,
        fontSize: 16,
        fontFamily: 'regularIrishGrover',
        letterSpacing: 2
    },
    recWelcome:{
        width: '100%',
        height: '100%'
    },
    welcomeBottom:{
      marginTop: 50,
      alignItems: "center"
    }
})