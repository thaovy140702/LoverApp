import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Image,
  TouchableOpacity,
  Dimensions,
  FlatList,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import MyStyles from "../../../constants/MyStyles";
import {
  FontAwesome,
  MaterialCommunityIcons,
  Entypo,
} from "@expo/vector-icons";
import colors from "../../../constants/colors";
import { LinearGradient } from "expo-linear-gradient";
import { analisticData } from "../data/data";
import newsData from "../data/newsData";
import { connect, useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getPartnerProfile } from "../../../utils/actions/partnerAction";

const { width, height } = Dimensions.get("window");

const HomePartnerScreen = ({data, loading, error, getPartnerProfile}) => {

  
  const dispatch = useDispatch()

  const {id} = useSelector((state) => state.user);
  const { partner } = useSelector((state) => state.partner);
  
  // useEffect(() => {
  //   dispatch(getPartnerProfile(id))
  // }, [dispatch])

  useEffect(() => {
    getPartnerProfile(id)
  }, []);
  
  console.log(partner)

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
          style={{ backgroundColor: "rgba(255,255,255,50)" }}
        >
          {/* top  */}
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: "8%",
              marginHorizontal: 20,
              alignItems:'center'
            }}
          >
            <View style={{ flexDirection: "row" , alignItems:'center'}}>
              <Image
                source={{uri: partner.img}}
                style={styles.image}
              />
              <View
                style={{
                  flexDirection: "column",
                  justifyContent: "flex-start",
                  marginStart: 10,
                }}
              >
                <Text style={[MyStyles.text_md, {color:'lightgray', fontSize: 18, marginBottom: -5}]}>Welcome</Text>
                <Text style={MyStyles.text_md_bold}>
                  {partner.name}
                </Text>
              </View>
            </View>
{/* 
            <TouchableOpacity>
              <MaterialCommunityIcons
                name="bell-outline"
                size={24}
                color="black"
              />
            </TouchableOpacity> */}
          </View>

           {/* level */}
           <LinearGradient
            style={styles.levelBorder}
            colors={["rgba(255, 159, 159, 0.2)", "rgba(255, 159, 159, 0.06)"]}
            end={{ x: 0.9, y: 0.5 }}
          >
            <Image
              style={styles.heartLevel}
              source={require("../../../assets/images/Heart.png")}
            />
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                top: 10,
                start: 20,
              }}
            >
              <FontAwesome name="heart" size={16} color={colors.lightPink} />
              <Text
                style={[
                  MyStyles.text_md_bold,
                  { color: colors.pink, marginStart: 10 },
                ]}
              >
                Silver Member
              </Text>
            </View>
            <Text style={[MyStyles.text_sx,{color: colors.pink, marginStart: 20, marginTop: 10}]}>Enjoy interest up to 0.6% / month</Text>
            <View
              style={{
                position: "absolute",
                bottom: 10,
                start: 20,
                width: "90%",
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Text style={[MyStyles.text_sx, { color: colors.pink }]}>
                  It takes 549 more to get away from Gold{" "}
                </Text>
                <Text style={[MyStyles.text_sx, { color: colors.pink }]}>
                  451 points
                </Text>
              </View>
              {/* <ProgressBar progressData="70%" /> */}
              <View
                style={{
                  width: "100%",
                  backgroundColor: colors.lightPink,
                  marginTop: 3,
                  borderRadius: 5,
                }}
              >
                <LinearGradient style={{
                      width: "60%",
                      height: 3,
                      margin: 2,
                      borderRadius: 5
                    }} colors={["rgba(255,255,255,0)", "white"]} start={[0.1, 0.3]} />
              </View>
            </View>
          </LinearGradient>

          
          <TouchableOpacity style={styles.border}>
            <Text style={MyStyles.text_xl}>My love</Text>
            <View style={{flexDirection:'row', justifyContent:'space-between', marginTop:10}}>
              {analisticData.map((item) => {
                // console.log(item.id===1)
                if(item.id===1){
                  // item.num = partner.rank_level.accumulated
                  // console.log(partner.rank_level.accumulated)
                }
                return(
                  <View key={item.id} style={{alignItems:'center'}}>
                    <Text style={[MyStyles.text_xl,{color: item.color}]}>{item.num}</Text>
                    <Text style={[MyStyles.text_sm]}>{item.tag}</Text>
                  </View>
                )
              })}
            </View>
          </TouchableOpacity>

          {/* More interested */}
          <View style={{marginStart: 20, marginTop:20}}>
            <Text style={MyStyles.text_xl}>More interested</Text>
            <View>
                {newsData.map((item) => {
                  return(
                    <TouchableOpacity key={item.id} style={{width: '95%', height: 150, borderRadius: 10, backgroundColor:'pink', padding: 5, marginBottom: 15}}>
                      <Image style={{resizeMode:'contain', width:'100%', height:'100%', borderRadius: 10}} source={item.imageUrl} />
                    </TouchableOpacity>
                  )
                })}
            </View>
          </View>
        </ScrollView>
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
  getPartnerProfile
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePartnerScreen);

const styles = StyleSheet.create({
  image: {
    width: 40,
    height: 40,
    borderRadius: 50,
  },
  levelBorder: {
    position: "relative",
    width: "90%",
    height: 130,
    // backgroundColor: 'rgba(255, 159, 159, 0.2)',
    marginEnd: "15%",
    marginTop: '13%',
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
  },
  heartLevel: {
    position: "absolute",
    resizeMode: "stretch",
    end: -50,
    top: -100,
  },
  border:{
    padding: 20,
    backgroundColor: 'white',
    marginTop: 20,
    marginHorizontal: 10,
    borderRadius: 10,
    shadowColor:'pink',
    shadowOffset:{
      width: 0,
      height: 3
    },
    shadowRadius: 10,
    elevation: 10
  }
});