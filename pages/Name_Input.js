import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  useWindowDimensions,
  TouchableOpacity,
  TextInput,
  Alert,
} from "react-native";
import React, { useState } from "react";
// import Logo from "../assets/images/home00.jfif";
import Lottie from "lottie-react-native";
import { useNavigation } from "@react-navigation/native";
import { InputCOntext } from "../App";
import { useContext } from "react";

const Name_Input = ({ navigation }) => {
  const { state, dispatch } = useContext(InputCOntext);

  const [isValid, setIsValid] = useState(true);
  const [showAlert,setshowAlert]=useState(false)

  const [Name, setName] = useState("");
  const Nextscreen = async () => {
    //   console.log(mobileNumber)

    if (Name != "") {
      setshowAlert(true)
      // Alert.alert('Success', 'OTP Send successful!');Lottie_login_success

      navigation.navigate("Gen_Da", { Name });
    } else {
      setIsValid(false);
      setshowAlert(false)
      Alert()
      // Alert.alert("Fill Your Name");
    }

    console.log("hii");
  };
  
  const { height } = useWindowDimensions();

  return (
    <View style={styles.container}>
      <ImageBackground
        source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-JVlxxG9Xn88TAGK6dTnNXhWd3igFhxwxqv3axQkqrD29Pf4gYTnwFC0Dh8py1TdWyos&usqp=CAU'}}
        resizeMode='cover'
        style={styles.container1}
      >
        <Text style={styles.input_head}>Enter Your Lovely Name</Text>
        <TextInput 
          // style={styles.input } style={[
            style={[{
              fontSize: 18,
    borderWidth: 1,
    width: 222,
    height:50,
    padding: 5,
    paddingLeft: 10,
    borderRadius: 6,
    marginBottom: 30,
                 borderColor: isValid ? 'gray' : 'red', borderWidth: 1, marginBottom: 10 },
              !isValid && { backgroundColor: 'rgba(255, 0, 0, 0.1)' },
            ]}
          placeholder="Enter Your Lovely Name "
          placeholderTextColor="black"
          value={Name}
          onChangeText={(text) => {
            setIsValid(true)
            setName(text);


          }}
          onBlur={() => dispatch({ type: "COMPLETE", payload: Name })}
        ></TextInput>
        

        
        <TouchableOpacity style={styles.submit_button} onPress={Nextscreen}>

          <Text style={styles.nex}>Next</Text>

        </TouchableOpacity>
        
      </ImageBackground>
    </View>
  );
};

export default Name_Input;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  container1: {
    flex: 1,
    alignItems: "center",
    paddingTop: 100,
  },
  input_head: {
    fontSize: 22,
    paddingBottom: 40,
    fontWeight:'bold'
  },
  input: {
    
    fontSize: 18,
    borderWidth: 1,
    width: 222,
    height:50,
    padding: 5,
    paddingLeft: 10,
    borderRadius: 6,
    marginBottom: 30,
    // borderColor: "#800000",
  },
  submit_button: {
    // backgroundColor:'none',
    borderWidth:1,
    borderRadius: 7,
    top: 50,
    width: 120,
    height: 45,
    // justifyContent: "center",
    alignItems: "center",
    // textAlign: "center",
    padding: 10,
    borderColor: "black",
  },
  nex: {
    color: "black",
    fontWeight:'bold',
    fontSize: 22,
  },
  // lottie: {
  //   height: 60,
  // },
});
