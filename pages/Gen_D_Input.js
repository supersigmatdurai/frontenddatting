import { StyleSheet, Text, View,ImageBackground,useWindowDimensions ,TouchableOpacity,TextInput,Alert,Image,FlatList} from 'react-native'
import React,{useState} from 'react'
import { useContext } from 'react'
import Logo from '../assets/images/heart_back.jpg'
import Lottie from 'lottie-react-native'
import { useNavigation } from '@react-navigation/native';
import { InputCOntext } from '../App'
import DropDown from './DropDown'



const Gen_D_Input = ({navigation,route}) => {

  const [isValid, setIsValid] = useState(true);
  const [isValid1, setIsValid1] = useState(true);



    const {state,dispatch} = useContext(InputCOntext)
    console.log(state)
    const [Gender,setGender]=useState('');
    const [Age,setAge]=useState('');


    const countries=[{country:"Male"},{country:"Female"},{country:"Transgender"}]

    const [selectcountry,setselectcountry]=useState("Choose Your Gender");
    const [isClicked,setisClicked]=useState(false)
    const [data,setData]=useState(countries)


    const { Name } = route.params;

    const Nextscreen = async () => {
    
        
      if (selectcountry  != "Choose Your Gender" && Age!="") {
        console.log(selectcountry)

        
          navigation.navigate('Intersted',{Name});
        }else if (selectcountry  === "Choose Your Gender" ){
          setIsValid1(false);

        }
        
      
     else {
      setIsValid(false);

    }
  
console.log("hii");
};



  return (
    <View style={styles.container}>
    <ImageBackground source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-JVlxxG9Xn88TAGK6dTnNXhWd3igFhxwxqv3axQkqrD29Pf4gYTnwFC0Dh8py1TdWyos&usqp=CAU'}}
     resizeMode="cover"
    style={styles.container1} >
      <Text style={styles.input_head}>Enter Your Gender && Age</Text>
      {/* <TextInput style={styles.input} placeholder='Gender(Male or Female) ' value={Gender} onChangeText={text=>{setGender(text)}}
       onBlur={()=>dispatch({type:"COMPLETE2",payload:Gender})}
       placeholderTextColor="#800000" ></TextInput> */}
       {/* <DropDown /> */}
       <TouchableOpacity style={[{
             width:'70%',
             height:50,
             fontSize:80,
             borderRadius:10,
             borderWidth:.9,
             // borderColor:'balck',
            //  borderColor:'#800000',
       
             alignSelf:'center',
             // marginTop:199,
             flexDirection: 'row',
             justifyContent:'space-between',
             alignItems:'center',
             paddingLeft:15,
             paddingRight:15,

                 borderColor: isValid1 ? 'gray' : 'red', borderWidth: 1, marginBottom: 10 },
              !isValid && { backgroundColor: 'rgba(255, 0, 0, 0.1)' },
            ]}  
        onPress={()=>{
          setIsValid1(true)
            setisClicked(!isClicked);
            
        }}>
        <Text >{selectcountry}</Text>
        {isClicked ? (
        <Image source={require('../assets/images/updrop.png') } style={styles.icon}/>

        ):(
            <Image source={require('../assets/images/drop.png') } style={styles.icon}/>


        )}
      </TouchableOpacity>
      {isClicked ?
      <View style={styles.dropdownArea}>
        <FlatList data={ data} renderItem={({item,index})=>{
            return(
                <TouchableOpacity style={styles.countrys}   onPress={()=>{
                    setselectcountry(item.country);
                    dispatch({type:'COMPLETE2',payload:item.country})
                    setisClicked(false)
                    
                }} >
                    <Text style={styles.tex}>{item.country}</Text>

                </TouchableOpacity>
            )
        }}/>

      </View>:null}

{/* <DropDown /> */}
      <TextInput style={[{
              fontSize: 18,
    borderWidth: 1,
    width: '70%',
    height:50,
    padding: 5,
    paddingLeft: 10,
    borderRadius: 6,
    marginBottom: 30,
    marginTop:30,

                 borderColor: isValid ? 'gray' : 'red', borderWidth: 1, marginBottom: 10 },
              !isValid && { backgroundColor: 'rgba(255, 0, 0, 0.1)' },
            ]} placeholder='Enter Your Age ' value={Age} onChangeText={text=> {
        setIsValid(true)
         setAge(text) } } onBlur={()=>dispatch({type:'COMPLETE1',payload:Age})}
        keyboardType='numeric' ></TextInput>


      {/* <TouchableOpacity style={styles.submit_button} onPress={Nextscreen}  ><Lottie  style={styles.lottie}
       source={require('../assets/images/btn_love.json')}  autoPlay/><Text style={styles.nex}>Next</Text></TouchableOpacity> */}
       <TouchableOpacity style={styles.submit_button} onPress={Nextscreen}>

<Text style={styles.nex}>Next</Text>

</TouchableOpacity>
        

      </ImageBackground>
      </View>
  )
}

export default Gen_D_Input

const styles = StyleSheet.create({
    container:{
        flex:1,

    },
    container1:{
        flex:1,
        alignItems:'center',
        // alignSelf:'center',
        paddingTop:100

    },
    tex:{
      fontSize:18,
      fontWeight:'bold'
    },
    dropdowm:{
      
      width:'70%',
      height:50,
      fontSize:80,
      borderRadius:10,
      borderWidth:.9,
      // borderColor:'balck',
      borderColor:'#800000',

      alignSelf:'center',
      // marginTop:199,
      flexDirection: 'row',
      justifyContent:'space-between',
      alignItems:'center',
      paddingLeft:15,
      paddingRight:15
      // ,marginBottom:30
  },
  dropdownArea:{
    width:'70%',
    borderRadius:10,
    marginTop:5,
    // fontSize:50,
    // alignSelf:'center',
    

    borderWidth:.3

}
,countrys:{
    width:'100%',
    height:40,
    marginLeft:20,
    borderBottomWidth:.2,
    alignSelf:'center',
    borderColor:'balck',

    justifyContent:'center',
    // alignItems:'center'
},
    icon:{
      width:20,
      height:20
    },
    input_head:{
        fontSize:22,
        paddingBottom:40,
        justifyContent:'center'
    },
    input:{
        fontSize:18,
        borderWidth:1,
        height:50,
        width:'70%',
        padding:5,
        paddingLeft:10,
        borderRadius:6,
        marginBottom:30,
        borderColor:'#800000',
        marginTop:30

    },
    submit_button:{

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
    nex:{
        color:'black',
        fontWeight:'bold',
        fontSize:22

    },
    lottie:{
        height:60
    }

})