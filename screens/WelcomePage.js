import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import rectangleWelcome from '../assets/images/rectangleWelcome.png'
import welcome from '../assets/images/welcome.png'
import RegularText from "../components/text/RegularText";
import Title from '../components/text/Title';
import SmallButton from '../components/button/SmallButton';
import colors from "../constants/colors";
import { SafeAreaView } from 'react-native-safe-area-context'

const WelcomePage = () => {

  const navigation = useNavigation()

  return (
    <View style={styles.container}>
      <SafeAreaView style={{flex: 1}}>

        <View style={{flex: 2}}>
          <Image source={welcome} style={styles.image}/>
          <Text style={styles.text}>Find your lover</Text>
        </View>

        <View style={{flex: 3}}>
          <ImageBackground source={rectangleWelcome} style={styles.recWelcome}>
            <View style={styles.welcomeBottom}>

              <Title text="Hello !"/>
              <RegularText style={{}} 
              text = "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout." />

              <View style={{flexDirection: 'row', marginTop: 90}}>
                <SmallButton text="SIGN IN" backgroundColor={colors.pink} color={colors.textColorWhite} page="Signin"/>
                <SmallButton text="SIGN UP" backgroundColor={'white'} color={colors.textColorBlack} page="Signup"/>
              </View>

            </View>
          </ImageBackground>
        </View>
      </SafeAreaView>
    </View>
  )
}

export default WelcomePage

const styles = StyleSheet.create({
    container:{
      width: '100%',
      height: '100%',
      padding: 0,
      margin: 0,
    },
    image:{
        marginTop: '10%',
        alignSelf: 'center',
    },
    text:{
        alignSelf: 'center',
        marginTop: '5%',
        fontSize: 16,
        fontFamily: 'regularIrishGrover',
        letterSpacing: 7
    },
    recWelcome:{
        width: '100%',
        height: '100%',
        resizeMode: 'stretch'
    },
    welcomeBottom:{
      padding: '0.8%',
      marginTop: '20%',
      alignItems: "center",
    }
})