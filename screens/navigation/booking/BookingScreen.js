import { StyleSheet, TouchableOpacity, View, Text } from "react-native";
import React from "react";
import BackButton from "../../../components/button/BackButton";
import { Feather } from "@expo/vector-icons";
import BoldText from "../../../components/text/BoldText";
import RegularText from "../../../components/text/RegularText";
import colors from "../../../constants/colors";
import Schedule from "../../../components/Schedule";
import { FontAwesome } from "@expo/vector-icons";
import DateTimePicker from "@react-native-community/datetimepicker";
import { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { BottomSheet } from "react-native-btr";
import BottomSheetMap from "../../../components/BottomSheetMap";
import MyStyles from "../../../constants/MyStyles";

const BookingScreen = () => {
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
    <View style={[styles.itemInfo, styles.shadowProp]}>
      <RegularText text={text} color={colors.pink} fontSize={fontSize} />
    </View>
  );

  return (
    <SafeAreaView style={{ flex: 1, paddingHorizontal: 20, backgroundColor: "white" }}>
      
      {/* header start */}
      <View style={styles.headerStyle}>
        <BackButton />
        <TouchableOpacity style={styles.btn_border}>
            <Text style={[MyStyles.text_sm,{color: colors.lightPink}]}>Appointment now</Text>
        </TouchableOpacity>
      </View>
      {/* header end */}

      <View style={{ flex: 0.15 }}>
        <BoldText text="Place" font={16} />
        <TouchableOpacity
          style={{
            flexDirection: "row",
            width: "100%",
            borderRadius: 20,
            padding: 10,
            backgroundColor: colors.pink_20,
            marginTop: 10
          }}
          onPress={toggleBottomNavigationView}
        >
          <Feather name="map-pin" size={18} color='black' />
          <Text style={[MyStyles.text_md, { marginStart: 8, marginEnd: 10 }]}>
            East Sea Park, Vo Nguyen Giap, Phuoc My, Son Tra, Da Nang
          </Text>
        </TouchableOpacity>
      </View>

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

      {/* Choose time */} 
      <View style={{ flex: 0.15 }}>
        <BoldText text="Choose time" font={16} />
        <View
          style={{
            marginTop: 10,
            flexDirection: "row",
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          <View>
            <RegularText text="From" color={colors.pink} />
            <TouchableOpacity onPress={() => showMode("time")}>
              <ItemInfo text={text} />
            </TouchableOpacity>
          </View>
          <FontAwesome name="long-arrow-right" size={24} color={colors.pink} />
          <View>
            <RegularText text="To" color={colors.pink} />
            <TouchableOpacity onPress={() => showModeTo("time")}>
              <ItemInfo text={textTo} />
            </TouchableOpacity>
          </View>
        </View>
      </View>

          {/* choose date */}
      <View style={{ flex: 0.55, marginTop: 10 }}>
        <BoldText text="Schedule" font={16} />
        <Schedule />
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

export default BookingScreen;

const styles = StyleSheet.create({
  headerStyle: {
    flex: 0.1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems:'center'
  },
  btn_border:{
    padding: 10,
    borderRadius: 10,
    backgroundColor: '#fff',
    borderColor: colors.lightPink,
    borderWidth: 1
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
    backgroundColor: "white",
    height: 150,
    width: 330,
    borderRadius: 20,
    marginRight: 20,
    marginTop: 20,
    marginBottom: 140,
    paddingVertical: 20,
  },
  shadowProp: {
    backgroundColor:'white',
    shadowColor: "pink",
    shadowOffset: { width: 1, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 5,
  },
  bottomNavigationView: {
    backgroundColor: "#fff",
    width: "100%",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    height: "90%",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  itemInfo: {
    width: 120,
    height: 35,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: colors.pink_20,
    borderRadius: 20,
    marginTop: 10,
  },
});
