import {
  Dimensions,
  FlatList,
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import HeaderTitle from "../../components/text/HeaderTitle";
import RegularText from "../../components/text/RegularText";
import { Feather } from "@expo/vector-icons";
import colors from "../../constants/colors";
import MyStyles from "../../constants/MyStyles";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import ChatScreen from "./ChatScreen";
import UserImage from "../../components/UserImage";

const { width, height } = Dimensions.get("screen");

const DATA = [
  {
    id: "123456",
    image:
      "https://i.pinimg.com/564x/ff/c4/b7/ffc4b7a16b9f80fae9a81c36ce9cbb54.jpg",
    name: "Lisa",
    lastMessage: "Hi",
    time: "06:00 AM",
  },
  {
    id: "12345633",
    image:
      "https://i.pinimg.com/564x/ff/c4/b7/ffc4b7a16b9f80fae9a81c36ce9cbb54.jpg",
    name: "Lisa",
    lastMessage: "Hi",
    time: "06:00 AM",
  },
  {
    id: "12345622233",
    image:
      "https://i.pinimg.com/564x/ff/c4/b7/ffc4b7a16b9f80fae9a81c36ce9cbb54.jpg",
    name: "Lisa",
    lastMessage: "Hi",
    time: "06:00 AM",
  },
  {
    id: "123456223",
    image:
      "https://i.pinimg.com/564x/ff/c4/b7/ffc4b7a16b9f80fae9a81c36ce9cbb54.jpg",
    name: "Lisa",
    lastMessage: "Hi",
    time: "06:00 AM",
  },
  {
    id: "123622233",
    image:
      "https://i.pinimg.com/564x/ff/c4/b7/ffc4b7a16b9f80fae9a81c36ce9cbb54.jpg",
    name: "Lisa",
    lastMessage: "Hi",
    time: "06:00 AM",
  },

  {
    id: "12362223",
    image:
      "https://i.pinimg.com/564x/ff/c4/b7/ffc4b7a16b9f80fae9a81c36ce9cbb54.jpg",
    name: "Lisa",
    lastMessage: "Hi",
    time: "06:00 AM",
  },
  {
    id: "12622233",
    image:
      "https://i.pinimg.com/564x/ff/c4/b7/ffc4b7a16b9f80fae9a81c36ce9cbb54.jpg",
    name: "Lisa",
    lastMessage: "Hi",
    time: "06:00 AM",
  },
  {
    id: "1262223",
    image:
      "https://i.pinimg.com/564x/ff/c4/b7/ffc4b7a16b9f80fae9a81c36ce9cbb54.jpg",
    name: "Lisa",
    lastMessage: "Hi",
    time: "06:00 AM",
  },
];



const ChatListScreen = () => {

  const navigation = useNavigation();

  // user item
  const Item = ({ image, name, lastMessage, time }) => (
  
    <TouchableOpacity 
      onPress={() => navigation.navigate(ChatScreen)}
      style={styles.item}>
      
      <UserImage height={60} width={60} image={image} widthContainer={70} heightContainer={70}/>
  
      <View style={styles.content}>
        <HeaderTitle text={name} fontSize={16} />
        <View style={MyStyles.flexDirection}>
          <RegularText text={lastMessage} color={colors.grey} />
          <RegularText text={time} color={colors.grey} />
        </View>
      </View>
    </TouchableOpacity>
  
  );
  
  return (
    <View>
      <SafeAreaView style={{ width, height, position:'absolute', top:0 }}>
        <View style={styles.headerTitle}>
          <HeaderTitle text="Contact" fontSize={20} />
          <TouchableOpacity onPress={() => navigation.navigate("NotificationScreen")}>
              <Feather name="bell" size={24} color="black" />
          </TouchableOpacity>
        </View>

        <View style={styles.searchInput}>
          {/* <Feather style={styles.iconSearch} name="search" size={24} color="black" /> */}
          <TextInput
            style={styles.textInputSearch}
            placeholder="Search"
            selectionColor={colors.pink}
          />
          <Feather
            style={styles.iconSearch}
            name="search"
            size={24}
            color="black"
          />
        </View>

        <View
        // onPress ={() => {navigation.navigate(ChatScreen)}}
        style={{ flex: 1 }}>
          <FlatList
            // style={{ flex: 1 }}
            showsVerticalScrollIndicator={false}
            bounces={false}
            decelerationRate = "fast"
            scrollEventThrottle={16}
            data={DATA}
            renderItem={({ item }) => (
              <Item
                image={item.image}
                name={item.name}
                lastMessage={item.lastMessage}
                time={item.time}
              />
            )}
            keyExtractor={(item) => item.id}
          />
        </View>
      </SafeAreaView>
    </View>
  );
};

export default ChatListScreen;

const styles = StyleSheet.create({
  headerTitle: {
    marginVertical: "5%",
    marginHorizontal: "5%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  searchInput: {
    flexDirection: "row",
    alignSelf: "center",
    // justifyContent: 'center',
    marginVertical: "2%",
  },
  iconSearch: {
    start: -15,
    position: "absolute",
    backgroundColor: 'rgba(255, 159, 159, 1)',
    borderRadius: 20,
    padding: 15,
    width: 55,
    height: 60,
  },
  textInputSearch: {
    height: 60,
    width: "85%",
    borderWidth: 1,
    // alignSelf: 'center',
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
    paddingStart: 50,
    borderColor: colors.lightGrey,
    color: colors.textColorBlack,
    fontFamily: "medium",
  },
  item: {
    flexDirection: "row",
    paddingTop: "5%",
    width: "90%",
    marginHorizontal: "5%",
    alignItems: "center",
    justifyContent: "center",
  },
  content: {
    borderTopRightRadius: 20,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(255, 159, 159, 0.2)',
    borderBottomRightRadius: 20,
    height: 70,
    width: "80%",
    paddingHorizontal: "5%",
    justifyContent: "center",
  },
});
