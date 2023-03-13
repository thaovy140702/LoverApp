import React, { useCallback, useReducer, useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  StyleSheet,
  ImageBackground,
  View,
  Text,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import imageBackground from "../assets/images/test.png";
import BigButton from "../components/button/BigButton";
import Input from "../components/Input";
import RegularText from "../components/text/RegularText";
import Title from "../components/text/Title";
import { validateInput } from "../utils/actions/formActions";
import { reducer } from "../utils/reducers/formReducers";
import { SafeAreaView } from "react-native-safe-area-context";
import BoldText from "../components/text/BoldText";
import colors from "../constants/colors";
import MyStyles from "../constants/MyStyles";

const { width, height } = Dimensions.get("window");

const initialState = {
  inputValidities: {
    email: false,
  },
  formIsValid: false,
};

const ForgotPassword = () => {
  const navigation = useNavigation();

  const [formState, dispatchFormState] = useReducer(reducer, initialState);

  const inputChangedHandler = useCallback(
    (inputId, inputValue) => {
      const result = validateInput(inputId, inputValue);
      dispatchFormState({ inputId, validationResult: result });
    },
    [dispatchFormState]
  );

  return (
    <ImageBackground source={imageBackground} style={styles.image}>
      <SafeAreaView style={{ width, height}}>
        <KeyboardAvoidingView
          style={{ flex: 1}}
          behavior={Platform.OS === "ios" ? "height" : undefined}
          keyboardVerticalOffset={100}
        >
            <View style={{flex:.25}}>
          <Text style={[MyStyles.text_lg, { marginStart: "8%", top: 8 }]}>
            Forgot password
          </Text>
          <Text style={[MyStyles.text_md, { marginStart: "8%" }]}>
            Please enter your email
          </Text>
          </View>

          <View style={styles.container}>
            <Input
              id="email"
              placeholder="Email"
              keyboardType="email-address"
              onInputChanged={inputChangedHandler}
              errorText={formState.inputValidities["email"]}
            />
          </View>

          <View
          style={{
            flex: .25,
            justifyContent: 'center',
            alignSelf: "center",
          }}>
            <View style={styles.button}>
              <BigButton
                text="Next"
                onPress={() => navigation.navigate("CompleteFotgotPass")}
                disabled={!formState.formIsValid}
              />
            </View>

            <View style={styles.separator}>
            <Text style={[MyStyles.text_sm,{fontFamily:'bold'}]}>Already have an account ?</Text>
              <TouchableOpacity onPress={() => navigation.navigate("Signin")}>
                {/* <BoldText text=" Sign Up" color={colors.pink} /> */}
              <Text style={[MyStyles.text_sm,{fontFamily:'bold', color:colors.pink}]}> Sign In</Text>
              </TouchableOpacity>
            </View>
          </View>

        </KeyboardAvoidingView>
      </SafeAreaView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    // backgroundColor:'red',
    flex: .7,
    position:'relative',
    paddingHorizontal: "8%",
    justifyContent: 'flex-start',
    alignSelf: 'center',
    alignContent: 'center',
  },
  image: {
    flex: .23,
    padding: 0,
    margin: 0,
    height: 200,
    resizeMode: "cover",
  },
  separator: {
    marginTop: "3%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    // marginTop: "65%",
    alignItems: "center",
  },
});

export default ForgotPassword;
