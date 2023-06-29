import { StyleSheet, Text, View,FlatList } from 'react-native'
import React ,{useState,useEffect}from 'react'

const First_Home = () => {

    const [data, setData] = useState([]);
    useEffect(() => {
        fetchData();
      }, []);


      //Api fetch data

      const fetchData = async() => {
        try {
            const response=await fetch('http://192.168.1.21:5000/getuser/10',{
            method: 'get',
            mode: 'cors',
            cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
        credentials: "same-origin",
      
      
        headers: {
        'Content-Type': 'application/json',
      },
      
    });
        if (response.ok){
            const responseData = await response.json();
            setData(responseData);
      console.log(responseData)
      
        
      
    } 

    } catch (error) {
        console.error('Error:', error);
      }
    };
    const renderItem = ({ item }) => {
      return (
        <View style={{ padding: 16 }}>
          <Text>{item.Looking}</Text>
        </View>
      );
    };

    


  return (
    <View style>
      <Text>First_Home</Text>

      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  )
}

export default First_Home

const styles = StyleSheet.create({})