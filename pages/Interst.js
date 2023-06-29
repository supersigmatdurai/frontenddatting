import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  useWindowDimensions,
  TouchableOpacity,
  TextInput,
  Alert,
  Image,
  FlatList,
} from "react-native";
import React, { useState } from "react";
import Logo from "../assets/images/heart_back.jpg";
import Lottie from "lottie-react-native";
import { useContext } from "react";
import { InputCOntext } from "../App";
import { useNavigation } from "@react-navigation/native";

const Interst = ({ navigation, route }) => {
  const { state, dispatch } = useContext(InputCOntext);
  console.log(state);
  const countries = [
    { country: "Single" },
    { country: "Married" },
    { country: "Divorced" },
    { country: "Separated" },
    { country: "Widowed" },
    // { country: "Annulled" },
  ];

  const [selectcountry, setselectcountry] = useState("Choose Marital status");
  const [isClicked, setisClicked] = useState(false);
  const [data, setData] = useState(countries);
  const [isValid, setIsValid] = useState(true);
  const [isValid1, setIsValid1] = useState(true);
  const [isValid2, setIsValid2] = useState(true);

  const [interst1, setinterest] = useState("");
  const [Status, setStatus] = useState("");
  const [Language, setLanguage] = useState("");

  const { Name } = route.params;

  const Nextscreen = async () => {
    //   console.log(mobileNumber)

    if (
      interst1 != "" &&
      selectcountry != "Choose Marital status" &&
      Language != ""
    ) {
      // Alert.alert('Success', 'OTP Send successful!');Lottie_login_success

      navigation.navigate("About", { Name });
    } else if (interst1 === "") {
      setIsValid(false);
    } else if (selectcountry === "Choose Marital status") {
      setIsValid1(false);
    } else {
      setIsValid2(false);
    }

    console.log("hii");
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={{
          uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-JVlxxG9Xn88TAGK6dTnNXhWd3igFhxwxqv3axQkqrD29Pf4gYTnwFC0Dh8py1TdWyos&usqp=CAU",
        }}
        resizeMode="cover"
        style={styles.container1}
      >
        <Text style={styles.input_head}>Enter Your Status && Languages</Text>
        <TextInput
          style={[
            {
              fontSize: 16,
              borderWidth: 1,
              width: "70%",
              height: 50,
              padding: 5,
              paddingLeft: 10,
              borderRadius: 6,
              marginBottom: 30,
              marginTop: 30,

              borderColor: isValid ? "gray" : "red",
              borderWidth: 1.8,
              marginBottom: 10,
            },
            !isValid && { backgroundColor: "rgba(255, 0, 0, 0.1)" },
          ]}
          placeholder="Your Interest eg.(Travel or movie) "
          value={interst1}
          onChangeText={(text) => {
            setIsValid(true);
            setinterest(text);
          }}
          onBlur={() => dispatch({ type: "COMPLETE3", payload: interst1 })}
          placeholderTextColor="black"
        ></TextInput>

        <TouchableOpacity
          style={[
            {
              width: "70%",
              height: 50,
              //  fontSize:80,
              borderRadius: 10,
              //  borderWidth:1.5,
              // borderColor:'balck',
              //  borderColor:'#800000',

              alignSelf: "center",
              marginTop: 25,
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              paddingLeft: 15,
              paddingRight: 15,

              borderColor: isValid1 ? "gray" : "red",
              borderWidth: 1.8,
              marginBottom: 10,
            },
            !isValid && { backgroundColor: "rgba(255, 0, 0, 0.1)" },
          ]}
          onPress={() => {
            setIsValid1(true);
            setisClicked(!isClicked);
          }}
        >
          <Text>{selectcountry}</Text>
          {isClicked ? (
            <Image
              source={require("../assets/images/updrop.png")}
              style={styles.icon}
            />
          ) : (
            <Image
              source={require("../assets/images/drop.png")}
              style={styles.icon}
            />
          )}
        </TouchableOpacity>
        {isClicked ? (
          <View style={styles.dropdownArea}>
            <FlatList
              data={data}
              renderItem={({ item, index }) => {
                return (
                  <TouchableOpacity
                    style={styles.countrys}
                    onPress={() => {
                      setselectcountry(item.country);
                      dispatch({ type: "COMPLETE4", payload: item.country });
                      setisClicked(false);
                    }}
                  >
                    <Text style={styles.tex}>{item.country}</Text>
                  </TouchableOpacity>
                );
              }}
            />
          </View>
        ) : null}
        {/* <TextInput style={styles.input} placeholder='Your Status eg.(Single) ' value={Status} onChangeText={text=>{setStatus(text)}} onBlur={()=>dispatch({type:"COMPLETE4",payload:Status})}  placeholderTextColor="#800000" ></TextInput> */}
        <TextInput
          style={[
            {
              fontSize: 16,
              borderWidth: 1,
              width: "70%",
              height: 50,
              padding: 5,
              paddingLeft: 10,
              borderRadius: 6,
              marginBottom: 30,
              marginTop: 30,

              borderColor: isValid2 ? "gray" : "red",
              borderWidth: 1.8,
              marginBottom: 10,
            },
            !isValid2 && { backgroundColor: "rgba(255, 0, 0, 0.1)" },
          ]}
          placeholder="Your Mother Tongue eg.(Tamil)"
          value={Language}
          onChangeText={(text) => {
            setIsValid2(true);

            setLanguage(text);
          }}
          onBlur={() => dispatch({ type: "COMPLETE5", payload: Language })}
          placeholderTextColor="black"
        ></TextInput>

        <TouchableOpacity style={styles.submit_button} onPress={Nextscreen}>
          <Text style={styles.nex}>Next</Text>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
};

export default Interst;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  tex: {
    fontSize: 18,
    fontWeight: "bold",
  },
  dropdowm: {
    width: "70%",
    height: 50,

    // fontSize:80,
    borderRadius: 10,
    borderWidth: 0.9,
    // borderColor:'balck',
    borderColor: "#800000",

    alignSelf: "center",
    // marginTop:30,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingLeft: 15,
    paddingRight: 15,
    // ,marginBottom:30
  },
  dropdownArea: {
    width: "70%",
    borderRadius: 10,
    marginTop: 5,
    // fontSize:50,
    // alignSelf:'center',

    borderWidth: 0.3,
  },
  countrys: {
    width: "100%",
    height: 40,
    marginLeft: 20,
    borderBottomWidth: 0.2,
    alignSelf: "center",
    borderColor: "balck",

    justifyContent: "center",
    // alignItems:'center'
  },
  icon: {
    width: 20,
    height: 20,
  },
  container1: {
    flex: 1,
    alignItems: "center",
    paddingTop: 100,
  },
  input_head: {
    fontSize: 22,
    paddingBottom: 40,
  },
  input: {
    fontSize: 16,
    borderWidth: 2,
    width: "70%",
    height: 50,
    padding: 5,
    paddingLeft: 10,
    borderRadius: 10,
    marginBottom: 30,
    marginTop: 30,
    borderColor: "#800000",
  },
  submit_button: {
    borderWidth: 1,
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
    fontWeight: "bold",
    fontSize: 22,
  },
  lottie: {
    height: 60,
  },
});
