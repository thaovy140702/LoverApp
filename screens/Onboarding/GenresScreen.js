import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
  Dimensions,
} from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import MyStyles from "../../constants/MyStyles";
import colors from "../../constants/colors";
import BigButton from "../../components/button/BigButton";
import { useNavigation } from "@react-navigation/native";

const { width, height } = Dimensions.get("window");

const dataGenres = [
  {
    id: 1,
    genres: "male",
  },
  {
    id: 2,
    genres: "female",
  },
];

const GenresScreen = () => {

  const navigation = useNavigation();

  const [data, setData] = useState(dataGenres);
  const onClickItem = (item, index) => {
    const newArrGenres = data.map((e, index) => {
      if (item.id == e.id) {
        return {
          ...e,
          selected: true,
        };
      }
      return {
        ...e,
        selected: false,
      };
    });
    setData(newArrGenres);
  };

  return (
    <ImageBackground
      source={require("../../assets/images/bg-heart.png")}
      style={MyStyles.container}
    >
      <SafeAreaView style={{ width, height }}>
        <View style={{ flex: 1 }}>
          <View style={{ flex: 0.25, justifyContent:"center" }}>
            <Text style={MyStyles.headerSlide}>Your SEX is</Text>
          </View>

        <View style={styles.slide}>
          <FlatList
            data={data}
            numColumns={2}
            contentContainerStyle={{
              padding: 20,
              justifyContent: 'center',
              alignItems: "center",
            }}
            renderItem={({ item, index }) => {
              return (
                <TouchableOpacity
                  style={{ margin: 10 }}
                  onPress={() => {
                    onClickItem(item, index);
                  }}
                >
                  <Text
                    style={{
                      padding: 15,
                      backgroundColor: item.selected
                        ? colors.lightPink
                        : colors.lightGrey,
                      borderRadius: 10,
                      fontSize: 14,
                    }}
                  >
                    {item.genres}
                  </Text>
                </TouchableOpacity>
              );
            }}
            keyExtractor={(item) => item.id}
          />
        </View>

        <View style={styles.button}>
          <BigButton text="Next" onPress={() => navigation.navigate("Slide3")}/>
        </View>

        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};

export default GenresScreen;

const styles = StyleSheet.create({
  slide: {
    width: width,
    // backgroundColor: "red",
    flex: 0.8,
    // height: 200,
    // alignSelf: "center",
    // justifyContent: "center",
    // marginVertical: '71%',
  },

  button: {
    flex: 0.25,
    justifyContent: "center",
    alignSelf: "center",
  },
});
