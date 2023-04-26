import {
  View,
  Text,
  Dimensions,
  ScrollView,
  Image,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import React, { useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import usersData from ".././data/usersData";
import newsData from ".././data/newsData";
import {
  SimpleLineIcons,
  MaterialCommunityIcons,
  Entypo,
} from "@expo/vector-icons";
import colors from "../../../constants/colors";
import MyStyles from "../../../constants/MyStyles";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { getAllPartners } from "../../../utils/actions/partnerAction";
import { getSlide } from "../../../utils/actions/otherActions";

const { width, height } = Dimensions.get("window");

const HomeScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  // const {partners, error} = useSelector(state=>state.partner)
  const { slide } = useSelector((state) => state.other);
  console.log(slide);

  useEffect(() => {
    dispatch(getAllPartners());
    dispatch(getSlide());
  }, [dispatch]);

  return (
    <SafeAreaView style={{ width, height, backgroundColor: "white" }}>
      <View style={{ flex: 1 }}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          scrollEventThrottle={16}
          style={{ paddingStart: 20, backgroundColor: "rgba(255,255,255,50)" }}
        >
          {/* top  */}
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: "8%",
              marginEnd: 20,
            }}
          >
            <View style={{ flexDirection: "row" }}>
              <Image
                source={require("../../../assets/images/userimage.jpg")}
                style={styles.image}
              />
              <View
                style={{
                  flexDirection: "column",
                  justifyContent: "flex-start",
                  marginStart: "8%",
                }}
              >
                <Text style={[MyStyles.text_md_bold, { marginStart: "5%" }]}>
                  Anna
                </Text>
                <TouchableOpacity
                  style={{ flexDirection: "row", alignItems: "center" }}
                >
                  <Entypo
                    name="dot-single"
                    style={{ margin: "-10%" }}
                    size={24}
                    color="green"
                  />
                  <Text style={MyStyles.text_sm_grey}>Active</Text>
                </TouchableOpacity>
              </View>
            </View>
            <TouchableOpacity
              onPress={() => navigation.navigate("NotificationScreen")}
            >
              <MaterialCommunityIcons
                name="bell-outline"
                size={24}
                color="black"
              />
            </TouchableOpacity>
          </View>

          <FlatList
            style={{ marginTop: 10 }}
            horizontal
            inverted
            data={slide}
            keyExtractor={(item) => item._id}
            // pagingEnabled={true}
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => {
              return (
                <View>
                  <View style={[styles.boderImage]}>
                    <Image source={{ uri: item.img }} style={styles.imageNew} />
                  </View>
                </View>
              );
            }}
          />

          <View>
            <Text style={[MyStyles.text_xl, { marginTop: "5%" }]}>
              Top partner
            </Text>
            <FlatList
              style={{ marginTop: 20 }}
              horizontal
              data={usersData}
              keyExtractor={(item) => item.id}
              showsHorizontalScrollIndicator={false}
              renderItem={({ item }) => {
                return (
                  <TouchableOpacity style={{ marginEnd: 15 }}>
                    <View
                      style={{ flexDirection: "column", alignItems: "center" }}
                    >
                      <Image style={styles.imageRetangle} source={item.image} />
                      <View>
                        <Text style={[MyStyles.text_md_bold, { marginTop: 5 }]}>
                          {" "}
                          {item.name}{" "}
                        </Text>
                      </View>
                    </View>
                  </TouchableOpacity>
                );
              }}
            />
          </View>

          <View>
            <Text style={[MyStyles.text_xl, { marginTop: "5%" }]}>Near by</Text>
            <View style={{ marginTop: 20, marginEnd: 20 }}>
              {usersData.map((item) => {
                return (
                  <TouchableOpacity
                    key={item.id}
                    style={{ marginBottom: "5%" }}
                  >
                    <View style={styles.borderRetangle}>
                      <Image
                        style={[styles.imageCircle, { marginEnd: "5%" }]}
                        source={item.image}
                      />
                      <View style={{ justifyContent: "center" }}>
                        <Text style={MyStyles.text_md_bold}> {item.name} </Text>
                        <View style={{ flexDirection: "row" }}>
                          <SimpleLineIcons
                            name="location-pin"
                            size={15}
                            color={colors.grey}
                          />
                          <Text style={MyStyles.text_sm_grey} numberOfLines={1}>
                            {" "}
                            {item.address}
                          </Text>
                        </View>
                        <View style={{ flexDirection: "row" }}>
                          <Text style={MyStyles.text_sm}>
                            {" "}
                            $ {item.paymment} per hour
                          </Text>
                          <TouchableOpacity
                            style={styles.button}
                            onPress={() =>
                              navigation.navigate("PartnerInfoScreen")
                            }
                          >
                            <Text style={MyStyles.text_sm_bold}>
                              appointment
                            </Text>
                          </TouchableOpacity>
                        </View>
                      </View>
                    </View>
                  </TouchableOpacity>
                );
              })}
            </View>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  image: {
    width: 40,
    height: 40,
    borderRadius: 50,
  },
  imageRetangle: {
    width: 60,
    height: 60,
    borderRadius: 10,
  },
  imageCircle: {
    width: 70,
    height: 70,
    borderRadius: 50,
  },
  boderImage: {
    width: 265,
    height: 155,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(255, 255, 255, 0.3)",
    // margin: 5
  },
  borderRetangle: {
    width: "100%",
    height: 80,
    flexDirection: "row",
    marginHorizontal: 3,
    padding: 10,
    alignItems: "center",
    backgroundColor: "white",
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 50,
    elevation: 10,
    borderRadius: 20,
  },
  imageNew: {
    width: 260,
    height: 150,
    borderRadius: 10,
  },
  button: {
    width: 100,
    height: 19,
    borderRadius: 20,
    backgroundColor: colors.lightPink,
    alignItems: "center",
    marginStart: "10%",
  },
});
