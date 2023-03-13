import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  Animated,
  FlatList,
  Dimensions,
} from "react-native";
import React, { useLayoutEffect } from "react";
import BigButton from "../../components/button/BigButton";
import MyStyles from "../../constants/MyStyles";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";

const { width, height } = Dimensions.get("window");

// const currentAge = [ ...Array(100).keys() ].map( i => i+1)
const currentAge = [];
for (var i = 18; i < 100; i++) {
  currentAge.push(
    <View>
      <Text style={{ fontSize: 40, fontWeight: "bold" }}>{i}</Text>
    </View>
  );
}

// const data = currentAge.entries();

const AgeScreen = () => {
  const navigation = useNavigation();

  const scrollY = React.useRef(new Animated.Value(0)).current;
  const [index, setIndex] = React.useState(0);
  // const onConnectPress = React.useCallback(() => {
  //     Alert.alert('Connect with:', currentAge.keys());
  //   }, [index]);

  return (
    <ImageBackground
      source={require("../../assets/images/bg-heart.png")}
      style={MyStyles.container}
    >
      <SafeAreaView style={{ width, height }}>
        <View style={{ flex: 1 }}>
          <View style={{ flex: 0.25, justifyContent:"center" }}>
            <Text style={MyStyles.headerSlide}>Choose your AGE</Text>
          </View>

          <View style={styles.slide}>
            <Animated.FlatList
              // style={{ width: "100%" }}
              showsVerticalScrollIndicator={false}
              data={currentAge}
              bounces={false}
              onScroll={Animated.event(
                [{ nativeEvent: { contentOffset: { y: scrollY } } }],
                { useNativeDriver: false }
              )}
              renderToHardwareTextureAndroid
              contentContainerStyle={{
                paddingTop: 200 / 2 - 40,
                // paddingBottom: height / 2 - 20 ,
                padding: 20,
                alignItems: "center",
              }}
              decelerationRate={0}
              scrollEventThrottle={16}
              renderItem={({ item, index }) => {
                const inputRange = [
                  (index - 1) * (77 + 0.8),
                  index * (77 + 0.8),
                  (index + 1) * (77 + 0.8),
                ];

                const scale = scrollY.interpolate({
                  inputRange,
                  outputRange: [0.5, 1, 0.5],
                  extrapolate: "clamp",
                });
                const opacity = scrollY.interpolate({
                  inputRange,
                  outputRange: [0.4, 1, 0.4],
                  // extrapolate: 'clamp',
                });
                return (
                  <Animated.View style={{ opacity, transform: [{ scale }] }}>
                    <Text style={{ marginVertical: "5%" }}>{item}</Text>
                  </Animated.View>
                );
              }}
              // keyExtractor={(item, index) => index.toString()}
              // keyExtractor={(item) => item}
              //  {...{ onScroll }}
            />
          </View>

          <View style={styles.button}>
            <BigButton
              text="Next"
              onPress={() => navigation.navigate("Slide2")}
            />
          </View>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};

export default AgeScreen;

const styles = StyleSheet.create({
  slide: {
    width: width,
    // backgroundColor: "red",
    flex: 0.8,
    // height: 200,
    alignSelf: "center",
    // marginVertical: height / 3,
  },

  button: {
    // position: "absolute",
    flex: 0.25,
    justifyContent: "center",
    alignSelf: "center",
    // bottom: "8%",
  },
});
