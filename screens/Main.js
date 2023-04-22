import { StyleSheet } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignInForm from './SignInForm';
import AnimTab1 from './navigation/MainNavigation';
import WelcomePage from './WelcomePage';
import PartnerInfoScreen from './navigation/PartnerInfoScreen';
import Map from '../components/Map';
import SignUpForm from './SignUpForm';
import ForgotPassword from './ForgotPassword';
import ChangePassword from './ChangePassword';
import OnboardingScreen from './Onboarding/OnboardingScreen';
import AgeScreen from './Onboarding/AgeScreen';
import NotificationScreen from './navigation/NotificationScreen';
import HomeScreen from './navigation/HomeScreen';
import SearchScreen from './navigation/SearchScreen';
import UserScheduleScreen from './navigation/UserScheduleScreen';
import ScheduleDescription from './navigation/ScheduleDescription';
import ChatListScreen from './navigation/chat/ChatListScreen';
import ChatScreen from './navigation/chat/ChatScreen';
import ProfileScreen from './navigation/setting/ProfileScreen';
import EditProfileScreen from './navigation/setting/EditProfileScreen';
import { useDispatch, useSelector } from 'react-redux';
import ForgotPassEnterCode from './ForgotPassEnterCode';
import ForgotPassEnterPass from './ForgotPassEnterPass';


const Main = () => {
    const Stack = createNativeStackNavigator();
    const dispatch = useDispatch()

    const {isAuthenticated, accessToken} = useSelector((state) => state.user)
    console.log(isAuthenticated, accessToken)
  
  return (
    <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false, statusBarHidden: true, navigationBarHidden: true}}>
        {/* <Stack.Screen name="Test" component={Test} /> */}
        {
          isAuthenticated && <Stack.Screen name="Navigation" component={AnimTab1} />
        }
        <Stack.Screen name="Signin" component={SignInForm} />

          {/* <Stack.Screen name="Navigation" component={AnimTab1} /> */}
          <Stack.Screen name="Welcome" component={WelcomePage} />
          <Stack.Screen name="PartnerInfo" component={PartnerInfoScreen} />
          <Stack.Screen name="Map" component={Map} />
          <Stack.Screen name="PartnerInfoScreen" component={PartnerInfoScreen} />
            {/* Register */}
          {/* <Stack.Screen name="Signin" component={SignInForm} /> */}
          <Stack.Screen name="Signup" component={SignUpForm} />
          <Stack.Screen name="Forgotpassword" component={ForgotPassword} />
          <Stack.Screen name="ForgotPassEnterCode" component={ForgotPassEnterCode} />
          <Stack.Screen name="ForgotPassEnterPass" component={ForgotPassEnterPass} />
          <Stack.Screen name="ChangePassword" component={ChangePassword} />
            {/* Onboarding */}
          <Stack.Screen name="Onboarding" component={OnboardingScreen} />
          <Stack.Screen name="Slide1" component={AgeScreen} />
            {/* Navvigation */}
          <Stack.Screen name="NotificationScreen" component={NotificationScreen} />
            {/* home */}
          <Stack.Screen name="Home" component={HomeScreen} />
            {/* Search */}
          <Stack.Screen name="Search" component={SearchScreen} />
            {/* Schedule */}
          <Stack.Screen name="Appointment" component={UserScheduleScreen} />
          <Stack.Screen name="ScheduleDescription" component={ScheduleDescription} />
            {/* chat */}
          <Stack.Screen name="Chat" component={ChatListScreen} />
          <Stack.Screen name="ChatScreen" component={ChatScreen} />
            {/* setting */}
          <Stack.Screen name="Profile" component={ProfileScreen} />
          <Stack.Screen name="EditProfile" component={EditProfileScreen} />
        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Main

const styles = StyleSheet.create({})