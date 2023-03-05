import React, { useCallback, useReducer, useLayoutEffect } from "react";
import { useNavigation } from '@react-navigation/native'
import { StyleSheet, ImageBackground, TouchableOpacity, View, ScrollView, KeyboardAvoidingView, Platform } from "react-native";
import imageBackground from '../assets/images/test.png';
import BigButton from "../components/button/BigButton";
import BoldText from "../components/text/BoldText";
import Input from "../components/Input";
import RegularText from "../components/text/RegularText";
import Title from "../components/text/Title";
import Separator from "../components/Separator";
import colors from "../constants/colors";
import { validateInput } from "../utils/actions/formActions";
import { reducer } from "../utils/reducers/formReducers";
import { SafeAreaView } from "react-native-safe-area-context";

const initialState = {
    inputValidities: {
        username: false,
        password: false,
    },
    formIsValid: false
}

const SignInForm = () => {

    const navigation = useNavigation()

    const [formState, dispatchFormState] = useReducer(reducer, initialState);

    const inputChangedHandler = useCallback((inputId, inputValue) => {
        const result = validateInput(inputId, inputValue);
        dispatchFormState({ inputId, validationResult: result })
    }, [dispatchFormState])

   
    return (
        <ImageBackground source={imageBackground} style={styles.image}>

            <SafeAreaView>
                <KeyboardAvoidingView
                    behavior={Platform.OS === "ios" ? "height" : undefined}
                    keyboardVerticalOffset={100} >

                    <Title text="Welcome!"/>
                    <RegularText marginStart={'9%'} text="Sign in to continue" />

                    <View style={styles.container}>

                        <View style={styles.button}>
                            <BigButton text="Continue with Google"/>
                        </View>

                        <View style={styles.separator}>
                            <Separator width={115}/>
                            <RegularText text="Or" color="grey"/>
                            <Separator width={112}/>
                        </View>

                        <Input 
                            id="username"
                            placeholder="Username"
                            onInputChanged={inputChangedHandler}
                            errorText={formState.inputValidities["username"]}
                        />
                        <Input
                            id="password"
                            placeholder="Password"
                            secureTextEntry={true}
                            onInputChanged={inputChangedHandler}
                            errorText={formState.inputValidities["password"]}
                        />
                    
                        <TouchableOpacity onPress={()=>{
                            navigation.navigate("Forgotpassword")
                        }}>
                            <View style={styles.textForgot}>
                                <BoldText text="Forgot password?"/>
                            </View>
                        </TouchableOpacity>
                    </View>


                    <View style={styles.button2}>
                        <BigButton 
                            text="Get Started"
                            disabled={!formState.formIsValid}/>
                    </View>

                    <View style={styles.separator}>
                        <BoldText text="Didn't have an account?"/>
                        <TouchableOpacity onPress={()=> navigation.navigate("Signup")}>
                            <BoldText text=" Sign Up" color={colors.pink} />
                        </TouchableOpacity>
                    </View>
            </KeyboardAvoidingView>
            </SafeAreaView>
        </ImageBackground>
    );
    
    
}

const styles = StyleSheet.create({
    container:{
        paddingHorizontal: '8%',
        marginVertical: '25%'
    },
    image: {
        padding:0,
        margin:0,
        height: 230,
        resizeMode: 'cover',
        position: 'relative'
    },
    textForgot:{
        marginTop: '5%',
        flexDirection: "row-reverse"
    },
    separator:{
        marginTop: '3%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    button:{
        // marginTop: '23%',
        alignItems: 'center'
    },
    button2:{
        // marginTop: '25%',
        alignItems: 'center'
    }
});

export default SignInForm;