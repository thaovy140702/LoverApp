import React, {
  useCallback,
  useReducer,
  useState,
} from "react";
import { useNavigation } from "@react-navigation/native";
import {
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  View,
  Text,
  KeyboardAvoidingView,
  Platform,
  Dimensions,
  ActivityIndicator,
} from "react-native";
import imageBackground from "../../assets/images/test.png";
import BigButton from "../../components/button/BigButton";
import Input from "../../components/Input";
import colors from "../../constants/colors";
import { validateInput } from "../../utils/actions/formActions";
import { reducer } from "../../utils/reducers/formReducers";
import { SafeAreaView } from "react-native-safe-area-context";
import MyStyles from "../../constants/MyStyles";
import { useDispatch, useSelector } from "react-redux";
import { Feather } from "@expo/vector-icons";
import { useMessageAndErrorUser } from "../../utils/hooks";
import { changePassword } from "../../utils/actions/otherActions";

const { width, height } = Dimensions.get("window");

const initialState = {
  inputValues: {
    password: "",
    newpassword: "",
  },
  inputValidities: {
    password: false,
  },
  formIsValid: false,
};

const ChangePassword = () => {
  
  const [isSecureEntry, setIsSecureEntry] = useState(true);

  const dispatch = useDispatch();
  const navigation = useNavigation();
  const loading = useMessageAndErrorUser(navigation, dispatch, "Navigation");

  const {id} = useSelector((state) => state.user)
  
  // funtion handler change password
  const submitHandler = () => {
    dispatch(changePassword(id,formState.inputValues.password, formState.inputValues.newpassword))
    navigation.navigate("Profile")
  };

  const {messChangePass} = useSelector((state) => state.other)
    console.log(messChangePass)

  const [formState, dispatchFormState] = useReducer(reducer, initialState);

  // funtion handler change text input
  const inputChangedHandler = useCallback(
    (inputId, inputValue) => {
      const result = validateInput(inputId, inputValue);
      dispatchFormState({ inputId, validationResult: result, inputValue });
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
            <Text style={[MyStyles.text_lg, { marginStart: "8%", top: 8 }]}>
              Change password !
            </Text>
            <Text
              style={[MyStyles.text_md, { marginStart: "8%", marginTop: 15 }]}
            >
              Please enter your password
            </Text>
          </View>

          <View style={[styles.container]}>
            <View style={{marginTop: 50}}>
              <View>
                <View>
                  <Input
                    id="password"
                    placeholder="Password"
                    secureTextEntry={isSecureEntry}
                    borderColor={colors.lightGrey}
                    onInputChanged={inputChangedHandler}
                    initialValue={formState.inputValues.password}
                    errorText={formState.inputValidities["password"]}
                  />
                </View>
                <TouchableOpacity
                  style={styles.iconHide}
                  onPress={() => setIsSecureEntry((prev) => !prev)}
                >
                  <Feather
                    name={isSecureEntry ? "eye" : "eye-off"}
                    size={20}
                    color={colors.grey}
                  />
                </TouchableOpacity>
              </View>

              <View>
                <View>
                  <Input
                    id="newpassword"
                    placeholder="New Password"
                    secureTextEntry={isSecureEntry}
                    borderColor={colors.lightGrey}
                    onInputChanged={inputChangedHandler}
                    initialValue={formState.inputValues.newpassword}
                    errorText={formState.inputValidities["password"]}
                  />
                </View>
                <TouchableOpacity
                  style={styles.iconHide}
                  onPress={() => setIsSecureEntry((prev) => !prev)}
                >
                  <Feather
                    name={isSecureEntry ? "eye" : "eye-off"}
                    size={20}
                    color={colors.grey}
                  />
                </TouchableOpacity>
              </View>

              
            </View>
          </View>

          <View
            style={{
              flex: 0.25,
              justifyContent: "center",
              alignSelf: "center",
            }}
          >
            {loading ? (
              <ActivityIndicator
                size="large"
                color={colors.pink}
                style={{ marginTop: 20 }}
              />
            ) : (
              <View style={styles.button}>
                <BigButton
                  text="Change password"
                  disabled={!formState.formIsValid}
                  onPress={() => {
                    submitHandler();
                  }}
                />
              </View>
            )}
          </View>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 0.8,
    paddingHorizontal: "8%",
    alignSelf: "center",
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
    alignItems: "center",
  },
  checkbox: {
    width: 300,
    marginTop: "5%",
    flexDirection: "row",
  },
  textForgot: {
    marginTop: "5%",
    flexDirection: "row-reverse",
  },
  iconHide: {
    position: "absolute",
    marginTop: 35,
    marginStart: 260,
  },
  otpTextinputcontainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 100,
    marginBottom: 20,
  },
  input: {
    height: 42,
    width: 42,
    marginHorizontal: 3,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: colors.lightPink,
    textAlign: "center",
    fontSize: 18,
    fontFamily: "regular",
  },
});

export default ChangePassword;
