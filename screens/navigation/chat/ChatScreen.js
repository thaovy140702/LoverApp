import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Dimensions,
  TextInput,
  KeyboardAvoidingView,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import RegularText from "../../../components/text/RegularText";
import colors from "../../../constants/colors";
import BoldText from "../../../components/text/BoldText";
import { Feather, FontAwesome5, FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import ChatListScreen from "./ChatListScreen";
import Bubble from "../../../components/Bubble";
import { NavigationContainer } from "@react-navigation/native";
import Input from "../../../components/Input";
import BackButton from "../../../components/button/BackButton";

const { width, height } = Dimensions.get("window");

const message = "Hi Darling, Have a nice day ";
const ChatScreen = () => {
  const navigation = useNavigation();

  const ButtonItem = ({ iconName }) => (
    <TouchableOpacity style={styles.buttonContainer}>
      <FontAwesome5 name={iconName} size={14} color="white" />
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      {/* header start*/}
      <View style={styles.headerStyle}>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <View style={{ marginTop: 10 }}>
            <BackButton />
          </View>

          <View style={{ marginTop: 15 }}>
            <RegularText
              text="You have an appointment with Lis at 8:00 AM"
              fontSize={12}
              color="#8A8A8E"
            />
          </View>
        </View>

        <View style={{ flexDirection: "row", marginTop: 10 }}>
          <Image
            source={{
              uri: "https://i.pinimg.com/564x/ff/c4/b7/ffc4b7a16b9f80fae9a81c36ce9cbb54.jpg",
            }}
            style={styles.imageUser}
          />
          <View
            style={{
              flexDirection: "column",
              marginHorizontal: 10,
              justifyContent: "center",
            }}
          >
            <BoldText text="Lis" color={colors.textColorBlack} fontSize={16} />

            <View style={{ flexDirection: "row" }}>
              <Feather name="map-pin" size={16} color="#8A8A8E" />
              <RegularText
                text=" Ho Chi Minh City"
                color="#8A8A8E"
                fontSize={12}
              />
            </View>
          </View>

          <ButtonItem iconName="map-marker-alt" />
          <ButtonItem iconName="phone-alt" />
          <ButtonItem iconName="video" />
        </View>
      </View>
      {/* header end */}

      {/* message start */}
      <View style={{ flex: 0.65, padding: 20 }}>
        <Bubble message={message} time="6:00 AM" />
      </View>

      {/* message end */}

      <View style={styles.textInputMessage}>
          <TouchableOpacity>
            <Feather name="camera" size={20} color="black" />
          </TouchableOpacity>

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <TextInput
              placeholder="Enter your message"
              selectionColor={colors.pink}
              style={styles.tetxInput}
            />
            <TouchableOpacity>
              <Feather
                name="smile"
                size={20}
                color="black"
                style={{ position: "absolute", end: 10, top: -10 }}
              />
            </TouchableOpacity>
          </View>
          <TouchableOpacity>
            <FontAwesome name="send" size={20} color={colors.pink} />
          </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default ChatScreen;

const styles = StyleSheet.create({
  headerStyle: {
    flex: 0.2,
    width: "100%",
    height:300,
    backgroundColor: "rgba(255, 159, 159, 0.25)",
    borderBottomEndRadius: 30,
    borderBottomStartRadius: 30,
    alignSelf: "center",
    paddingHorizontal: 20,
    paddingVertical: 10,
    shadowColor: "rgba(255, 159, 159, 0.2)",
    shadowOffset: { width: 0, height: 4 },
    elevation: 6,
  },

  imageUser: {
    width: 60,
    height: 60,
    borderRadius: 50,
  },
  buttonContainer: {
    backgroundColor: "rgba(255,159,159,0.6)",
    justifyContent: "center",
    marginTop: 20,
    marginHorizontal: 5,
    width: 30,
    height: 30,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "red",
    shadowOffset: { width: -1, height: 4 },
    shadowOpacity: 0.6,
    shadowRadius: 3,
    elevation: 8,
  },
  textInputMessage: {
    flex: 0.15,
    backgroundColor: "white",
    width: "100%",
    height: "100%",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    flexDirection: "row",
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignItems: "center",
    justifyContent: "space-between",
    shadowColor: colors.darkPink,
    shadowOffset: {
      width: 0,
      height: -4,
    },
    shadowRadius: 5,
    // shadowOpacity: 0.25,
    elevation: 10,
  },
  tetxInput: {
    position: "relative",
    width: "90%",
    height: 50,
    borderColor: colors.pink,
    borderRadius: 20,
    borderWidth: 1,
    paddingStart: 10,
  },
});
