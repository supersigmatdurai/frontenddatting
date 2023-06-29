import { View, Text, TextInput, StyleSheet, TouchableOpacity,Image,useWindowDimensions,Alert } from 'react-native'
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import Logo from '../assets/images/logo1.png'



export default function Login({navigation}) {

    const [mobileNumber,setPhoneNumber]=useState('');
  
    const getotp = async () => {
      console.log(mobileNumber)
    
        try {
    const response = await fetch('http://192.168.1.12:5000/api/sms', {
      method: 'POST',
      mode: 'cors',
      
      
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        mobileNumber
      }),
    });
    console.log("im thr res")
    console.log(response)
    if (response.ok) {
      console.log(response)
      
      const responseData = await response.json();
      console.log(responseData)
      if (responseData["message"] == "done") {
        // Alert.alert('Success', 'OTP Send successful!');Lottie_login_success

        
          navigation.navigate('Lottie',{mobileNumber});
        }
        
      
    } else {
      console.error('Error:', response.status);
    }
  } catch (error) {
    console.error('Error:', error);
  }
console.log("hii");
};

const {height}=useWindowDimensions()
  return (
  
    <View style={styles.container}>

      <Image source={Logo} style={[styles.logo, {height: height * 0.5}]} resizeMode='contain'/>
      <Text style={styles.head}>Do Something</Text> 
      <Text style={styles.head1}>Mobile Number Login</Text>    

      <TextInput style={styles.input} placeholder='Touch Lovely Mobile number' value={mobileNumber} keyboardType='numeric' onChangeText={text=>{setPhoneNumber(text)}}></TextInput>
      <TouchableOpacity style={styles.submit_button} onPress={getotp} ><Text style={{color:'black'}}>Touch Me</Text></TouchableOpacity>
     
    </View>
  )
}
const styles=StyleSheet.create({
  head:{
    fontSize:30,



  },
  head1:{
    fontSize:20,
    marginTop:20
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
        width:200
    },
    submit_button:{
        backgroundColor:'pink',
        borderWidth:2,
        borderRadius:10,
        top:50,
        width:90,
       height:45,
       justifyContent:'center',
       alignItems:'center',
       textAlign:'center',
        padding:10
    },
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      width:'100%',
      padding:10
    },

});

