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
import axios from "axios";


const Test = async () => {
  // AsyncStorage.getAllKeys((err, keys) => {
  //   AsyncStorage.multiGet(keys, (error, stores) => {
  //     stores.map((result, i, store) => {
  //       console.log({ [store[i][0]]: store[i][1] });
  //       return true;
  //     });
  //   });
  // });

  let values = await AsyncStorage.getItem("persist:root");
    const object = JSON.parse(values);
    const user = JSON.parse(object.user);
    const accessToken = user["accessToken"];

  return (

    <View style={styles.container}>
      
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
