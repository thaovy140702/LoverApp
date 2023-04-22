import {
  FlatList,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import BackButton from "../../../components/button/BackButton";
import { Feather } from "@expo/vector-icons";
import BoldText from "../../../components/text/BoldText";
import Info from "../../../components/Info";
import { UserImageCircle } from "../../../components/UserImage";
import Rating from "../../../components/Rating";
import RegularText from "../../../components/text/RegularText";
import colors from "../../../constants/colors";
import LightText from "../../../components/text/LightText";
import usersData from ".././data/usersData";
import Map from "../../../components/Map";
import Schedule from "../../../components/Schedule";
import ButtonIcon from "../../../components/button/ButtonIcon";
import { FontAwesome } from "@expo/vector-icons";
import DateTimePicker from "@react-native-community/datetimepicker";
import { useState } from "react";
import { BottomSheet } from 'react-native-btr';
import BottomSheetMap from "../../../components/BottomSheetMap";



const FeedbackItem = ({name, rate, feedback}) => (
  <View style={[styles.card, styles.shadowProp]}>
          <View style={{ marginLeft: 20, flexDirection: "row" }}>
              <UserImageCircle
                width={40}
                height={40}
                widthContainer={50}
                heightContainer={50}
                image="https://i.pinimg.com/564x/ff/c4/b7/ffc4b7a16b9f80fae9a81c36ce9cbb54.jpg"
              />

              <View style={{flexDirection: 'column', marginLeft: 10}}>
                <BoldText text={name} font={14}/>
                <Rating rate={rate}/>
              </View>
            </View>

            <View style={{marginStart: 80, marginTop: 10}}>
                  <RegularText text={feedback} fontSize={14}/>
            </View>

            <TouchableOpacity style={{ alignSelf: 'flex-end', marginRight: 20}}>
            <Feather name="heart" size={20} color={colors.lightGrey} />
            </TouchableOpacity>

          </View>
)

const PartnerInfoScreen = () => {
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState("date");
  const [show, setShow] = useState(false);
  const [showTo, setShowTo] = useState(false);
  const [text, setText] = useState("00:00");
  const [textTo, setTextTo] = useState("00:00");

  const [visible, setVisible] = useState(false);

  const toggleBottomNavigationView = () => {
    setVisible(!visible);
  };

  // start time
  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === "ios");
    setDate(currentDate);
    let tempDate = new Date(currentDate);
    let fTime = tempDate.getHours() + " : " + tempDate.getMinutes();
    setText(fTime);
  };
  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  // finish time
  const onChangeTo = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShowTo(Platform.OS === "ios");
    setDate(currentDate);
    let tempDate = new Date(currentDate);
    let fTime = tempDate.getHours() + " : " + tempDate.getMinutes();
    setTextTo(fTime);
  };
  const showModeTo = (currentMode) => {
    setShowTo(true);
    setMode(currentMode);
  };

  // item for info user
  const ItemInfo = ({ fontSize, text }) => (
    <View style={styles.itemInfo}>
      <RegularText
        text={text}
        color={colors.textColorWhite}
        fontSize={fontSize}
      />
    </View>
  );

  return (
    <SafeAreaView style={{ backgroundColor: "white", flex: 1 }}>
      {/* show calendar for start time */}
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          locale={"en"}
          value={date}
          mode={mode}
          is24Hour={true}
          display="default"
          onChange={onChange}
        />
      )}

      {/* show calendar for finish time */}
      {showTo && (
        <DateTimePicker
          testID="dateTimePicker"
          locale={"en"}
          value={date}
          mode={mode}
          is24Hour={true}
          display="default"
          onChange={onChangeTo}
        />
      )}

      <ScrollView styles={{ flex: 1 }}>
        {/* header start */}
        <View style={styles.headerStyle}>
          <View style={{ marginStart: 20 }}>
            <BackButton />
          </View>
          <Feather name="heart" size={24} color="black" />
        </View>
        {/* header end */}

        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Info type="Weight" value="47" />
          <UserImageCircle
            width={70}
            height={70}
            widthContainer={80}
            heightContainer={80}
            image="https://i.pinimg.com/564x/ff/c4/b7/ffc4b7a16b9f80fae9a81c36ce9cbb54.jpg"
          />
          <Info type="Height" value="160" />
        </View>

        <View style={{ alignItems: "center" }}>
          <BoldText text="Lisa" font={16} />
          <View style={{ flexDirection: "row" }}>
            <Rating rate={4} />
            <RegularText text=" 219 receivers" color={colors.grey} />
          </View>
          <BoldText text={`$ 10.00 /hour`} font={16} color={colors.pink} />
        </View>

        <View style={{ paddingStart: 20, marginTop: 20 }}>
          <BoldText text="Details" font={16} />
          <View style={{ marginTop: 20 }}>
            <LightText
              text="I am Lisa, 25 years old now and I think you ..., "
              fontSize={14}
            />
          </View>

          <FlatList
            style={{ marginTop: 10 }}
            data={usersData}
            showsHorizontalScrollIndicator={false}
            horizontal
            renderItem={({ item }) => {
              return <ItemInfo text="Interesting" fontSize={12} />;
            }}
          />
        </View>

        <View style={{ paddingStart: 20, marginTop: 20 }}>
          <BoldText text="Schedule" font={16} />
          <Schedule />
        </View>

        {/* Choose time */}
        <View style={{ paddingStart: 20, marginTop: 20 }}>
          <BoldText text="Choose time" font={16} />
          <View
            style={{
              marginRight: 20,
              marginTop: 20,
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <View style={{}}>
              <RegularText text="From" color={colors.pink} />
              <TouchableOpacity onPress={() => showMode("time")}>
                <ItemInfo text={text} />
              </TouchableOpacity>
            </View>
            <FontAwesome
              name="long-arrow-right"
              size={24}
              color={colors.pink}
            />
            <View>
              <RegularText text="To" color={colors.pink} />
              <TouchableOpacity onPress={() => showModeTo("time")}>
                <ItemInfo text={textTo} />
              </TouchableOpacity>
            </View>
          </View>
        </View>

        {/* Choose location */}
        <View style={{ paddingStart: 20, marginTop: 20 }}>
          <BoldText text="Location" font={16} />
          <View style={styles.mapStyle}>
            <View style={{ width: "50%", alignItems: "center", justifyContent: 'center' }}>
              <Map />
            </View>
            <View style={{ width: "50%" }}>
              
                <TouchableOpacity
                  style={{
                    flexDirection: "row",
                    justifyContent: "center",
                    marginTop: 25,
                  }}
                  onPress={toggleBottomNavigationView}
                >
                  <Feather name="map-pin" size={18} color={colors.grey} />
                  <View style={{ marginLeft: 8 }}>
                    <RegularText text="Da Nang" color={colors.grey} />
                  </View>
                </TouchableOpacity>
              
            </View>
          </View>
        </View>

        {/* user comment */}
        <View style={{ paddingStart: 20, marginTop: 20 }}>
          <BoldText text="Reviewer" font={16} />
          <FlatList
            horizontal
            data={usersData}
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => (
              <FeedbackItem
              name={item.name}
              rate={item.rate}
              feedback={item.feedback}
              />
            )}
            keyExtractor={(item) => item.id}
          />
        </View>
      </ScrollView>

      {/*button appointment  */}
      <View style={{ position: "absolute", bottom: 20, right: 10 }}>
        <ButtonIcon
          text="Appointment"
          backgroundColor={colors.pink}
          color={colors.textColorWhite}
        />
      </View>

      <BottomSheet
          visible={visible}
          //setting the visibility state of the bottom shee
          onBackButtonPress={toggleBottomNavigationView}
          //Toggling the visibility state on the click of the back botton
          onBackdropPress={toggleBottomNavigationView}
          //Toggling the visibility state on the clicking out side of the sheet
        >
          {/*Bottom Sheet inner View*/}
          <View style={styles.bottomNavigationView}>
            <View>
             
              <BottomSheetMap />
            </View>
          </View>
        </BottomSheet>
      
    </SafeAreaView>
  );
};

export default PartnerInfoScreen;

const styles = StyleSheet.create({
  headerStyle: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingEnd: 30,
    alignItems: "center",
    paddingVertical: 35,
  },
  itemInfo: {
    width: 130,
    height: 35,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.lightPink,
    borderRadius: 20,
    marginRight: 10,
  },
  commentStyle: {
    flexDirection: "row",
    backgroundColor: "white",
    width: 330,
    alignItems: "center",
    marginStart: 10,
    marginTop: 10,
    marginBottom: 20,
    borderColor: "white",
    borderWidth: 1,
    borderRadius: 15,
    shadowProp: {
      shadowColor: "black",
      shadowOffset: { width: 1, height: 2 },
      shadowOpacity: 0.2,
      shadowRadius: 3,
    },
  },
  mapStyle: {
    height: 150,
    backgroundColor: "rgba(255, 159, 159, 0.08)",
    flexDirection: "row",
    borderRadius: 20,
    marginTop: 20,
    marginRight: 20,
  },
  card: {
    backgroundColor: 'white',
    height: 150,
    width: 330,
    borderRadius: 20,
    marginRight: 20,
    marginTop: 20,
    marginBottom: 140,
    paddingVertical: 20
  },
  shadowProp: {
    shadowColor: 'black',
    shadowOffset: {width: 1, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 5
  },
  bottomNavigationView: {
    backgroundColor: '#fff',
    width: '100%',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    height: '90%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 50,
    paddingHorizontal: 20
  },
});
