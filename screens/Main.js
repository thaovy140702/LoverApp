import { StyleSheet } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WelcomePage from './WelcomePage';
import Map from '../components/Map';
import OnboardingScreen from './Onboarding/OnboardingScreen';
import AgeScreen from './Onboarding/AgeScreen';
import NotificationScreen from './navigation/NotificationScreen';
import ChatListScreen from './navigation/chat/ChatListScreen';
import ChatScreen from './navigation/chat/ChatScreen';
import ProfileScreen from './navigation/setting/ProfileScreen';
import EditProfileScreen from './navigation/setting/EditProfileScreen';
import { useDispatch, useSelector } from 'react-redux';
import ForgotPassEnterCode from './registration/ForgotPassEnterCode';
import ForgotPassEnterPass from './registration/ForgotPassEnterPass';
import LoverScreen from './navigation/firstPage/LoverScreen'
import SignInForm from '../screens/registration/SignInForm'
import SignUpForm from '../screens/registration/SignUpForm'
import ForgotPassword from '../screens/registration/ForgotPassword'
import BottomNavigation from './navigation/MainNavigation'
import HomePartnerScreen from "../screens/navigation/home/HomePartnerScreen";
import ChangePassword from '../screens/registration/ChangePassword'
import SearchScreen from "../screens/navigation/firstPage/SearchScreen";
import UserScheduleScreen from "../screens/navigation/booking/UserScheduleScreen";
import PartnerInfoScreen from "../screens/navigation/booking/PartnerInfoScreen";
import LocationScreen from "../screens/navigation/setting/LocationScreen";
import PaymentScreen from "../screens/navigation/setting/PaymentScreen";
import SettingNotificationScreen from "../screens/navigation/setting/SettingNotificationScreen";
import LanguageScreen from "../screens/navigation/setting/LanguageScreen";
import SuccsessModal from "../components/Alert/SuccsessModal";
import { backIcon, mapIcon, editIcon, notificationIcon } from "../constants/Icon";
import { HeaderLeft, HeaderPartnerLeft } from "../components/Header";


const Main = () => {
    const Stack = createNativeStackNavigator();
    const dispatch = useDispatch()

    const {isAuthenticated, accessToken} = useSelector((state) => state.user)
    console.log(isAuthenticated, accessToken)
  
  return (
<NavigationContainer>
<Stack.Navigator
  screenOptions={{
    headerShown: false,
    statusBarHidden: true,
    navigationBarHidden: true,
  }}
>
  {/* <Stack.Screen
    name="SettingNotificationScreen"
    component={HomePartnerScreen}
    options={{
      headerShown: true,
      title: false,
      headerLeft: HeaderLeft,
      headerRight: notificationIcon,
      headerShadowVisible: false,
    }}
  /> */}
   {/* Navvigation */}
   { isAuthenticated &&
  <Stack.Screen name="Navigation" component={BottomNavigation} />
}
  <Stack.Screen name="Welcome" component={WelcomePage} />
  {/* Register */}
  <Stack.Screen name="Signin" component={SignInForm} />
  <Stack.Screen name="Signup" component={SignUpForm} />
  <Stack.Screen name="Forgotpassword" component={ForgotPassword} />
  <Stack.Screen name="ForgotPassEnterCode" component={ForgotPassEnterCode} />
  <Stack.Screen name="ForgotPassEnterPass" component={ForgotPassEnterPass} />
  <Stack.Screen name="ChangePassword" component={ChangePassword} />
  {/* Onboarding */}
  <Stack.Screen name="Onboarding" component={OnboardingScreen} />
  <Stack.Screen name="Slide1" component={AgeScreen} />

  {/* Home */}
  {/* <Stack.Screen name="Home" component={HomeScreen} /> */}
  <Stack.Screen name="Home" component={HomePartnerScreen} />
  {/* FirstPage */}
  <Stack.Screen name="Search" component={SearchScreen} />
  <Stack.Screen name="FirstPage" component={LoverScreen} />
  {/* Schedule */}
  <Stack.Screen name="Appointment" component={UserScheduleScreen} />
  <Stack.Screen name="Map" component={Map} />
  <Stack.Screen name="PartnerInfoScreen" component={PartnerInfoScreen} />
  <Stack.Screen name="NotificationScreen" component={NotificationScreen}
  />

  {/* chat */}
  <Stack.Screen name="Chat" component={ChatListScreen} />
  <Stack.Screen name="ChatScreen" component={ChatScreen} />
  {/* setting */}
  <Stack.Screen name="Profile" component={ProfileScreen} />
  <Stack.Screen name="EditProfile" component={EditProfileScreen} 
    options={{
      headerShown: true,
      title: "My profile",
      headerTitleAlign: "center",
      headerLeft: backIcon,
      headerShadowVisible: false,
      headerRight: editIcon
    }}/>
  <Stack.Screen name="SettingLocation" component={LocationScreen} 
    options={{
      headerShown: true,
      title: "Location",
      headerTitleAlign: "center",
      headerLeft: backIcon,
      headerShadowVisible: false,
      headerRight: mapIcon
    }}/>
  <Stack.Screen
    name="SettingPayment"
    component={PaymentScreen}
    options={{
      headerShown: true,
      title: "My Wallet",
      headerTitleAlign: "center",
      headerLeft: backIcon,
      headerShadowVisible: false,
    }}
  />
  <Stack.Screen
    name="SettingNotification"
    component={SettingNotificationScreen}
    options={{
      headerShown: true,
      title: 'Notification',
      // headerTitleStyle:{fontFamily: 'bold'},
      headerTitleAlign: 'center',
      headerLeft: backIcon,
      headerShadowVisible: false
    }}
  />
  <Stack.Screen name="SettingLanguage" component={LanguageScreen} 
    options={{
      headerShown: true,
      title: 'Language',
      headerTitleAlign: 'center',
      headerLeft: backIcon,
      headerShadowVisible: false
    }}
  />
  <Stack.Group screenOptions={{presentation: 'modal'}}>
    <Stack.Screen name="Success" component={SuccsessModal} />
  </Stack.Group>
</Stack.Navigator>
</NavigationContainer>
  )
}

export default Main

const styles = StyleSheet.create({})