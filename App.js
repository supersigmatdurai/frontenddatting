import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
 
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './pages/Login';
// import moduleName from 'module'
import Verify_otp from './pages/Verify_otp';
import HomeScreen from './pages/HomeScreen';
import Lottie_animation from './pages/Lottie_animation';
import Lottie_login_success from './pages/Lottie_login_success';
import Name_Input from './pages/Name_Input';
import Gen_D_Input from './pages/Gen_D_Input';
import Interst from './pages/Interst';
import First_Home from './pages/First_Home';
import About_Look from './pages/About_Look';
export const InputCOntext = createContext()
// import File_upload from './pages/File_upload';
// import About_Look from './pages/About_Look';
import File_upload from './pages/File_upload';
import { initialState, inputReducer } from './pages/reducer/inputreducer';
import { useReducer } from 'react';
import { createContext } from 'react';
import DropDown from './pages/DropDown';
export default function App() {
  const Stack = createNativeStackNavigator();


  const [state,dispatch] = useReducer(inputReducer,initialState)

  // React.useEffect(() =>{
  //   // navigator.geolocation.getCurrentPosition((position) =>{
  //   //   console.log(position)
  //   })
  // },[])

  return (
    <InputCOntext.Provider value={{state,dispatch}}> 
    <NavigationContainer>
    <Stack.Navigator initialRouteName="Home">
      

      <Stack.Screen name="Login" component={Login} options={{headerShown:false}} />
      <Stack.Screen name="verify" component={Verify_otp} options={{headerShown:false}} />
      {/* <Stack.Screen name="Dropdown" component={DropDown} options={{headerShown:false}} /> */}

      <Stack.Screen name="Home" component={HomeScreen} options={{headerShown:false}} />
      <Stack.Screen name="Lottie" component={Lottie_animation} options={{headerShown:false}} />
      <Stack.Screen name="Name_In" component={Name_Input} options={{headerShown:false}} />
      <Stack.Screen name="Gen_Da" component={Gen_D_Input} options={{headerShown:false}} />
      <Stack.Screen name="Intersted" component={Interst} options={{headerShown:false}} />
      <Stack.Screen name="About" component={About_Look} options={{headerShown:false}} />
      <Stack.Screen name="Upload" component={File_upload} options={{headerShown:false}} />
      <Stack.Screen name="First" component={First_Home} options={{headerShown:false}} />

      <Stack.Screen name="Lottie_verify" component={Lottie_login_success} options={{headerShown:false}} />
     


      
      
    </Stack.Navigator>
  </NavigationContainer>
  </InputCOntext.Provider>
  );
}

