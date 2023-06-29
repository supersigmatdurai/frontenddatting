import React from "react";
import {View,StyleSheet,Text} from 'react-native'

export default function BottomNav(){
    return(
        <View style={styles.container}>
           <Text>Home</Text>
           <Text>Profile</Text>
           <Text>Notify</Text>
           
        </View>
    )
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        flexDirection:'row',
        backgroundColor:'#00d4ff',
        height:70,
        width:400,
        
    }
});