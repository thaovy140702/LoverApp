import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Image,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import MyStyles from "../../../constants/MyStyles";
import {
  FontAwesome,
  MaterialCommunityIcons,
  SimpleLineIcons,
} from "@expo/vector-icons";
import colors from "../../../constants/colors";
import { LinearGradient } from "expo-linear-gradient";
import { CommonActions, useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector, connect } from "react-redux";
import { getPartnerProfile } from "../../../utils/actions/partnerAction";
import { useEffect } from "react";
import { getListBooking, getProfile } from "../../../utils/actions/otherActions";

const { width, height } = Dimensions.get("window");

const LoverScreen = ({data, loading, error, getPartnerProfile, getListBooking, getProfile}) => {
  const navigation = useNavigation()
  const dispatch = useDispatch();

  const { id } = useSelector((state) => state.user);
  const { partner } = useSelector((state) => state.partner);
  const { booking, myProfile } = useSelector((state) => state.other);
  const userIds = [];

  for (let i = 0; i < booking.length; i++) {
    const userId = booking[i].user_id;
    userIds.push(userId);
  }

  // useEffect(() => {
  //   dispatch(getPartnerProfile(id));
  //   dispatch(getListBooking(partner._id));
  //   // dispatch(getProfile(booking[0].user_id));
  //   dispatch(getProfile(userIds));
  // }, [dispatch]);

  useEffect(() => {
    getPartnerProfile(id) // Dispatch the action to fetch the data when the component mounts
    getListBooking(partner._id)
    getProfile(booking[0].user_id)
  }, []);

  
  // console.log(myProfile)

  if (loading) {
    return <Text>Loading...</Text>;
  }

  if (error) {
    return <Text>Error: {error}</Text>;
  }

  return (
    <SafeAreaView style={{ width, height, backgroundColor: "white" }}>
      <View style={{ flex: 1 }}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          scrollEventThrottle={16}
        >
          {/* top  */}
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: "8%",
              marginHorizontal: 20,
            }}
          >
            <View style={{ flexDirection: "row" }}>
              <Image source={{ uri: partner.img }} style={styles.image} />
              <View
                style={{
                  flexDirection: "column",
                  justifyContent: "flex-start",
                  marginStart: "5%",
                }}
              >
                <Text style={MyStyles.text_md_bold}>{partner.name}</Text>
                <View style={{ flexDirection: "row" }}>
                  <View
                    style={{ flexDirection: "row", alignContent: "flex-start" }}
                  >
                    <SimpleLineIcons
                      name={`symbol-${partner.gender}`}
                      size={16}
                      color={colors.pink}
                    />
                    <Text
                      style={[
                        MyStyles.text_sm,
                        { color: colors.pink, marginStart: 5 },
                      ]}
                    >
                      {partner.old}
                    </Text>
                  </View>
                  <Text
                    style={[
                      MyStyles.text_sx_bold,
                      {
                        marginStart: 10,
                        backgroundColor: "pink",
                        alignSelf: "center",
                        padding: 3,
                        borderRadius: 10,
                        color: "white",
                      },
                    ]}
                  >
                    Grandted permission
                  </Text>
                </View>
              </View>
            </View>
            <TouchableOpacity
              style={{
                flexDirection: "row",
                backgroundColor: "rgba(76,175,80,0.2)",
                borderRadius: 10,
                padding: 5,
                alignSelf: "center",
              }}
            >
              <MaterialCommunityIcons name="power" size={24} color="green" />
              {/* <Text
                style={[MyStyles.text_sm, { marginStart: 5, color: "green" }]}
              >
                Turn on
              </Text> */}
            </TouchableOpacity>
          </View>

          {/* statistical */}
          <LinearGradient
            style={{
              flexDirection: "row",
              justifyContent: "space-around",
              marginTop: 20,
              paddingVertical: 20,
            }}
            colors={["rgba(255, 159, 159, 0.1)", "rgba(255, 159, 159, 0.06)"]}
            end={{ x: 0.9, y: 0.5 }}
          >
            <View style={{ alignSelf: "center" }}>
              <View style={{ flexDirection: "row", alignSelf: "center" }}>
                <FontAwesome
                  style={{ margin: 2 }}
                  name="heart"
                  size={24}
                  color={colors.pink}
                />
                <Text style={[MyStyles.text_xxl, { color: colors.pink }]}>
                  {partner.rate}
                </Text>
              </View>
              <Text style={MyStyles.text_sm}>Evaluation</Text>
            </View>
            <View style={{ flexDirection: "row", alignSelf: "center" }}>
              <View style={styles.rate}>
                <Text style={[MyStyles.text_xl, { color: "green" }]}>
                  87.9%
                </Text>
                <Text style={MyStyles.text_sx}>Acceptance rate</Text>
              </View>
              <View style={styles.rate}>
                <Text style={[MyStyles.text_xl, { color: "red" }]}>5.6%</Text>
                <Text style={MyStyles.text_sx}>Cancellation rate</Text>
              </View>
            </View>
          </LinearGradient>
          {/* pending */}

          <View style={{ marginStart: 20, marginTop: 10 }}>
            <Text style={MyStyles.text_xl}>Apointment pending</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              { booking && booking.map((item) => {
                const startDate = new Date(item.startDate)
                const endDate = new Date(item.endDate)
                const date = new Date(item.createdAt)
                const month = date.getMonth()
                const monthName = [
                  "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
                ][month];
                const day = `${monthName} ${date.getDate()}, ${date.getFullYear()}`
                const startTime = `${startDate.getHours()}:${startDate.getMinutes()}`
                const endTime = `${endDate.getHours()}:${endDate.getMinutes()}`
                return (
                  item.status === "INACCEPT" && (
                    <View key={item._id} style={styles.borderPending}>
                      <View style={styles.headerTitle}>
                        <Text style={MyStyles.text_sx}>{day}</Text>
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
                        >
                          <MaterialCommunityIcons
                            style={{
                              backgroundColor: colors.pink_20,
                              padding: 3,
                              borderRadius: 10,
                            }}
                            name="arrow-right"
                            size={10}
                            color="pink"
                          />
                        </TouchableOpacity>
                      </View>
                      <View
                        style={{
                          flexDirection: "row",
                          justifyContent: "space-between",
                        }}
                      >
                        <Image
                          style={styles.imageRetangle}
                          source={{uri: myProfile.img}}
                        />
                        <View style={{width:'55%'}}>
                          <Text
                            style={[MyStyles.text_sm_bold, { color: "black" }]}
                          >
                            {myProfile.name}
                          </Text>
                          <Text
                            style={[MyStyles.text_sx, { color: colors.pink }]}
                          >
                            {startTime} - {endTime}
                          </Text>
                        </View>
                      </View>
                    </View>
                  )
                );
              })}
            </ScrollView>
          </View>

          {/* coming */}
          <View style={{ marginStart: 20, marginTop: 10 }}>
            <Text style={MyStyles.text_xl}>Coming</Text>
            {booking && booking.map((item) => { 
              const startDate = new Date(item.startDate)
              const endDate = new Date(item.endDate)
              const date = new Date(item.createdAt)
              const month = date.getMonth()
              const monthName = [
                "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
              ][month];
              const day = `${monthName} ${date.getDate()}, ${date.getFullYear()}`
              const startTime = `${startDate.getHours()}:${startDate.getMinutes()}`
              const endTime = `${endDate.getHours()}:${endDate.getMinutes()}`

              return ( item.status === 'ACCEPT' && (
              <TouchableOpacity 
                key={item._id} style={styles.borderComing}
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
              >
              <View style={styles.headerTitle}>
                <Text style={[MyStyles.text_md_bold,{color:colors.pink}]}>{day}</Text>
                <Text style={[MyStyles.text_sm, { color: colors.pink }]}>
                  {startTime} - {endTime}
                </Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Image
                  style={styles.imageBig}
                  source={{uri: myProfile.img}}
                />
                <View style={{ alignSelf: "center", width: "70%" }}>
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-between"
                    }}
                  >
                    <Text style={MyStyles.text_md_bold}>{myProfile.name}</Text>
                    <Text
                      style={[
                        MyStyles.text_sm,
                        { color: "blue", fontStyle: "italic"},
                      ]}
                    >
                      +84 {myProfile.phone} {" "} 
                    </Text>
                  </View>
                  <Text style={MyStyles.text_sm}>
                    {item.address}
                  </Text>
                  <TouchableOpacity style={{ alignSelf: "flex-end" }}>
                    <Text style={[styles.btnText, { fontWeight: "500" }]}>
                      View on map
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </TouchableOpacity>))})}
          </View>
        </ScrollView>
        <View
          style={{
            alignSelf: "center",
            position: "absolute",
            flex: 0.2,
            bottom: 20,
            margin: 10,
          }}
        >
          <MaterialCommunityIcons
            style={styles.btnHome}
            name="home-heart"
            size={24}
            color="white"
            onPress={() => useNavigation().dispatch(CommonActions.goBack())}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const mapStateToProps = (state) => ({
  data: state.data,
  loading: state.loading,
  error: state.error,
});

const mapDispatchToProps = {
  getPartnerProfile,
  getListBooking, 
  getProfile,
};

export default connect(mapStateToProps, mapDispatchToProps)(LoverScreen);

const styles = StyleSheet.create({
  image: {
    width: 40,
    height: 40,
    borderRadius: 50,
    alignSelf: "center",
  },
  imageBig: {
    width: 70,
    height: "100%",
    borderRadius: 10,
  },
  imageRetangle: {
    width: 40,
    height: 40,
    borderRadius: 10,
  },
  levelBorder: {
    position: "relative",
    width: "90%",
    height: 130,
    // backgroundColor: 'rgba(255, 159, 159, 0.2)',
    marginEnd: "15%",
    marginTop: "15%",
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
  },
  heartLevel: {
    position: "absolute",
    resizeMode: "stretch",
    end: -50,
    top: -100,
  },
  rate: {
    alignItems: "center",
    marginHorizontal: 10,
  },
  borderPending: {
    padding: 10,
    backgroundColor: "white",
    width: 130,
    marginVertical: 10,
    marginEnd: 10,
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
  borderComing: {
    padding: 10,
    marginEnd: 20,
    backgroundColor: "white",
    // width: '100%',
    marginVertical: 10,
    borderRadius: 10,
    shadowColor: "pink",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: .2,
    shadowRadius: 10,
    elevation: 10,
  },
  headerTitle: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#fafafa",
    paddingBottom: 2,
    marginBottom: 8,
  },
  btnText: {
    backgroundColor: "white",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "pink",
    paddingHorizontal: 20,
    paddingVertical: 5,
  },
  btnHome: {
    padding: 10,
    backgroundColor: colors.pink,
    borderRadius: 50,
    shadowColor: colors.pink,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 10,
    shadowRadius: 10,
    elevation: 10,
  },
});
