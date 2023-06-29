import { StyleSheet, Text, View,useWindowDimensions ,Image,TouchableOpacity} from 'react-native'
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import Logo from '../assets/images/home_1.png'


const HomeScreen = ({navigation}) => {

  const Namescreen = async() => {

    navigation.navigate('Name_In');

};

const {height}=useWindowDimensions()

  return (
    <View style={styles.main_container}>
      
      {/* <Text style={styles.main}>HomeScreen</Text> */}
      <Image source={Logo} style={[styles.logo, {height: height * 0.6}]} resizeMode='contain'/>
      <Text style={styles.t1}> Find your Perfect Match</Text>
      <TouchableOpacity style={styles.submit_button} onPress={Namescreen}  ><Text style={styles.but_t}>Let's Started</Text></TouchableOpacity>






    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  t1:{
    marginTop:30,
    fontSize:29,
    fontFamily: 'sans-serif-thin',
    fontWeight:900,
    color:'#ff9900'

  },
  main:{
 
  },
  main_container:{
    marginTop:20,
    // justifyContent:'center'
    alignItems:'center',
    flex:1,
    // backgroundColor:"black"

  }
  ,
        submit_button:{
            backgroundColor:'pink',
            borderWidth:.5,
            borderColor:'red',
            borderRadius:7,
            top:50,
            color:'white',
            width:150,
           height:45,
           justifyContent:'center',
           alignItems:'center',
           textAlign:'center',
            padding:10
        },
        but_t:{
          fontSize:20
        }

})