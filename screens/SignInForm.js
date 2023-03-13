import React, { useCallback, useReducer, useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  View,
  Text,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  Dimensions,
} from "react-native";
import imageBackground from "../assets/images/test.png";
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
import MyStyles from "../constants/MyStyles";

const { width, height } = Dimensions.get("window");

const initialState = {
  inputValidities: {
    username: false,
    password: false,
  },
  formIsValid: false,
};

const SignInForm = () => {
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
      <SafeAreaView style={{ width, height }}>
        <KeyboardAvoidingView
          style={{ flex: 1 }}
          behavior={Platform.OS === "ios" ? "height" : undefined}
          keyboardVerticalOffset={100}
        >
          <View style={{ flex: 0.25 }}>
            {/* <Title text="Hi!" /> */}
            <Text style={[MyStyles.text_lg, { marginStart: "8%", top: 8 }]}>
              Welcome !
            </Text>
            <Text style={[MyStyles.text_md, { marginStart: "8%" }]}>
              Sign in to continue
            </Text>
          </View>

          <View style={[styles.container]}>
            <View>
              <View style={styles.button}>
                <BigButton text="Continue with Google" />
              </View>

              <View style={[styles.separator, { alignItems: "center" }]}>
                <Separator width={115} />
                <RegularText text="Or" color="grey" />
                <Separator width={112} />
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

              <TouchableOpacity
                onPress={() => {
                  navigation.navigate("Forgotpassword");
                }}
              >
                <View style={styles.textForgot}>
                  {/* <BoldText text="Forgot password?" /> */}
                  <Text style={[MyStyles.text_sm, { fontFamily: "bold" }]}>
                    Forgot password ?
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>

          <View
            style={{
              flex: 0.25,
              justifyContent: "center",
              alignSelf: "center",
            }}
          >
            <View style={styles.button}>
              <BigButton
                text="Get Started"
                disabled={!formState.formIsValid}
                onPress={() => {
                  navigation.navigate("Slide1");
                }}
              />
            </View>

            <View style={styles.separator}>
              {/* <BoldText text="Didn't have an account?" /> */}
              <Text style={[MyStyles.text_sm, { fontFamily: "bold" }]}>
                Didn't have an account ?
              </Text>
              <TouchableOpacity onPress={() => navigation.navigate("Signup")}>
                {/* <BoldText text=" Sign Up" color={colors.pink} /> */}
                <Text
                  style={[
                    MyStyles.text_sm,
                    { fontFamily: "bold", color: colors.pink },
                  ]}
                >
                  {" "}
                  Sign Up
                </Text>
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
    // backgroundColor: 'red',
    flex: 0.8,
    // position:'relative',
    paddingHorizontal: "8%",
    justifyContent: "space-evenly",
    alignSelf: "center",
    // alignContent: 'center',
  },
  image: {
    flex: 0.23,
    padding: 0,
    margin: 0,
    height: 200,
    resizeMode: "cover",
  },
  separator: {
    marginTop: "5%",
    flexDirection: "row",
    justifyContent: "center",
  },
  button: {
    // marginTop: '18%',
    alignItems: "center",
  },
  checkbox: {
    // marginStart: '9%',
    width: 300,
    marginTop: "5%",
    flexDirection: "row",
  },

  textForgot: {
    marginTop: "5%",
    flexDirection: "row-reverse",
  },
});

export default SignInForm;
