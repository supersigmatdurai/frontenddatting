import { StyleSheet } from "react-native";
const styles=StyleSheet.create({
    container: {
        flex: 1
    },
    textcolin:{
        left:10,
    },
    cardcontainer:{
        width:350,
        height:230,
        borderRadius:12,
        marginTop:10,
        shadowColor: 'black',
        width: 150,
    },
    desc:{
        backgroundColor:'rgba(9,214,121,1)',
    },
    back:{
        flex:1,alignItems:'center',top:10,
    },
    textcol:{
        color:'black',
        fontWeight:'bold',
        fontSize:30,
        left:10,
    },
    image:{
        width:350,
        height:170,
        borderTopLeftRadius:12,
        borderTopRightRadius:12,
    },
    bcontainer:{
        flex:1,
        flexDirection:'row',
        backgroundColor:'#00d4ff',
        height:70,
        width:400,
    }
});

export default styles;