import { View, Text } from "react-native";
import React from "react";
import colors from "../constants/colors";

const ProgressBar = (props) => {
  return (
    <View
      style={{
        width: "100%",
        backgroundColor: colors.lightPink,
        marginTop: 3,
        borderRadius: 5,
      }}
    >
      <LinearGradient
        style={{
          width: props.progressData,
          height: 3,
          margin: 2,
          borderRadius: 5,
        }}
        colors={["rgba(255,255,255,0)", "white"]}
        start={[0.1, 0.3]}
      />
    </View>
  );
};

export default ProgressBar;
