import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useFonts } from 'expo-font';
import WelcomePage from './screens/WelcomePage';
import SignInForm from './screens/SignInForm';
import SignUpForm from './screens/SignUpForm';
import ForgotPassword from './screens/ForgotPassword';
import CompleteForgotPass from './screens/CompleteForgotPass';
import HomeScreen from './screens/navigation/HomeScreen';
import AgeScreen from './screens/Onboarding/AgeScreen';
import GenresScreen from './screens/Onboarding/GenresScreen';
import AppearanceScreen from './screens/Onboarding/AppearanceScreen';
import CharacterScreen from './screens/Onboarding/CharacterScreen';
import AnimTab1 from './screens/navigation/MainNavigation';
import UserScheduleScreen from './screens/navigation/UserScheduleScreen';
import SearchScreen from './screens/navigation/SearchScreen';
import ChatListScreen from './screens/navigation/ChatListScreen';
import ProfileScreen from './screens/navigation/ProfileScreen';
import ChatScreen from './screens/navigation/ChatScreen';
import NotificationScreen from './screens/navigation/NotificationScreen';
import PartnerInfoScreen from './screens/navigation/PartnerInfoScreen';
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
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          {/* <Stack.Screen name="Age" component={ChooseAge} /> */}
          <Stack.Screen name="Navigation" component={AnimTab1} />
          <Stack.Screen name="PartnerInfo" component={PartnerInfoScreen} />
          {/* <Stack.Screen name="Navigation" component={AnimTab1} /> */}
          <Stack.Screen name="Welcome" component={WelcomePage} />
          <Stack.Screen name="Search" component={SearchScreen} />
          <Stack.Screen name="Slide2" component={GenresScreen} />
          <Stack.Screen name="Slide3" component={AppearanceScreen} />
          <Stack.Screen name="Slide4" component={CharacterScreen} />
          
          <Stack.Screen name="Signin" component={SignInForm} />
          <Stack.Screen name="Signup" component={SignUpForm} />
          <Stack.Screen name="Forgotpassword" component={ForgotPassword} />
          <Stack.Screen name="CompleteFotgotPass" component={CompleteForgotPass} />
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Appointment" component={UserScheduleScreen} />
          <Stack.Screen name="Chat" component={ChatListScreen} />
          <Stack.Screen name="Profile" component={ProfileScreen} />
          <Stack.Screen name="ChatScreen" component={ChatScreen} />
          <Stack.Screen name="NotificationScreen" component={NotificationScreen} />
        </Stack.Navigator>
    </NavigationContainer>
  );
}

