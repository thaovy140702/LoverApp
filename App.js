import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useFonts } from 'expo-font';
import WelcomePage from './screens/WelcomePage';
import SignInForm from './screens/SignInForm';
import SignUpForm from './screens/SignUpForm';
import ForgotPassword from './screens/ForgotPassword';
import ChangePassword from './screens/ChangePassword';
import HomeScreen from './screens/navigation/HomeScreen';
import AgeScreen from './screens/Onboarding/AgeScreen';
import AnimTab1 from './screens/navigation/MainNavigation';
import UserScheduleScreen from './screens/navigation/UserScheduleScreen';
import SearchScreen from './screens/navigation/SearchScreen';
import ChatListScreen from './screens/navigation/chat/ChatListScreen';
import ProfileScreen from './screens/navigation/setting/ProfileScreen';
import OnboardingScreen from './screens/Onboarding/OnboardingScreen';
import EditProfileScreen from './screens/navigation/setting/EditProfileScreen';
import ChatScreen from './screens/navigation/chat/ChatScreen';
import NotificationScreen from './screens/navigation/NotificationScreen';
import PartnerInfoScreen from './screens/navigation/PartnerInfoScreen';
import Map from './components/Map';
// import LoadingScreen from './screens/LoadingScreen';


export default function App() {

  const Stack = createNativeStackNavigator();

  const [fontsLoaded] = useFonts({
    'regularIrishGrover': require('./assets/fonts/IrishGrover-Regular.ttf'),
    'black': require('./assets/fonts/Poppins-Black.ttf'),
    'bold': require('./assets/fonts/Poppins-Bold.ttf'),
    'light': require('./assets/fonts/Poppins-Light.ttf'),
    'medium': require('./assets/fonts/Poppins-Medium.ttf'),
    'regular': require('./assets/fonts/Poppins-Regular.ttf'),
    'semiBold': require('./assets/fonts/Poppins-SemiBold.ttf'),
    'thin': require('./assets/fonts/Poppins-Thin.ttf')
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false, statusBarHidden: true, navigationBarHidden: true}}>
          
        {/* <Stack.Screen name="EditProfile" component={EditProfileScreen} /> */}
        <Stack.Screen name="Navigation" component={AnimTab1} />
          <Stack.Screen name="PartnerInfo" component={PartnerInfoScreen} />
          <Stack.Screen name="Map" component={Map} />
          {/* <Stack.Screen name="Navigation" component={AnimTab1} /> */}
          <Stack.Screen name="PartnerInfoScreen" component={PartnerInfoScreen} />
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
          {/* <Stack.Screen name="Navigation" component={AnimTab1} /> */}
          <Stack.Screen name="NotificationScreen" component={NotificationScreen} />
            {/* home */}
          <Stack.Screen name="Home" component={HomeScreen} />
            {/* Search */}
          <Stack.Screen name="Search" component={SearchScreen} />
            {/* Schedule */}
          <Stack.Screen name="Appointment" component={UserScheduleScreen} />
            {/* chat */}
          <Stack.Screen name="Chat" component={ChatListScreen} />
          <Stack.Screen name="ChatScreen" component={ChatScreen} />
            {/* setting */}
          <Stack.Screen name="Profile" component={ProfileScreen} />
          <Stack.Screen name="EditProfile" component={EditProfileScreen} />
        </Stack.Navigator>
    </NavigationContainer>
  );
}

