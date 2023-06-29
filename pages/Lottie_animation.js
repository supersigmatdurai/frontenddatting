import { StyleSheet, Text, View } from 'react-native'
import React,{useState,useRef,useEffect} from 'react'
import { useNavigation } from '@react-navigation/native';

// import AnimatedLottieView from 'lottie-react-native'
import Lottie from 'lottie-react-native'

const Lottie_animation = ({navigation,route}) => {
    const animationRef = useRef(null);
    const { mobileNumber } = route.params;
    console.log("i am lootie")


    useEffect(() => {
      // Start the animation
      animationRef.current.play();
  
      // Set a timer to stop the animation after 5 seconds
      const timer = setTimeout(() => {
        animationRef.current.reset();
        
        navigation.navigate('verify',{mobileNumber})
        // Perform any other actions you need after the timer completes
  
        // For example, navigate to another screen
        // navigation.navigate('NextScreen');
      }, 3000);
  
      return () => {
        
        // Clear the timer if the component is unmounted or the timer is no longer needed
        

      };
    }, []);

  return (
    <View style={styles.conatiner}>
      <Text>Lottie_animation</Text>
      <Lottie ref={animationRef} style={styles.lottie} source={require('../assets/images/send_otp.json')} autoPlay/>
    </View>
  )
}

export default Lottie_animation

const styles = StyleSheet.create({
    lottie:{
        // width:300,
        // height:500

    },
    conatiner:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
})