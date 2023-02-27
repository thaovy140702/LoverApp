import React, { useCallback, useReducer } from "react";
import { StyleSheet, ImageBackground, TouchableOpacity, View, ScrollView, KeyboardAvoidingView} from "react-native";
import { useState } from "react";
import imageBackground from '../assets/images/test.png';
import BigButton from "../components/button/BigButton";
import BoldText from "../components/text/BoldText";
import Input from "../components/Input";
import RegularText from "../components/text/RegularText";
import Title from "../components/text/Title";
import colors from "../constants/colors";
import Checkbox from 'expo-checkbox';
import { validateInput } from "../utils/actions/formActions";
import { reducer } from "../utils/reducers/formReducers";


const initialState = {
    inputValidities: {
        email: false,
        username: false,
        password: false,
    },
    formIsValid: false
}

const SignUpForm = props => {


    const [isChecked, setChecked] = useState(false);

    // check state of sign up form and validate input
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
                keyboardVerticalOffset={100}>

        <Title text="Hi!"/>
        <RegularText marginStart="9%" text="Create a new account" />

        <View style={{marginTop: '15%'}}>
            <Input
                id="email"
                placeholder="Email" 
                keyboardType="email-address"
                onInputChanged={inputChangedHandler}
                errorText={formState.inputValidities["email"]}
            />

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
                autoCapitalize="none"
                onInputChanged={inputChangedHandler}
                errorText={formState.inputValidities["password"]}
            />
        </View>
        

        <View style={styles.checkbox} >
            <Checkbox 
                color={colors.pink} 
                value={isChecked} 
                onValueChange={setChecked} 
            />
            <RegularText text="  I agree to the " color={colors.grey}/>
            <RegularText text="Terms of Service " color={colors.pink}/>
            <RegularText text="and" color={colors.grey}/>
        </View>

        <View style={{marginStart: '16%'}}>
            <RegularText text="Privacy Policy" color={colors.pink}/>
        </View>
      
     {/* submit button */}
        <View style={styles.button}>
            <BigButton 
            text="Get Started"
            disabled={!formState.formIsValid}
            />
        </View>

        <View style={styles.separator}>
            <BoldText text="Already have an account?"/>
            <TouchableOpacity onPress={()=>{
                // ham xu ly sign up
            }}>
                <BoldText text=" Sign In" color={colors.pink} />
            </TouchableOpacity>
        </View>

        </KeyboardAvoidingView>
        </ScrollView>
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
        resizeMode: 'cover',
    },
    separator:{
        marginTop: '5%',
        flexDirection: 'row',
        justifyContent: 'center'
    },
    button:{
        marginTop: '18%',
        alignItems: 'center'
    },
    checkbox:{
        marginStart: '9%',
        marginTop: '5%',
        flexDirection: 'row'
    }
});

export default SignUpForm;