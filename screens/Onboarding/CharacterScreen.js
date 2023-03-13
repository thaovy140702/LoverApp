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

const dataCharacter = [
  { id: 1, character: "one" },
  { id: 2, character: "one" },
  { id: 3, character: "one" },
  { id: 4, character: "one" },
  { id: 5, character: "one" },
  { id: 6, character: "one" },
  { id: 7, character: "one" },
  { id: 8, character: "one" },
  { id: 9, character: "Other" },
]

const CharacterScreen = () => {
  
  const navigation = useNavigation();
  const [character, setCharacter] = useState(dataCharacter)

  const onSelect = (item, index) => {
    const newArrCharacter = character.map(e => {
      if (item.id == e.id) {
        return {
          ...e,
          selected: !e.selected
        }
      }
      return {
        ...e,
        selected: e.selected
      }
    })
    setCharacter(newArrCharacter);
  }

  return (
    <ImageBackground
      source={require("../../assets/images/bg-heart.png")}
      style={MyStyles.container}
    >
      <SafeAreaView>
        <Text style={MyStyles.headerSlide}>
          Your partner’s CHARACTER you LIKE
        </Text>

        <View>
          <FlatList
            style={styles.slide}
            data={character}
            numColumns={3}
            contentContainerStyle={{
              // padding: 20,
              alignItems: "center",
            }}
            renderItem={({ item, index }) => {
              return (
                <TouchableOpacity
                  style={{ margin: 10 }}
                  onPress={() => onSelect(item, index)}
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
                    {item.character}
                  </Text>
                </TouchableOpacity>
              );
            }}
            keyExtractor={(item, index) => item.id}
          />
        </View>

        <View style={styles.button}>
          <BigButton text="Next" onPress={() => navigation.navigate("Home")}/>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};

export default CharacterScreen;

const styles = StyleSheet.create({
  slide: {
    position: "relative",
    width: "100%",
    // height: 200,
    alignSelf: "center",
    marginVertical: "71%",
  },

  button: {
    position: "absolute",
    alignSelf: "center",
    bottom: "8%",
  },
});
