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
import { useNavigation } from "@react-navigation/native";
import { useContext } from "react";
import { InputCOntext } from "../App";

const About_Look = ({ navigation, route }) => {
  const { state, dispatch } = useContext(InputCOntext);

  const countries = [
    { Person: "Male" },
    { Person: "Female" },
    
  ];
  const like = [
    { Choice: "Date" },
    { Choice: "BF" },
    
  ];

  const [selectcountry, setselectcountry] = useState("Choose Looking Partner");
  const [selectChoice, setselectChoice] = useState("Choice Like");

  const [isClicked, setisClicked] = useState(false);
  const [isClicked1, setisClicked1] = useState(false);

  const [data, setData] = useState(countries);
  const [data1, setData1] = useState(like);

  console.log(state);
  const [Partner, setPartner] = useState("");
  const [About1, setAbout1] = useState("");
  const [isValid, setIsValid] = useState(true);
  const [isValid2, setIsValid2] = useState(true);

  const [isValid1, setIsValid1] = useState(true);

  // const { Name } = route.params;

  const Nextscreen = async () => {
    //   console.log(mobileNumber)

    if (selectChoice!="Choice Like" && selectcountry != "Choose Looking Partner" && About1 != "") {
      // Alert.alert('Success', 'OTP Send successful!');Lottie_login_success

      navigation.navigate("Upload");
    } else if (selectcountry === "Choose Looking Partner") {
      setIsValid(false);
    }else if (selectChoice === "Choice Like") {
      setIsValid2(false);
    }
     else {
      setIsValid1(false);
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
        <Text style={styles.input_head}>What do you looking Your partner?</Text>

        <TouchableOpacity
          style={[
            {
              width: "70%",
              height: 50,
              fontSize: 80,
              borderRadius: 10,
              borderWidth: 0.9,
              borderColor: "balck",
              //  borderColor:'#800000',

              alignSelf: "center",
              // marginTop:199,
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              paddingLeft: 15,
              paddingRight: 15,

              borderColor: isValid ? "gray" : "red",
              borderWidth: 1.8,
              marginBottom: 10,
            },
            !isValid && { backgroundColor: "rgba(255, 0, 0, 0.1)" },
          ]}
          onPress={() => {
            setIsValid(true);
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
                      setselectcountry(item.Person);
                      dispatch({ type: "COMPLETE6", payload: item.Person });
                      setisClicked(false);
                    }}
                  >
                    <Text style={styles.tex}>{item.Person}</Text>
                  </TouchableOpacity>
                );
              }}
            />
          </View>
        ) : null}

<TouchableOpacity
          style={[
            {
              width: "70%",
              height: 50,
              // fontSize: 80,
              borderRadius: 10,
              borderWidth: 0.9,
              borderColor: "balck",
              //  borderColor:'#800000',

              alignSelf: "center",
              marginTop:30,
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              paddingLeft: 15,
              paddingRight: 15,

              borderColor: isValid2 ? "gray" : "red",
              borderWidth: 1.8,
              marginBottom: 10,
            },
            !isValid2 && { backgroundColor: "rgba(255, 0, 0, 0.1)" },
          ]}
          onPress={() => {
            setIsValid2(true);
            setisClicked1(!isClicked1);
          }}
        >
          <Text>{selectChoice}</Text>
          {isClicked1 ? (
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
        {isClicked1 ? (
          <View style={styles.dropdownArea}>
            <FlatList
              data={data1}
              renderItem={({ item, index }) => {
                return (
                  <TouchableOpacity
                    style={styles.countrys}
                    onPress={() => {
                      setselectChoice(item.Choice);
                      dispatch({ type: "COMPLETE9", payload: item.Choice });
                      setisClicked1(false);
                    }}
                  >
                    <Text style={styles.tex}>{item.Choice}</Text>
                  </TouchableOpacity>
                );
              }}
            />
          </View>
        ) : null}

        {/* <TextInput style={styles.input} placeholder=' Choose Your Partner' value={Partner} onChangeText={text=>{setPartner(text)}} onBlur={()=>dispatch({type:"COMPLETE6",payload:Partner})} placeholderTextColor="#800000" ></TextInput> */}
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

              borderColor: isValid1 ? "gray" : "red",
              borderWidth: 1.8,
              marginBottom: 10,
            },
            !isValid1 && { backgroundColor: "rgba(255, 0, 0, 0.1)" },
          ]}
          placeholder="Describe About You "
          value={About1}
          onChangeText={(text) => {
            setIsValid1(true);
            setAbout1(text);
          }}
          onBlur={() => dispatch({ type: "COMPLETE7", payload: About1 })}
          placeholderTextColor="#800000"
          multiline
        ></TextInput>

        <TouchableOpacity style={styles.submit_button} onPress={Nextscreen}>
          <Text style={styles.nex}>Next</Text>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
};

export default About_Look;

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
  },
  input: {
    fontSize: 18,
    borderWidth: 1,
    width: "70%",
    padding: 5,
    height: 50,
    marginTop: 40,
    paddingLeft: 10,
    borderRadius: 6,
    marginBottom: 30,
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
    fontWeight:'500',
    fontSize: 22,
  },
  lottie: {
    height: 60,
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
    // marginTop:199,
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
});
