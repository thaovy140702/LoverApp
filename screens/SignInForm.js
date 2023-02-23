import React from "react";
import { StyleSheet, ImageBackground, TouchableOpacity, View } from "react-native";
import imageBackground from '../assets/images/test.png';
import BigButton from "../components/button/BigButton";
import BoldText from "../components/text/BoldText";
import Input from "../components/Input";
import RegularText from "../components/text/RegularText";
import Title from "../components/text/Title";
import Separator from "../components/Separator";
import colors from "../constants/colors";


const SignInForm = () => {
    
    return (
        <ImageBackground source={imageBackground} style={styles.image}>

        <Title text="Welcome!"/>
        <RegularText marginStart={24} text="Sign in to continue" />

        <View style={styles.button}>
        <BigButton text="Continue with Google"/>
        </View>

        <View style={styles.separator}>
        <Separator width={115}/>
        <RegularText text="or" color="grey"/>
        <Separator width={112}/>
        </View>


        <Input placeholder="Username" />
        <Input placeholder="Password" secureTextEntry={true}/>

        <TouchableOpacity onPress={()=>{}}>
            <View style={styles.textForgot}>
            <BoldText text="Forgot password?"/>
            </View>
        </TouchableOpacity>

        <View style={styles.button1}>
        <BigButton text="Get Started"/>
        </View>

        <View style={styles.separator}>
        <BoldText text="Didn't have an account?"/>
        <TouchableOpacity onPress={()=>{}}>
            <BoldText text=" Sign Up" color={colors.pink} />
        </TouchableOpacity>
        </View>

        </ImageBackground>
    );
    
    
}

const styles = StyleSheet.create({
    container: {
        flex: 1
      },
    image: {
        flex: 1,
        height: 200,
        resizeMode: 'cover'
    },
    textForgot:{
        marginTop: 20,
        marginStart: 220
    },
    separator:{
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'center'
    },
    button:{
        marginTop: 90
    },
    button1:{
        marginTop: 70
    }
});

export default SignInForm;