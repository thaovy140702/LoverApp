import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useFonts } from 'expo-font';
import WelcomePage from './screens/WelcomePage';
import SignInForm from './screens/SignInForm';
import SignUpForm from './screens/SignUpForm';
import HomeScreen from './screens/navigation/HomeScreen';
import ForgotPassword from './screens/ForgotPassword';
import CompleteForgotPass from './screens/CompleteForgotPass';
import AnimTab1 from './screens/navigation/MainNavigation';
import UserScheduleScreen from './screens/navigation/UserScheduleScreen';
import SearchScreen from './screens/navigation/SearchScreen';
import ChatScreen from './screens/navigation/ChatScreen';
import ProfileScreen from './screens/navigation/ProfileScreen';


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
        <Stack.Navigator>
          <Stack.Screen name="Navigation" component={AnimTab1} />
          <Stack.Screen name="Welcome" component={WelcomePage} />
          <Stack.Screen name="Signin" component={SignInForm} />
          <Stack.Screen name="Signup" component={SignUpForm} />
          <Stack.Screen name="Forgotpassword" component={ForgotPassword} />
          <Stack.Screen name="CompleteFotgotPass" component={CompleteForgotPass} />
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Appointment" component={UserScheduleScreen} />
          <Stack.Screen name="Search" component={SearchScreen} />
          <Stack.Screen name="Chat" component={ChatScreen} />
          <Stack.Screen name="Profile" component={ProfileScreen} />
        </Stack.Navigator>
    </NavigationContainer>
  );
}

