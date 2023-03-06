import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
} from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import MyStyles from "../../constants/MyStyles";
import colors from "../../constants/colors";
import BigButton from "../../components/button/BigButton";
import { useNavigation } from "@react-navigation/native";

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
      <SafeAreaView>
        <Text style={MyStyles.headerSlide}>Your SEX is</Text>

        <View>
          <FlatList
            style={styles.slide}
            data={data}
            numColumns={2}
            contentContainerStyle={{
              padding: 20,
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

      </SafeAreaView>
    </ImageBackground>
  );
};

export default GenresScreen;

const styles = StyleSheet.create({
  slide: {
    position: 'relative',
    width: "100%",
    height: 200,
    alignSelf: "center",
    marginVertical: '71%',
  },

  button: {
    position: "absolute",
    alignSelf: "center",
    bottom: "8%",
  },
});
