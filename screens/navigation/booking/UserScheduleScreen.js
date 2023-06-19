import {
  Platform,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import DateTimePicker from "@react-native-community/datetimepicker";
import { Feather, Entypo } from "@expo/vector-icons";
import BoldText from "../../../components/text/BoldText";
import colors from "../../../constants/colors";
import RegularText from "../../../components/text/RegularText";
import { useNavigation } from "@react-navigation/native";
import { UserImageSquare } from "../../../components/UserImage";
import { CanceledButton, ComingButton, FinishButton } from "../../../components/button/TinyButton";
import MyStyles from "../../../constants/MyStyles";
import { getListBooking, getProfile } from "../../../utils/actions/otherActions";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getPartnerProfile } from "../../../utils/actions/partnerAction";
import { Agenda } from "react-native-calendars";
import moment from "moment/moment";

const UserScheduleScreen = () => {
  const dispatch = useDispatch();

  const { id } = useSelector((state) => state.user);
  const { partner } = useSelector((state) => state.partner);
  const { booking, myProfile, role } = useSelector((state) => state.other);

  
  useEffect(() => {
    dispatch(getPartnerProfile(id));
    dispatch(getProfile(id));
    dispatch(getListBooking(partner._id));
    // dispatch(getProfile(booking[0].user_id));
  }, [dispatch]);
  
  const userProfile = role === 'user' ? myProfile : partner || role === 'parter' ? partner : myProfile
  // const userId = role === 'user' ? user : _id || role === 'parter' ? _id : user
  console.log(booking);

  const [dataBooking, setDataBooking] = React.useState({});

  // Process the data and populate the items state
  React.useEffect(() => {
    // Process the data and populate the items state based on the 'day' field
    const processedItems = {};

    booking.forEach((item) => {
      const day = moment(item.day).format("YYYY-MM-DD");
      if (!processedItems[day]) {
        processedItems[day] = [];
      }
      processedItems[day].push(item);
    });

    setDataBooking(processedItems);
  }, []);

  // console.log(us)


  const navigation = useNavigation();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>

      {/* header start */}
      <View style={styles.headerStyle}>
        <View style={{ marginStart: 20 }}>
          <BoldText text="My appointment" font={16} />
        </View>
        {/* <TouchableOpacity
          onPress={() => navigation.navigate("NotificationScreen")}
        >
          <Feather name="bell" size={24} color="black" />
        </TouchableOpacity> */}
      </View>
      {/* header and */}

      {/* pending */}
      <View style={{ marginStart: 10 }}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {booking === null && <Text>Loading...</Text> || booking.map((item) => {
            const date = new Date(item.createdAt);
            const month = date.getMonth();
            const monthName = [
              "Jan",
              "Feb",
              "Mar",
              "Apr",
              "May",
              "Jun",
              "Jul",
              "Aug",
              "Sep",
              "Oct",
              "Nov",
              "Dec",
            ][month];
            const day = `${monthName} ${date.getDate()} - ${date.getHours()} : ${date.getMinutes()}`;
            return (
              item.status === "INACCEPT" && (
                <TouchableOpacity 
                  key={item._id} style={styles.borderPending}
                  onPress={() => navigation.navigate("ScheduleDescription",{
                    idBooking: item._id,
                    idBookingUser: item.user_id,
                    idBookingParter: item.ny_id,
                    status: item.status,
                    price: item.price,
                    startDate: item.startDate,
                    endDate: item.endDate,
                    day: item.createdAt,
                    address: item.address
                  })}
                >
                  <Text
                    style={[
                      MyStyles.text_sm_grey,
                      {
                        paddingBottom: 5,
                        borderBottomColor: "lightpink",
                        borderBottomWidth: 1,
                        marginBottom: 5,
                      },
                    ]}
                  >
                    {day}
                  </Text>
                  <BoldText text="Description" font={16} />
                  <Text style={MyStyles.text_sm_grey}>
                    #{item.intermediaryToken}
                  </Text>
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-between",
                      alignItems: "flex-end",
                    }}
                  >
                    <Text
                      style={[
                        MyStyles.text_sm_bold,
                        { color: "black", marginTop: 5 },
                      ]}
                    >
                      {item.status}
                    </Text>
                    <Entypo name="dot-single" size={24} color="gray" />
                  </View>
                </TouchableOpacity>
              )
            );
          })}
        </ScrollView>
      </View>

      {/* User appointment start*/}

      <Agenda
        style={{marginTop: 10, backgroundColor:'white'}}
        items={dataBooking}
        disabledByDefault={true}
        onRefresh={() => console.log('refreshing...')}
        refreshControl={null}
        hideExtraDays={true}
        theme={{
          // ...calendarTheme,
          backgroundColor: 'white', // Background color of the agenda list
          textDisabledColor:'gray',
          todayTextColor: 'pink', // Text color of today's date
          dayTextColor: 'gray',
          agendaDayTextColor: 'lightgray',
          agendaDayNumColor: 'gray',
          agendaTodayColor: colors.pink,
          agendaKnobColor: 'pink',
          selectedDayBackgroundColor: colors.lightPink,
          dotColor: colors.pink,
        }}
        // selected={moment().format('YYYY-MM-DD')}
        showSixWeeks={false}
        showOnlySelectedDayItems

        // day
        renderDay={(item) => {
          const date = new Date(item);
          const month = date.getMonth()
          const monthName = [
            "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
          ][month];
          return (
            <View key={item._id} style={styles.calendarStyle}>
              <BoldText text={date.getDate()} color={colors.pink} font={20}/>
              <RegularText text={monthName} color={colors.pink} font={16}/>
            </View>
          )
        }}

        // item
        renderItem={(item) => {
          // console.log(item.day)
          const date = new Date(item.createdAt);
          const time = `${date.getHours()} : ${date.getMinutes()}`;
          const status = item.status==='CANCEL'? <CanceledButton/> : <ComingButton/> && item.status==='FINISH'? <FinishButton/> : <ComingButton/>
          return (
            <View
              key={item._id}
              style={{
                flexDirection: "row",
                alignItems: "center",
                margin: 20,
                padding: 10,
                borderRadius: 10,
                backgroundColor:'white'
              }}
            >
              <TouchableOpacity
                onPress={() => navigation.navigate("ScheduleDescription",{
                  idBooking: item._id,
                  idBookingUser: item.user_id,
                  idBookingParter: item.ny_id,
                  status: item.status,
                  price: item.price,
                  startDate: item.startDate,
                  endDate: item.endDate,
                  day: item.day,
                  address: item.address
                })}
                style={{
                  flexDirection: "row",
                  width: 180,
                  justifyContent: "space-between",
                }}
              >
                <UserImageSquare image={userProfile.img} />

                <View>
                  <RegularText text={time} color='gray' fontSize={12} />
                  <View>
                    <BoldText text="Description" font={14} />
                  </View>

                  <View style={{ marginTop: 2 }}>
                    {status}
                  </View>
                </View>
              </TouchableOpacity>
            </View>
          );
        }}
        renderEmptyData={() => {
          return (
            <View style={{alignSelf:'center', marginVertical: 20}}>
              <Text style={MyStyles.text_md_grey}>No booking today</Text>
            </View>
          );
        }}
      />
    </SafeAreaView>
  );
};

export default UserScheduleScreen;

const styles = StyleSheet.create({
  headerStyle: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingEnd: 30,
    alignItems: "center",
    paddingVertical: 20,
  },
  calendarStyle: {
    width: 67,
    height: 100,
    borderRadius: 20,
    backgroundColor: "#FFE8E8",
    justifyContent: "center",
    alignItems: "center",
    marginStart: 20,
    marginTop: 10
  },
  borderPending: {
    padding: 10,
    backgroundColor: "white",
    width: 230,
    margin: 10,
    // marginEnd: 10,
    borderRadius: 10,
    shadowColor: "pink",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: .2,
    shadowRadius: 10,
    elevation: 5,
  },
});
