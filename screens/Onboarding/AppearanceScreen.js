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

const dataApperance = [
  { id: 1, appearance: "one" },
  { id: 2, appearance: "one" },
  { id: 3, appearance: "one" },
  { id: 4, appearance: "one" },
  { id: 5, appearance: "one" },
  { id: 6, appearance: "one" },
  { id: 7, appearance: "one" },
  { id: 8, appearance: "one" },
  { id: 9, appearance: "Other" },
]

const AppearanceScreen = () => {
  
  const navigation = useNavigation();
  const [appear, setAppear] = useState(dataApperance)

const onSelect = (item, index) => {
    const newArrAppear = appear.map(e => {
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
    setAppear(newArrAppear)
  }


  return (
    <ImageBackground
      source={require("../../assets/images/bg-heart.png")}
      style={MyStyles.container}
    >
      <SafeAreaView>
        <Text style={MyStyles.headerSlide}>
          How about your partner’s APPEARANCE
        </Text>

        <View>
          <FlatList
            style={styles.slide}
            data={appear}
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
                      backgroundColor:
                        item.selected ? colors.lightPink : colors.lightGrey,
                      borderRadius: 10,
                      fontSize: 14,
                    }}
                  >
                    {item.appearance}
                  </Text>
                </TouchableOpacity>
              );
            }}
            keyExtractor={(item, index) => item.id}
          />
        </View>

        <View style={styles.button}>
          <BigButton text="Next" onPress={() => navigation.navigate("Slide4")}/>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};

export default AppearanceScreen;

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
