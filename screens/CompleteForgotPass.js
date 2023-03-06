import React, { useCallback, useReducer, useLayoutEffect } from "react";
import { useNavigation } from '@react-navigation/native'
import { StyleSheet, ImageBackground, View, KeyboardAvoidingView, Platform, TouchableOpacity } from "react-native";
import imageBackground from '../assets/images/test.png';
import BigButton from "../components/button/BigButton";
import Input from "../components/Input";
import RegularText from "../components/text/RegularText";
import Title from "../components/text/Title";
import { validateInput } from "../utils/actions/formActions";
import { reducer } from "../utils/reducers/formReducers";
import { SafeAreaView } from "react-native-safe-area-context";
import BoldText from "../components/text/BoldText";
import colors from "../constants/colors";

const initialState = {
    inputValidities: {
        password: false,
        repeatPassword: false
    },
    formIsValid: false
}

const CompleteForgotPass = () => {

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

                    <Title text="Forgot password"/>
                    <RegularText marginStart={'9%'} text="Please enter your new password" />

                    <View style={styles.container}>

                            <Input
                                id="password" 
                                placeholder="New Password" 
                                secureTextEntry={true}
                                autoCapitalize="none"
                                onInputChanged={inputChangedHandler}
                                errorText={formState.inputValidities["password"]}
                            />
                    
                            <Input
                                id="repeatPassword" 
                                placeholder="Confirm Password" 
                                secureTextEntry={true}
                                autoCapitalize="none"
                                onInputChanged={inputChangedHandler}
                                errorText={formState.inputValidities["repeatPassword"]}
                            />

                    
                        
                    </View>


                    <View style={styles.button}>
                        <BigButton 
                            text="Next"
                            disabled={!formState.formIsValid}/>
                    </View>

                    <View style={styles.separator}>
                        <BoldText text="Already have an account?"/>
                        <TouchableOpacity onPress={()=> navigation.navigate("Signin")}>
                            <BoldText text=" Sign In" color={colors.pink} />
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
    separator:{
        marginTop: '3%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    button:{
        marginTop: '65%',
        alignItems: 'center',

    },
});

export default CompleteForgotPass;