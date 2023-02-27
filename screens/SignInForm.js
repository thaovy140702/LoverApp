import React, { useCallback, useReducer } from "react";
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

const initialState = {
    inputValidities: {
        username: false,
        password: false,
    },
    formIsValid: false
}

const SignInForm = () => {

    const [formState, dispatchFormState] = useReducer(reducer, initialState);

    const inputChangedHandler = useCallback((inputId, inputValue) => {
        const result = validateInput(inputId, inputValue);
        dispatchFormState({ inputId, validationResult: result })
    }, [dispatchFormState])

   
    return (
        <ImageBackground source={imageBackground} style={styles.image}>

            <ScrollView>
                <KeyboardAvoidingView
                    behavior={Platform.OS === "ios" ? "height" : undefined}
                    keyboardVerticalOffset={100}
                >
                    <Title text="Welcome!"/>
                    <RegularText marginStart={'9%'} text="Sign in to continue" />

                    <View style={styles.button}>
                        <BigButton text="Continue with Google"/>
                    </View>

                    <View style={styles.separator}>
                        <Separator width={115}/>
                        <RegularText text="or" color="grey"/>
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
                        // xu ly forgot password
                    }}>
                        <View style={styles.textForgot}>
                            <BoldText text="Forgot password?"/>
                        </View>
                    </TouchableOpacity>

                <View style={styles.button2}>
                    <BigButton 
                        text="Get Started"
                        disabled={!formState.formIsValid}/>
                </View>

                <View style={styles.separator}>
                    <BoldText text="Didn't have an account?"/>
                    <TouchableOpacity onPress={()=>{}}>
                        <BoldText text=" Sign Up" color={colors.pink} />
                    </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
            </ScrollView>
        </ImageBackground>
    );
    
    
}

const styles = StyleSheet.create({
    image: {
        flex: 1,
        height: 200,
        resizeMode: 'cover',
        position: 'relative'
    },
    textForgot:{
        marginTop: '5%',
        marginStart: '57%'
    },
    separator:{
        marginTop: '5%',
        flexDirection: 'row',
        justifyContent: 'center'
    },
    button:{
        marginTop: '23%',
        alignItems: 'center'
    },
    button2:{
        marginTop: '25%',
        alignItems: 'center'
    }
});

export default SignInForm;