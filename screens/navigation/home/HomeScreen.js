import {
  View,
  Text,
  Dimensions,
  ScrollView,
  Image,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Animated,
} from "react-native";
import React, { useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import usersData from ".././data/usersData";
import newsData from ".././data/newsData";
import {
  SimpleLineIcons,
  MaterialCommunityIcons,
  Feather
} from "@expo/vector-icons";
import colors from "../../../constants/colors";
import MyStyles from "../../../constants/MyStyles";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { getAllPartners, selectPartnerDetail } from "../../../utils/actions/partnerAction";
import { getSlide, getProfile } from "../../../utils/actions/otherActions";

const { width, height } = Dimensions.get("window");


const HomeScreen = () => {
  const scrollXIndex = React.useRef(new Animated.Value(0)).current
  const scrollXAnimated = React.useRef(new Animated.Value(0)).current

  React.useEffect(() => {
    Animated.spring(scrollXAnimated, {
      toValue: scrollXIndex,
      useNativeDriver: true
    }).start()

    setInterval(()=> {
      scrollXIndex.setValue(Math.floor(Math.random() * slide.length))  
    },20000)
  })

  const navigation = useNavigation();
  const dispatch = useDispatch();

  const {id} = useSelector((state) => state.user);
  const {partners, error} = useSelector(state=>state.partner)
  const { slide, myProfile } = useSelector((state) => state.other);
  // console.log(slide);

  useEffect(() => {
    dispatch(getAllPartners());
    dispatch(getSlide());
    dispatch(getProfile(id));
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
              alignItems:'center'
            }}
          >
            <View style={{ flexDirection: "row", alignItems:'center' }}>
              <Image
                source={{uri: myProfile.img}}
                style={styles.image}
              />
              <View
                style={{
                  flexDirection: "column",
                  justifyContent: "flex-start",
                  marginStart: "8%",
                }}
              >
                <Text style={[MyStyles.text_md, {color:'lightgray', fontSize: 18, marginBottom: -5}]}>Welcome</Text>
                <Text style={[MyStyles.text_md_bold, { marginStart: "5%" }]}>
                  {myProfile.name}
                </Text>
              </View>
            </View>
            <TouchableOpacity style={{padding:8, backgroundColor:'white', borderRadius: 10, shadowColor: colors.pink, elevation: 3}}>
              <Feather name="search" size={18} color="black" />
            </TouchableOpacity>
          </View>

          <Animated.FlatList
            style={{height: 170, marginTop: 20}}
            horizontal
            inverted
            data={slide}
            contentContainerStyle={{
              flex:1,
              justifyContent:'center'
              // backgroundColor:'red'
            }}
            keyExtractor={(item) => item._id}
            // pagingEnabled={true}
            scrollEnabled={false}
            removeClippedSubviews={false}
            showsHorizontalScrollIndicator={false}
            CellRendererComponent={({item, index, children, style, ...props}) => {
              const newStyles = [
                style,
                { zIndex: slide.length - index}
              ]
              return (
                <View style={newStyles} index={index} {...props}>
                  {children}
                </View>
              )
            }}
            renderItem={({ item, index }) => {

              const inputRange = [index-1, index, index+1]
              const translateX = scrollXAnimated.interpolate({
                inputRange,
                outputRange:[50,0,-100]
              })
              const scale = scrollXAnimated.interpolate({
                inputRange,
                outputRange:[.8, 1, 1.3]
              })
              const opacity = scrollXAnimated.interpolate({
                inputRange,
                outputRange:[1-1/3,1,0]
              })

              return (
                <Animated.View style={{position: 'absolute', left: -280/2, transform:[{translateX}, {scale}], opacity}}>
                  <View style={[styles.boderImage]}>
                    <Image source={{ uri: item.img }} style={styles.imageNew} />
                  </View>
                </Animated.View>
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
              data={partners}
              keyExtractor={(item) => item._id}
              showsHorizontalScrollIndicator={false}
              renderItem={({ item }) => {
                return (
                  <TouchableOpacity style={{ marginEnd: 15 }}>
                    <View
                      style={{ flexDirection: "column", alignItems: "center" }}
                    >
                      <Image style={styles.imageRetangle} source={{uri: item.img}} />
                      <View>
                        <Text style={[MyStyles.text_md_bold, { marginTop: 5 }]}>
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
              {partners.map((item) => {
                // console.log(item)
                return (
                  <TouchableOpacity
                    key={item._id}
                    style={[styles.borderRetangle, { marginBottom: "5%" , backgroundColor:'white'}]}
                    onPress={() =>{
                      // dispatch(selectPartnerDetail(item.user))
                      navigation.navigate("PartnerInfoScreen",
                      {
                        partnerId: item._id,
                        urlImg: item.img,
                        partnerName: item.name,
                        address: item.address,
                        price: item.rent_cost,
                        partnerHeigth: item.height,
                        partnerWeigth: item.weight,
                        sex: item.gender,
                        age: item.old,
                        rate: item.rate,
                        character: item.character,
                        appearance: item.appearance,
                        description: item.description
                      }
                      )
                    }}
                  >
                    {/* <View style={styles.borderRetangle}> */}
                      <Image
                        style={[styles.imageCircle, { marginEnd: "5%" }]}
                        source={{uri: item.img}}
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
                            $ {item.rent_cost} per hour
                          </Text>
                          <View style={styles.button}>
                            <Text style={MyStyles.text_sm_bold}>
                              appointment
                            </Text>
                          </View>
                        </View>
                      </View>
                    {/* </View> */}
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
    width: 300,
    // backgroundColor:'red',
    height: 160,
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
    width: 300,
    height: 160,
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
