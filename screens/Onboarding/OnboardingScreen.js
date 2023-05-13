import {
  View,
  Text,
  ImageBackground,
  Dimensions,
  StyleSheet,
  FlatList,
  Animated,
  TouchableOpacity,
} from "react-native";
import React, { useRef, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import colors from "../../constants/colors";
import MyStyles from "../../constants/MyStyles";
import BigButton from "../../components/button/BigButton";
import dataSlide from "./dataSlide";
import { useNavigation } from "@react-navigation/native";

const { width, height } = Dimensions.get("window");

// paginator
const Paginator = ({ dt, scrollX }) => {
  return (
    <View style={{ flexDirection: "row", alignSelf: "center" }}>
      {dt.map((_, i) => {
        const inputRange = [(i - 1) * width, i * width, (i + 1) * width];

        const dotWidth = scrollX.interpolate({
          inputRange,
          outputRange: [10, 20, 10],
          extrapolate: "clamp",
        });

        const opacity = scrollX.interpolate({
          inputRange,
          outputRange: [0.3, 1, 0.3],
          // extrapolate:'clamp'
        });
        return (
          <Animated.View
            style={[styles.dot, { width: dotWidth, opacity }]}
            key={i.toString()}
          />
        );
      })}
    </View>
  );
};

const OnboardingScreen = () => {

  
  const navigation = useNavigation();

  const [currentIndex, setCurrentIndex] = useState(0);
  // const [data, setData] = React.useState(dataSlide);
  const scrollX = useRef(new Animated.Value(0)).current;
  const slideRef = useRef(null);

  const viewableItemsChanged = useRef(({ viewableItems }) => {
    setCurrentIndex(viewableItems[0].index);
  }).current;

  const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;

  // transform slide
  const scrollTo = () => {
    if (currentIndex < dataSlide.length - 1) {
      slideRef.current.scrollToIndex({ index: currentIndex + 1 });
    } else {
       navigation.navigate('Navigation')
    }
  };

  return (
    <ImageBackground
      source={require("../../assets/images/bg-heart.png")}
      style={MyStyles.container}
    >
      <SafeAreaView style={{ width, height }}>
        <View style={{ flex: 1 }}>
          <View style={styles.top}>
            <FlatList
              data={dataSlide}
              horizontal
              pagingEnabled
              // scrollEnabled={false}
              showsHorizontalScrollIndicator={false}
              bounces={false}
              onScroll={Animated.event(
                [{ nativeEvent: { contentOffset: { x: scrollX } } }],
                { useNativeDriver: false }
              )}
              scrollEventThrottle={32}
              onViewableItemsChanged={viewableItemsChanged}
              viewabilityConfig={viewConfig} 
              ref={slideRef}
              renderItem={({ item }) => {
                return (
                  <View style={{ width }}>
                    <View style={{ flex: 0.2, justifyContent: "center" }}>
                      <Text style={MyStyles.headerSlide}>
                        {item.nameHeader}
                      </Text>
                    </View>

                    <View style={{ flex: 0.8, justifyContent: "center" }}>
                      <View>{item.pageSlide}</View>
                    </View>
                  </View>
                );
              }}
              keyExtractor={(item) => item.id}
            />

            <Paginator dt={dataSlide} scrollX={scrollX} />
          </View>

          <View style={styles.bottom}>
              <BigButton text="Next" onPress={scrollTo}/>
          </View>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};

export default OnboardingScreen;

const styles = StyleSheet.create({
  top: {
    flex: 0.8,
    // backgroundColor:'green'
  },
  bottom: {
    flex: 0.2,
    justifyContent: "center",
    alignSelf: "center",
  },
  dot: {
    height: 10,
    borderRadius: 5,
    backgroundColor: colors.lightPink,
    marginHorizontal: 8,
  },
});
