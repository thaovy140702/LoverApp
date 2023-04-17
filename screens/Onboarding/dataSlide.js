import { Animated, Dimensions, Text, View, FlatList, TouchableOpacity } from "react-native";
import React, {useState} from "react";
import {maleIcon, femaleIcon} from "../../constants/Icon"
import colors from "../../constants/colors";

const { width, height } = Dimensions.get("window");

// const currentAge = [];
// for (var i = 18; i < 100; i++) {
//   currentAge.push(
//     <View>
//       <Text style={{ fontSize: 40, fontWeight: "bold" }}>{i}</Text>
//     </View>
//   );
// }

const wA = Dimensions.get('screen').width
const hA = Dimensions.get('screen').height
const mg = 10*2

const currentAge = [...Array(83).keys()].map(i => ({ key: `${i}`, value: i + 18 }));

const AgePage = () => {
  const scrollY = React.useRef(new Animated.Value(0)).current;
  // const [age, setAge] = React.useState(0);

  return (
    <Animated.FlatList
      style={{ width: wA, height:hA}}
      showsVerticalScrollIndicator={false}
      data={currentAge}
      bounces={false}
      onScroll={Animated.event(
        [{ nativeEvent: { contentOffset: { y: scrollY } } }],
        { useNativeDriver: false }
      )}
      renderToHardwareTextureAndroid
      contentContainerStyle={{
        // paddingTop: hA / 2 - 20,
        // paddingBottom: hA / 2 - 20 ,
        // padding: 20,
        paddingVertical: hA/2 - 20,
        alignItems: "center",
      }}
      decelerationRate={0}
      scrollEventThrottle={16}
      renderItem={({ item, index }) => {
        const inputRange = [
          (index - 1) * (60),
          index * (60),
          (index + 1) * (60),
        ];

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
            <Text style={{ marginVertical: 10, fontSize: 40, fontWeight: "bold" }}>{item.value}</Text>
          </Animated.View>
        );
      }}
      keyExtractor={item => item.key.toString()}
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
  );
};

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
      keyExtractor={(item) => item.id}
    />
  );
};

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
    nameHeader: 'Choose your Age',
    pageSlide: <AgePage />
  },
  {
    id: 2,
    nameHeader: 'Your SEX is',
    pageSlide: <GenresPage />
  },
  {
    id: 3,
    nameHeader: "How about your partner's APPEARANCE",
    pageSlide: <AppearancePage />
  },
  {
    id: 4,
    nameHeader: "Your partner’s CHARACTER you LIKE",
    pageSlide: <CharacterPage />
  },
]