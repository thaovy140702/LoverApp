import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useFonts } from 'expo-font';
import WelcomePage from './screens/WelcomePage';
import SignInForm from './screens/SignInForm';
import SignUpForm from './screens/SignUpForm';
import HomeScreen from './screens/navigation/HomeScreen';


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
          <Stack.Screen name="Welcome" component={WelcomePage} />
          <Stack.Screen name="Signin" component={SignInForm} />
          <Stack.Screen name="Signup" component={SignUpForm} />
          <Stack.Screen name="Home" component={HomeScreen} />
        </Stack.Navigator>
    </NavigationContainer>
  );
}

