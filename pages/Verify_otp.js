import { StyleSheet, Text, View,Image ,useWindowDimensions,TextInput,TouchableOpacity,Alert,Router} from 'react-native'
import React,{useState} from 'react'
import { useNavigation } from '@react-navigation/native';

import Logo from '../assets/images/logo1.png'


const Verify_otp = ({navigation,route}) => {

    const [otp, setOtp] = useState('');
    const { mobileNumber } = route.params;
    console.log(mobileNumber)

    const handleVerifyOTP = async() => {
        try {
            const response=await fetch('http://192.168.1.12:5000/checkotp',{
            method: 'POST',
            mode: 'cors',
            cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
        credentials: "same-origin",
      
      
        headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        mobileNumber,otp
      }),
    });
        if (response.ok){
            const responseData = await response.json();
      console.log(responseData)
      if (responseData["success"] == "True") {
        
        navigation.navigate('Lottie_verify');
        }
        
      
    } else {
        
      console.error(Alert.alert("invaild otp"));
      
    }

    } catch (error) {
        console.error('Error:', error);
      }
    };

const {height}=useWindowDimensions()

  return (
    <View style={styles.main_container}>
      <Image source={Logo} style={[styles.logo, {height: height * 0.5}]} resizeMode='contain'/>
      <Text style={styles.head}>OTP Verification, {mobileNumber}</Text>    
      <TextInput style={styles.input} placeholder='Enter Otp ' value={otp}
        onChangeText={setOtp} keyboardType='numeric' ></TextInput>

      <TouchableOpacity style={styles.submit_button} onPress={handleVerifyOTP}  ><Text style={{color:'black'}}>Touch Verify</Text></TouchableOpacity>
     
    </View>
  )
}

export default Verify_otp

const styles = StyleSheet.create({
    head:{
        fontSize:30,
        // fontFamily:'roboto',
    
    
    
      },
        
        input:{
            backgroundColor:'white',
            borderWidth:1,
            borderRadius:10,
            width:300,
            height:45,
            padding:10,
            marginTop:20
        },
        logo:{
            // marginTop:30,
            paddingTop:40,
            height:200,
            width:300
        },
        submit_button:{
            backgroundColor:'pink',
            borderWidth:1,
            borderRadius:7,
            top:50,
            width:120,
           height:45,
           justifyContent:'center',
           alignItems:'center',
           textAlign:'center',
            padding:10
        },
        main_container: {
          flex: 1,
          backgroundColor: '#fff',
          alignItems: 'center',
          width:'100%',
          padding:10
        },

})