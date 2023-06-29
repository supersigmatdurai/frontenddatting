import React from "react";
import { StyleSheet,Text,View } from "react-native/types";
import {UseRouter} from expo-router;
const router=UseRouter();
function Content (){
    return(
        <View>
            <Text style={styles.container}>Text content</Text>
            
        </View>
    );
}
const styles=StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center'
    },
});
export default Content;

