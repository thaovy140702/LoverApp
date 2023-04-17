import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useFonts } from "expo-font";
import { backIcon, mapIcon, editIcon, notificationIcon } from "./constants/Icon";
import WelcomePage from "./screens/WelcomePage";
import SignInForm from "./screens/registration/SignInForm";
import SignUpForm from "./screens/registration/SignUpForm";
import ForgotPassword from "./screens/registration/ForgotPassword";
import ChangePassword from "./screens/registration/ChangePassword";
import HomeScreen from "./screens/navigation/home/HomeScreen";
import AgeScreen from "./screens/Onboarding/AgeScreen";
import BottomNavigation from "./screens/navigation/MainNavigation";
import UserScheduleScreen from "./screens/navigation/booking/UserScheduleScreen";
import SearchScreen from "./screens/navigation/firstPage/SearchScreen";
import ChatListScreen from "./screens/navigation/chat/ChatListScreen";
import ProfileScreen from "./screens/navigation/setting/ProfileScreen";
import OnboardingScreen from "./screens/Onboarding/OnboardingScreen";
import EditProfileScreen from "./screens/navigation/setting/EditProfileScreen";
import ChatScreen from "./screens/navigation/chat/ChatScreen";
import NotificationScreen from "./screens/navigation/NotificationScreen";
import PartnerInfoScreen from "./screens/navigation/booking/PartnerInfoScreen";
import LocationScreen from "./screens/navigation/setting/LocationScreen";
import PaymentScreen from "./screens/navigation/setting/PaymentScreen";
import SettingNotificationScreen from "./screens/navigation/setting/SettingNotificationScreen";
import LanguageScreen from "./screens/navigation/setting/LanguageScreen";
import LocationMapSetting from "./screens/navigation/modal/LocationMapSetting";
import HomePartnerScreen from "./screens/navigation/home/HomePartnerScreen";
import SuccsessModal from "./components/Alert/SuccsessModal";
import LoverScreen from "./screens/navigation/firstPage/LoverScreen";
import { HeaderLeft, HeaderPartnerLeft } from "./components/Header";
// import LoadingScreen from './screens/LoadingScreen';

export default function App() {
  const Stack = createNativeStackNavigator();

  const [fontsLoaded] = useFonts({
    regularIrishGrover: require("./assets/fonts/IrishGrover-Regular.ttf"),
    black: require("./assets/fonts/Poppins-Black.ttf"),
    bold: require("./assets/fonts/Poppins-Bold.ttf"),
    light: require("./assets/fonts/Poppins-Light.ttf"),
    medium: require("./assets/fonts/Poppins-Medium.ttf"),
    regular: require("./assets/fonts/Poppins-Regular.ttf"),
    semiBold: require("./assets/fonts/Poppins-SemiBold.ttf"),
    thin: require("./assets/fonts/Poppins-Thin.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

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
        {/* <Stack.Screen name="PartnerInfo" component={PartnerInfoScreen} /> */}
        <Stack.Screen name="Welcome" component={WelcomePage} />
        {/* Register */}
        <Stack.Screen name="Signin" component={SignInForm} />
        <Stack.Screen name="Signup" component={SignUpForm} />
        <Stack.Screen name="Forgotpassword" component={ForgotPassword} />
        <Stack.Screen name="ChangePassword" component={ChangePassword} />
        {/* Onboarding */}
        <Stack.Screen name="Onboarding" component={OnboardingScreen} />
        <Stack.Screen name="Slide1" component={AgeScreen} />
        {/* Navvigation */}
        <Stack.Screen name="Navigation" component={BottomNavigation} />
        <Stack.Screen
          name="NotificationScreen"
          component={NotificationScreen}
        />
        {/* Home */}
        {/* <Stack.Screen name="Home" component={HomeScreen} /> */}
        <Stack.Screen name="Home" component={HomePartnerScreen} />
        {/* FirstPage */}
        <Stack.Screen name="Search" component={SearchScreen} />
        <Stack.Screen name="FirstPage" component={LoverScreen} />
        {/* Schedule */}
        <Stack.Screen name="Appointment" component={UserScheduleScreen} />
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
  );
}
