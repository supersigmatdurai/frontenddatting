import { StyleSheet, Text, View,TouchableOpacity ,Image,FlatList} from 'react-native'
import React,{useState} from 'react'
import { useContext } from 'react'
import { InputCOntext } from '../App'

const DropDown = () => {

const {state,dispatch}=useContext(InputCOntext)
console.log(state)
    const countries=[{country:"hello"},{country:"hello1"},{country:"hello2"}]

    const [selectcountry,setselectcountry]=useState("select");
    const [isClicked,setisClicked]=useState(false)
    const [data,setData]=useState(countries)
    console.log(selectcountry)
  return (
    <View style={styles.container}>

      {/* <Text style={styles.heading}>DropDown</Text> */}
      <TouchableOpacity style={styles.dropdowm} 
        onPress={()=>{
            setisClicked(!isClicked);
        }}>
        <Text>{selectcountry}</Text>
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
                    <Text >{item.country}</Text>

                </TouchableOpacity>
            )
        }}/>

      </View>:null}


    </View>
  )
}

export default DropDown

const styles = StyleSheet.create({
    // container:{
    //     flex:1,
    //     justifyContent:'center',
    //     alignItems:'center'
    // },
    // heading:{
    //     fontSize:20,
    //     fontWeight:'800',
    //     alignSelf:'center'
    // }
    
    dropdowm:{
        width:'70%',
        height:50,
        borderRadius:10,
        borderWidth:.3,
        borderColor:'balck',
        alignSelf:'center',
        // marginTop:199,
        flexDirection: 'row',
        justifyContent:'space-between',
        alignItems:'center',
        paddingLeft:15,
        paddingRight:15
    },
    icon:{
        width:20,
        height:20,
        // flexDirection:'row'
        // ,justifyContent:'flex-end'
    },
    dropdownArea:{
        width:'70%',
        // height:300,
        borderRadius:10,
        marginTop:5,
        // alignSelf:'center',
        

        borderWidth:.3

    }
    ,countrys:{
        width:'40%',
        height:40,
        borderBottomWidth:.2,
        alignSelf:'center',
        borderColor:'balck',

        justifyContent:'center',
        // alignItems:'center'
    }
})