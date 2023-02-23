import React from "react";
import { StyleSheet, ImageBackground, TouchableOpacity, View} from "react-native";
import { useState } from "react";
import imageBackground from '../assets/images/test.png';
import BigButton from "../components/button/BigButton";
import BoldText from "../components/text/BoldText";
import Input from "../components/Input";
import RegularText from "../components/text/RegularText";
import Title from "../components/text/Title";
import colors from "../constants/colors";
import Checkbox from 'expo-checkbox';

const SignUpForm = () => {
    const [isChecked, setChecked] = useState(false);
    return (
        
        <ImageBackground source={imageBackground} style={styles.image}>

        <Title text="Hi!"/>
        <RegularText marginStart={24} text="Create a new account" />

        <View style={{marginTop: 50}}>
        <Input placeholder="Email" keyboardType="email-address"/>
        <Input placeholder="Username" />
        <Input placeholder="Password" secureTextEntry={true}/>
        </View>
        

        <View style={styles.checkbox} >
        <Checkbox 
        color={colors.pink} 
        value={isChecked} 
        onValueChange={setChecked} />
        <RegularText text="  I agree to the " color={colors.grey}/>
        <RegularText text="Terms of Service " color={colors.pink}/>
        <RegularText text="and" color={colors.grey}/>
        </View>

        <View style={{marginStart: 50}}>
        <RegularText text="Privacy Policy" color={colors.pink}/>
        </View>
      
        <View style={styles.button1}>
        <BigButton text="Get Started"/>
        </View>

        <View style={styles.separator}>
        <BoldText text="Already have an account?"/>
        <TouchableOpacity onPress={()=>{}}>
            <BoldText text=" Sign In" color={colors.pink} />
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
    button1:{
        marginTop: 70
    },
    checkbox:{
        marginStart: 24,
        marginTop: 20,
        flexDirection: 'row'
    }
});

export default SignUpForm;