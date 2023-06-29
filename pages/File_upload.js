import {
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  Alert,
  ScrollView,
  ImageBackground,
  TouchableOpacity,ActivityIndicator
} from "react-native";
import { useNavigation } from "@react-navigation/native";

import React, { useState } from "react";
import * as ImagePicker from "expo-image-picker";
import * as FileSystem from "expo-file-system";
import { useContext } from "react";
import { InputCOntext } from "../App";

const File_upload = ({navigation}) => {

  const [loading, setLoading] = useState(false);

  const handleButtonClick = () => {
    setLoading(true);

    // Simulating an asynchronous task
    setTimeout(() => {
      setLoading(false);
    }, 7000);
  };

  const { state, dispatch } = useContext(InputCOntext);
  const go_to= async ()=>{
    navigation.navigate('First')
  }
  console.log(state);

  const [selectedImage, setSelectedImage] = useState([]);
  const [selectedImage1, setSelectedImage1] = useState([]);

  console.log(selectedImage.length);

  const formdata1 = [];
  const image = formdata1;
  console.log("i am send");
  console.log(image);

  // formdata.append("file", { uri: localUri, name: filename, type });

  const submit = async ( {navigation} ) => {
    console.log(navigation)
    try {
      console.log("i am inside00");
      const response = await fetch(
        `http://192.168.1.25:5000/getuserdetails`, //this IP address need to change and check
        {
          method: "POST",
          mode: "cors", // no-cors, *cors, same-origin
          cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
          credentials: "same-origin", // include, *same-origin, omit
          headers: {
            // Accept: "application/json",
            "Content-Type": "application/json",

            // "Content-Type": "multipart/form-data",
            // 'Content-Type': 'application/x-www-form-urlencoded',
          },
          body: JSON.stringify({
            state,
            selectedImage1,
          }), // body data type must match "Content-Type" header
        }
      );
      // if (response.ok) {
      //   const responseData = await response.json();
      //   console.log(responseData);
      // }
      // )
      if (response.ok) {
        const responseData = await response.json();
        console.log(responseData);
        if (responseData["user"] == "success") {
          console.log("i am navigate")
          // console.log(navigation)
          go_to()

          // navigation.navigate("First");
          // navigation.navigate('First')
        }
      } else {
console.log("error")      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  async function takeAndUploadPhotoAsync1(paras) {
    console.log(formdata1);

    // console.log(paras)

    let result =
      paras === "files"
        ? await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            // allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
            multiple: true,
          })
        : await ImagePicker.launchCameraAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
          });

    result;

    // ImagePicker saves the taken photo to disk and returns a local URI to it
    console.log(result);
    if (!result.canceled) {
     
      // setprofileActivityIndicators(true);
      let localUri = result.assets[0]["uri"];
      // setprofile(localUri);
      let filename = localUri.split("/").pop();
      // Infer the type of the image
      let match = /\.(\w+)$/.exec(filename);
      let type = match ? `image/${match[1]}` : `image`;
      var formdata = new FormData();
      formdata.append("file", { uri: localUri, name: filename, type });
      handleButtonClick()

      // async function submitdata() {
      try {
        console.log("i am inside");
        await fetch(
          `http://192.168.1.25:5000/aws_upload/1`, //this IP address need to change and check
          {
            method: "POST",
            mode: "cors", 
            headers: {
              "Content-Type": "multipart/form-data",
            },
            body: formdata, 
          }
        )
          .then((response) => response.json())
          .then((result1) => {
            handleButtonClick()
            console.log(result1.updated);
            // setSelectedImage(result)
            setSelectedImage([...selectedImage, result1]);
            //setSelectedImage1([...selectedImage1, result1]);

            formdata1.push(result1);
            console.log("i list");
            console.log(formdata1);
            setSelectedImage1([...selectedImage1, result1]);
            // setSelectedImage(result);
          });
      } catch (error) {
        console.log(error);
      }
    }
  }
  console.log("inam image");
  console.log(formdata1);

  return (
    // <View style={styles.main}>

    //   <Button title="Choose Image" onPress={()=>{takeAndUploadPhotoAsync1("files")} }   />
    //   {selectedImage &&( <Image source={{ uri: selectedImage.updated }} style={{ width: 200, height: 200 }} />)}
    // </View>
    <View style={styles.main}>
      <ImageBackground
        source={{
          uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-JVlxxG9Xn88TAGK6dTnNXhWd3igFhxwxqv3axQkqrD29Pf4gYTnwFC0Dh8py1TdWyos&usqp=CAU",
        }}
        resizeMode="cover"
        style={styles.container1}
      >
        {selectedImage.length != 1 ? (
          <TouchableOpacity
            style={styles.btn1}
            onPress={() => {
              takeAndUploadPhotoAsync1("files");
              handleButtonClick()
            }}
          >
            <Text style={styles.nex}>Add Image</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity style={styles.btn2} onPress={submit}>
            <Text style={styles.nex1}>Submit</Text>
          </TouchableOpacity>
          // <Button style={{}} title="Submit" onPress={submit} />
        )}
        {loading ? (
        <ActivityIndicator size="large" color="blue" />
        // <Button title="Start Loading" onPress={handleButtonClick} />
      ) : (
        // <Button title="Start Loading" onPress={handleButtonClick} />
      

        <ScrollView contentContainerStyle={styles.img}>
          
          {selectedImage1.map((image, index) => (
            <Image
              key={index}
              source={{ uri: image.updated }}
              style={{
                width: 100,
                height: 100,
                borderWidth: 1,
                borderRadius: 20,
              }}
            />
          ))}
        </ScrollView>)}
      </ImageBackground>
    </View>
  );
};

export default File_upload;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    // justifyContent:'center',
    // alignItems:'center',
  },
  container1: {
    flex: 1,
    alignItems: "center",
    // flexDirection:'column',
    paddingTop: 300,
  },
  nex1: {
    fontSize: 20,
    fontWeight: "bold",
    // backgroundColor:'#e7e7e7'
  },
  nex: {
    fontSize: 20,
    fontWeight: "bold",
  },
  btn1: {
    borderWidth: 1.8,
    borderRadius: 7,
    // top: 50,
    // fontSize:20,
    width: 120,
    height: 45,
    // justifyContent: "center",
    alignItems: "center",
    // textAlign:'center',
    justifyContent: "center",
    // textAlign: "center",
    // padding: 13,
    backgroundColor: "#fafafa",
    borderColor: "#800000",
    // marginTop:700
  },
  btn2: {
    borderWidth: 1.8,
    borderRadius: 7,

    width: 120,
    height: 45,

    alignItems: "center",
    // textAlign:'center',
    justifyContent: "center",
    backgroundColor: "#7FFFD4",

    borderColor: "#800000",
  },
  img: {
    height: 300,
    display: "flex",
    flexDirection: "row",
    margin: 30,
    padding: 20,
    gap: 15,
    justifyContent: "flex-start",

    // backgroundColor:'black'
  },
});
