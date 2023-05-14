import {
  View,
  Text,
  Dimensions,
  ScrollView,
  StyleSheet,
  Image,
  TouchableOpacity,
  KeyboardAvoidingView,
} from "react-native";
import React, { useCallback } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { MaterialIcons, MaterialCommunityIcons } from "@expo/vector-icons";
import Indicator from "../../../components/Indicator";
import { useDispatch, useSelector } from "react-redux";
import { useReducer } from "react";
import { reducer } from "../../../utils/reducers/formReducers";
import BackButton from "../../../components/button/BackButton";
import { editProfile, getProfile } from "../../../utils/actions/otherActions";
import colors from "../../../constants/colors";
import MyStyles from "../../../constants/MyStyles";
import { validateInput } from "../../../utils/actions/formActions";
import Input from "../../../components/Input";
import { useNavigation } from "@react-navigation/native";
import { useMessage } from "../../../utils/hooks";

const { width, height } = Dimensions.get("window");
const initialState = {
  inputValues: {
    description: "",
    username: "",
    email: "",
    gender: "",
    age: "",
    phone: "",
    character: "",
    appearance: "",
  },
  inputValidities: {
    username: false,
  },
};

const EditProfileScreen = () => {
  const { myProfile } = useSelector((state) => state.other);
  const { email, username } = useSelector((state) => state.user);
  const old = String(myProfile.old);
  const phone = String(myProfile.phone);

  const dispatch = useDispatch();
  const navigation = useNavigation();
  const loading = useMessage(navigation, dispatch, "EditProfile")

  const handlerEditProfile = () => {
    if (formState.inputValues.description === "") {
      formState.inputValues.description = myProfile.description;
    }
    if (formState.inputValues.username === "") {
      formState.inputValues.username = username;
    }
    if (formState.inputValues.gender === "") {
      formState.inputValues.gender = myProfile.gender;
    }
    if (formState.inputValues.age === "") {
      formState.inputValues.age = old;
    }
    if (formState.inputValues.phone === "") {
      formState.inputValues.phone = phone;
    }
    if (formState.inputValues.character === "") {
      formState.inputValues.character = myProfile.character;
    }
    if (formState.inputValues.appearance === "") {
      formState.inputValues.appearance = myProfile.appearance;
    }

    dispatch(
      editProfile(
        myProfile._id,
        formState.inputValues.description,
        formState.inputValues.username,
        formState.inputValues.gender,
        formState.inputValues.age,
        formState.inputValues.phone,
        formState.inputValues.character,
        formState.inputValues.appearance
      )
    );
    dispatch(getProfile(id))
    navigation.navigate("EditProfile")
  };
  const {id} = useSelector((state) => state.user)
  const {message} = useSelector((state) => state.other)
  const [formState, dispatchFormState] = useReducer(reducer, initialState);

  const inputChangedHandler = useCallback(
    (inputId, inputValue) => {
      const result = validateInput(inputId, inputValue);
      dispatchFormState({ inputId, validationResult: result, inputValue });
    },
    [dispatchFormState]
  );

  return (
    <SafeAreaView style={{ width, height, backgroundColor: "white" }}>
      <View style={{ flex: 1 }}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          scrollEventThrottle={16}
          style={{ flex: 1, paddingHorizontal: 20 }}
        >
          <View
            style={{
              flexDirection: "row",
              paddingTop: "8%",
              paddingHorizontal: 20,
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <BackButton />
            <Text style={[MyStyles.text_xxl, { start: 0 }]}>Edit Profile</Text>
            <TouchableOpacity onPress={() => handlerEditProfile()}>
              <MaterialIcons name="fact-check" size={24} color={colors.pink} />
            </TouchableOpacity>
          </View>

          <View style={{ marginTop: "5%", alignItems: "center" }}>
            <View style={{ position: "relative", padding: 1 }}>
              <Image style={styles.userImage} source={{ uri: myProfile.img }} />
              <TouchableOpacity
                style={{ position: "absolute", bottom: 0, right: 0 }}
              >
                <MaterialCommunityIcons
                  style={styles.camera}
                  name="camera-flip-outline"
                  size={24}
                  color="gray"
                />
              </TouchableOpacity>
            </View>
          </View>

          <KeyboardAvoidingView
            style={{ flex: 1 }}
            behavior={Platform.OS === "ios" ? "height" : undefined}
            keyboardVerticalOffset={100}
          >
            <Indicator
              id="description"
              placeholder={myProfile.description}
              title="Describe"
              onInputChanged={inputChangedHandler}
              initialValue={formState.inputValues.description}
              numberOfLines={2}
              maxLength={50}
            />
            <Indicator
              id="username"
              placeholder={username}
              title="Username"
              onInputChanged={inputChangedHandler}
              initialValue={formState.inputValues.username}
            />
            <Indicator
              title="Email"
              placeholder={email}
              editable={false}
              selectTextOnFocus={false}
            />
            <Indicator
              id="gender"
              title="Gender"
              placeholder={myProfile.gender}
              onInputChanged={inputChangedHandler}
              initialValue={formState.inputValues.gender}
            />
            <Indicator
              id="age"
              title="Age"
              placeholder={old}
              onInputChanged={inputChangedHandler}
              initialValue={formState.inputValues.age}
            />
            <Indicator
              id="phone"
              title="Phone"
              placeholder={phone}
              onInputChanged={inputChangedHandler}
              initialValue={formState.inputValues.phone}
            />
            <Indicator
              id="character"
              title="Character"
              placeholder={myProfile.character}
              onInputChanged={inputChangedHandler}
              initialValue={formState.inputValues.character}
            />
            <Indicator
              id="appearance"
              title="Appearance"
              placeholder={myProfile.appearance}
              onInputChanged={inputChangedHandler}
              initialValue={formState.inputValues.appearance}
            />
          </KeyboardAvoidingView>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default EditProfileScreen;

const styles = StyleSheet.create({
  userImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  camera: {
    backgroundColor: " rgba(255, 255, 255, 0.72)",
    borderRadius: 5,
    padding: 2,
  },
});
