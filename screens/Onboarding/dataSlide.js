import {
  Animated,
  Dimensions,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Alert,
} from "react-native";
import React, { useState } from "react";
import { maleIcon, femaleIcon } from "../../constants/Icon";
import colors from "../../constants/colors";
import { useRef } from "react";

const { width, height } = Dimensions.get("window");

// const currentAge = [];
// for (var i = 18; i < 100; i++) {
//   currentAge.push(
//     <View>
//       <Text style={{ fontSize: 40, fontWeight: "bold" }}>{i}</Text>
//     </View>
//   );
// }

const wA = Dimensions.get("screen").width;
const hA = Dimensions.get("screen").height;
const mg = 10 * 2;

const currentAge = [...Array(83).keys()].map((i) => ({
  key: `${i}`,
  value: i + 18,
}));

const AgePage = () => {
  const scrollY = React.useRef(new Animated.Value(0)).current;
  const [age, setAge] = React.useState(0);
  const AgeRef = useRef();
  const onItemIndexChange = React.useCallback(setAge, []);
  const onConnectPress = React.useCallback(() => {
    Alert.alert("Connect with:", currentAge[age].value.toString());
  });
  console.log(onConnectPress);

  const imageFile =
    "https://i.pinimg.com/474x/71/4d/6e/714d6e774366a2fd464807c9005a1d01.jpg";

  return (
    <Animated.FlatList
      style={{ width: wA, height: hA }}
      ref={AgeRef}
      showsVerticalScrollIndicator={false}
      data={currentAge}
      bounces={false}
      snapToInterval={40}
      onScroll={Animated.event(
        [{ nativeEvent: { contentOffset: { y: scrollY } } }],
        { useNativeDriver: false }
      )}
      renderToHardwareTextureAndroid
      contentContainerStyle={{
        // paddingTop: hA / 2 - 20,
        // paddingBottom: hA / 2 - 20 ,
        // padding: 20,
        paddingVertical: hA / 2 - 20,
        alignItems: "center",
      }}
      decelerationRate={0}
      scrollEventThrottle={16}
      renderItem={({ item, index }) => {
        const inputRange = [(index - 1) * 60, index * 60, (index + 1) * 60];

        const scale = scrollY.interpolate({
          inputRange,
          outputRange: [0.5, 1, 0.5],
          extrapolate: "clamp",
        });
        const opacity = scrollY.interpolate({
          inputRange,
          outputRange: [0.2, 1, 0.2],
          // extrapolate: 'clamp',
        });
        return (
          <Animated.View style={{ opacity, transform: [{ scale }] }}>
            <Text
              style={{
                marginVertical: 10,
                fontSize: 40,
                fontWeight: "bold",
                fontFamily: "regular",
              }}
            >
              {item.value}
            </Text>
          </Animated.View>
        );
      }}
      keyExtractor={(item) => item.key.toString()}
      onMomentumScrollEnd={(ev) => {
        const newAge = Math.round(ev.nativeEvent.contentOffset.y / 40);

        if (onItemIndexChange) {
          onItemIndexChange(newAge);
        }
      }}
    />
  );
};

const dataGenres = [
  {
    id: 1,
    icon: maleIcon,
    genres: "male",
  },
  {
    id: 2,
    icon: femaleIcon,
    genres: "female",
  },
];

const GenresPage = () => {
  const [genres, setGenres] = useState(dataGenres);
  const onClickItem = (item) => {
    const newArrGenres = genres.map((e) => {
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
    setGenres(newArrGenres);
  };
  return (
    <FlatList
      data={genres}
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
              console.log(item.genres);
            }}
          >
            <Text
              style={{
                padding: 15,
                backgroundColor: item.selected
                  ? colors.lightPink
                  : "rgba(250, 235, 240,.6)",
                borderRadius: 10,
                fontSize: 14,
                fontFamily: "regular",
              }}
            >
              {item.genres}
            </Text>
          </TouchableOpacity>
        );
      }}
      keyExtractor={(item) => item.id}
    />
  );
};

const dataCharacter = [
  { id: 1, character: "Honest" },
  { id: 2, character: "Flexible" },
  { id: 3, character: "Patient" },
  { id: 4, character: "Cheerful" },
  { id: 5, character: "Friendly" },
  { id: 6, character: "Openness" },
  { id: 7, character: "Emotions" },
  { id: 8, character: "Humble" },
  { id: 9, character: "Other" },
];

const CharacterPage = () => {
  const [character, setCharacter] = useState(dataCharacter);

  const onSelect = (item, index) => {
    const newArrCharacter = character.map((e) => {
      if (item.id == e.id) {
        return {
          ...e,
          selected: !e.selected,
        };
      }
      return {
        ...e,
        selected: e.selected,
      };
    });
    setCharacter(newArrCharacter);
  };
  return (
    <FlatList
      data={character}
      numColumns={3}
      contentContainerStyle={{
        padding: 20,
        alignItems: "center",
      }}
      renderItem={({ item, index }) => {
        return (
          <TouchableOpacity
            style={{
              margin: 10,
              padding: 10,
              backgroundColor: item.selected
                ? colors.lightPink
                : "rgba(250, 235, 240,.6)",
              borderRadius: 10,
              width: 100,
              justifyContent: "center",
              alignItems: "center",
            }}
            onPress={() => onSelect(item, index)}
          >
            <Text
              style={{
                fontSize: 14,
                fontFamily: "regular",
              }}
            >
              {item.character}
            </Text>
          </TouchableOpacity>
        );
      }}
      keyExtractor={(item) => item.id}
    />
  );
};

const dataApperance = [
  { id: 1, appearance: "Tall" },
  { id: 2, appearance: "Thin" },
  { id: 3, appearance: "Short" },
  { id: 4, appearance: "Smiley" },
  { id: 5, appearance: "Wavy" },
  { id: 6, appearance: "Pretty" },
  { id: 7, appearance: "Cute" },
  { id: 8, appearance: "Chubby" },
  { id: 9, appearance: "Other" },
];

const AppearancePage = () => {
  const [appear, setAppear] = useState(dataApperance);

  const onSelect = (item, index) => {
    const newArrAppear = appear.map((e) => {
      if (item.id == e.id) {
        return {
          ...e,
          selected: !e.selected,
        };
      }
      return {
        ...e,
        selected: e.selected,
      };
    });
    setAppear(newArrAppear);
  };

  return (
    <FlatList
      data={appear}
      numColumns={3}
      contentContainerStyle={{
        padding: 20,
        alignItems: "center",
      }}
      renderItem={({ item, index }) => {
        return (
          <TouchableOpacity
            style={{
              margin: 10,
              padding: 10,
              backgroundColor: item.selected
                ? colors.lightPink
                : "rgba(250, 235, 240,.6)",
              borderRadius: 10,
              width: 100,
              justifyContent: "center",
              alignItems: "center",
            }}
            onPress={() => onSelect(item, index)}
          >
            <Text
              style={{
                fontFamily: "regular",
                fontSize: 14,
              }}
            >
              {item.appearance}
            </Text>
          </TouchableOpacity>
        );
      }}
      keyExtractor={(item) => item.id}
    />
  );
};

export default [
  {
    id: 1,
    nameHeader: "Choose your Age",
    pageSlide: <AgePage />,
  },
  {
    id: 2,
    nameHeader: "Your SEX is",
    pageSlide: <GenresPage />,
  },
  {
    id: 3,
    nameHeader: "How about your partner's APPEARANCE",
    pageSlide: <AppearancePage />,
  },
  {
    id: 4,
    nameHeader: "Your partner’s CHARACTER you LIKE",
    pageSlide: <CharacterPage />,
  },
];
