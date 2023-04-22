import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { updateData } from "../utils/actions/refreshAction";
import { useState } from "react";
import { useRef } from "react";
import colors from "../constants/colors";

const Test = () => {
 
  // const dispatch = useDispatch();
  // const token = "test"
  // useEffect(() => {
  //   dispatch(updateData(token));
  // }, [dispatch]);

  // const {refreshToken, error} = useSelector(state=>state.refresh)
  // console.log('ref',refreshToken, error)

  // AsyncStorage.getAllKeys((err, keys) => {
  //   AsyncStorage.multiGet(keys, (error, stores) => {
  //     stores.map((result, i, store) => {
  //       console.log({ [store[i][0]]: store[i][1] });
  //       return true;
  //     });
  //   });
  // });
  //
  const [otp1, setOtp1] = useState("");
  const [otp2, setOtp2] = useState("");
  const [otp3, setOtp3] = useState("");
  const [otp4, setOtp4] = useState("");
  const [otp5, setOtp5] = useState("");
  const [otp6, setOtp6] = useState("");

  let otp2Ref = useRef(null);
  let otp3Ref = useRef(null);
  let otp4Ref = useRef(null);
  let otp5Ref = useRef(null);
  let otp6Ref = useRef(null);

  const fullOTP = otp1 + otp2 + otp3 + otp4 + otp5 + otp6;
  console.log(fullOTP);

  return (

    <View style={styles.container}>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        maxLength={1}
        onChangeText={(text) => {
          setOtp1(text);
          if (text.length > 0) {
            otp2Ref.focus();
          }
        }}
        value={otp1}
        autoFocus={true}
        blurOnSubmit={false}
        onSubmitEditing={() => otp2Ref.focus()}
      />
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        maxLength={1}
        onChangeText={(text) => {
          setOtp2(text);
          if (text.length > 0) {
            otp3Ref.focus();
          }
        }}
        value={otp2}
        ref={(ref) => {
          otp2Ref = ref;
        }}
        blurOnSubmit={false}
        onSubmitEditing={() => otp3Ref.focus()}
      />
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        maxLength={1}
        onChangeText={(text) => {
          setOtp3(text);
          if (text.length > 0) {
            otp4Ref.focus();
          }
        }}
        value={otp3}
        ref={(ref) => {
          otp3Ref = ref;
        }}
        blurOnSubmit={false}
        onSubmitEditing={() => otp4Ref.focus()}
      />

      <TextInput
        style={styles.input}
        keyboardType="numeric"
        maxLength={1}
        onChangeText={(text) => {
          setOtp4(text);
          if (text.length > 0) {
            otp5Ref.focus();
          }
        }}
        value={otp4}
        ref={(ref) => {
          otp4Ref = ref;
        }}
        blurOnSubmit={false}
        onSubmitEditing={() => otp5Ref.focus()}
      />

<TextInput
        style={styles.input}
        keyboardType="numeric"
        maxLength={1}
        onChangeText={(text) => {
          setOtp5(text);
          if (text.length > 0) {
            otp6Ref.focus();
          }
        }}
        value={otp5}
        ref={(ref) => {
          otp5Ref = ref;
        }}
        blurOnSubmit={false}
        onSubmitEditing={() => otp6Ref.focus()}
      />

      <TextInput
        style={styles.input}
        keyboardType="numeric"
        maxLength={1}
        onChangeText={(text) => {
          setOtp6(text);
        }}
        value={otp6}
        ref={(ref) => {
          otp6Ref = ref;
        }}
        blurOnSubmit={false}
        onSubmitEditing={() => Keyboard.dismiss()}
      />
    </View>
  );
};

export default Test;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 30,
  },
  input: {
    height: 45,
    width: 45,
    marginHorizontal: 5,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: colors.lightPink,
    textAlign: "center",
    fontSize: 18,
    fontFamily: "regular"
  },
});
