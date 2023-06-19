import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import MyStyles from "../../../constants/MyStyles";
import {
  FontAwesome,
  AntDesign,
  MaterialIcons,
  Entypo,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import colors from "../../../constants/colors";
import BigButton from "../../../components/button/BigButton";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../../utils/actions/logoutAction";
import { useEffect } from "react";
import { getProfile } from "../../../utils/actions/otherActions";
import { getPartnerProfile } from "../../../utils/actions/partnerAction";
import { useState } from "react";

const { width, height } = Dimensions.get("window");

const profile = [
  {
    idAcc: 1,
    iconAcc: <FontAwesome name="user" size={24} color={colors.grey} />,
    account: "Edit Profile",
    page: "EditProfile",
  },
  {
    idAcc: 2,
    iconAcc: <AntDesign name="key" size={24} color={colors.grey} />,
    account: "Change password",
    page: "ChangePassword",
  },
];

const setting = [
  {
    idSetting:3,
    iconSetting: <MaterialIcons name="location-pin" size={24} color={colors.grey} />,
    setting: 'Location',
    page: 'SettingLocation'
  },
  {
    idSetting: 4,
    iconSetting: <Entypo name="wallet" size={24} color={colors.grey} />,
    setting: 'Payment',
    page: 'SettingPayment'
  },
  {
    idSetting:5,
    iconSetting: <MaterialCommunityIcons name="bell-ring" size={24} color={colors.grey} />,
    setting: 'Notification',
    page: 'NotificationScreen'
  },
  {
    idSetting:6,
    iconSetting: <MaterialCommunityIcons name="translate" size={24} color={colors.grey} />,
    setting: 'Language',
    page: 'SettingLanguage'
  },
];

const ProfileScreen = () => {
  const dispatch = useDispatch()
  const navigation = useNavigation();

  const {id, email} = useSelector((state) => state.user);
  const { role, myProfile } = useSelector((state) => state.other);
  const { partner } = useSelector((state) => state.partner);
  React.useEffect(() => {
    dispatch(getProfile(id))
    dispatch(getPartnerProfile(id))
  }, [dispatch])

  
  const submitHandler = () => {
    dispatch(logout())
  }

  // const [userProfile, setUserProfile] = useState()
  // if(role === 'user'){
  //   const roleUser = myProfile
  // } else if(role === 'partner') {
  //   const rolePartner = partner
  // }
  const userProfile = role === 'user' ? myProfile : partner || role === 'parter' ? partner : myProfile
  // console.log(userProfile)

  return (
    <SafeAreaView style={{width, height, backgroundColor:'white'}}>
      <View style={{flex:1}}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          scrollEventThrottle={16}
          style={{ paddingHorizontal: 20 }}
        >
          <View style={{ marginTop: "8%", alignItems: "center" }}>
            <Image
              style={styles.userImage}
              source={{ uri: userProfile.img }}
            />
            <Text style={[MyStyles.text_xl, { marginTop: 3 }]}>{userProfile.name}</Text>
            <Text style={MyStyles.text_sm}>{email}</Text>
          </View>

          <View>
            <Text style={[MyStyles.text_sm_grey,{marginTop:'5%'}]}>ACCOUNT</Text>
            {
              profile.map((item) => {
                return(
                  <TouchableOpacity key={item.idAcc} onPress={() => navigation.navigate(item.page)} style={styles.setting}>
                    <Text style={MyStyles.text_md}>{item.account}</Text>
                    <View>{item.iconAcc}</View>
                  </TouchableOpacity>
                )
              })
            }
          </View>

          <View>
            <Text style={[MyStyles.text_sm_grey, { marginTop: "5%" }]}>
              SETTING
            </Text>
            {setting.map((item) => {
              return (
                <TouchableOpacity key={item.idSetting} style={styles.setting} onPress={() => navigation.navigate(item.page)}>
                  <Text style={MyStyles.text_md}>{item.setting}</Text>
                  <View>{item.iconSetting}</View>
                </TouchableOpacity>
              );
            })}
          </View>

          <BigButton
            style={{ marginTop: "5%", width: "100%" }}
            text="Log out"
            onPress={() => {
              // submitHandler()
              AsyncStorage.clear()
              navigation.navigate("Signin");
            }}
          />

          <View style={{ margin: "20%" }} />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  userImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  setting: {
    flexDirection: "row",
    backgroundColor: "white",
    marginVertical: 10,
    justifyContent: "space-between",
    alignItems: "center",
    padding: 15,
    borderRadius: 10,
    shadowColor: 'rgba(0, 0, 0, 0.25)',
    shadowOffset: {
      width: 0,
      height:4
    },
    shadowRadius: 50,
    elevation:6
  }
})
