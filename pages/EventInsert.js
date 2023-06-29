import React, { useState } from 'react';
import { View, TextInput, Button, Image, TouchableOpacity, Text,StyleSheet ,KeyboardAvoidingView } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import DateTimePicker from '@react-native-community/datetimepicker';
import {Picker} from '@react-native-picker/picker';
import { ScrollView } from 'react-native-gesture-handler';


const EventInsert = () => {
  const [serverImagePath,setServerImagePath]=useState('');
  const [data, setData] = useState({
    imageurl: null,
    title: '',
    required: '',
    edate: '',
    team_description: '',
    main_category: '',
    category: '',
    location: {
      longitude: 0,
      latitude: 0,
    },
    address: '',
    paytype: 'True',
    amount: '',
    user_id: '',
    description: '',
    estime: '',
    eetime: '',
  });
  /////////////////////////////////////////////////////
  const [date, setDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [showTimePicker,setShowTimePicker]=useState(false);
  const [showeeTimePicker,setShoweeTimePicker]=useState(false);

  const handleDateChange = ( selectedDate) => {
    const currentDate = selectedDate;
    setDate(currentDate);
    setData({ ...data, edate: currentDate});
    setShowDatePicker(false); // Hide the date picker after selection
  };

  const handleTimeChange = ( selectedTime) => {
    const currentTime = selectedTime;
    const hours = currentTime.getHours().toString().padStart(2, '0');
    const minutes = currentTime.getMinutes().toString().padStart(2, '0');
    const timeString = `${hours}:${minutes}`;
    setData({ ...data, estime: timeString });
    setShowTimePicker(false); // Hide the time picker after selection
  };

  const handleeeTimeChange = ( selectedTime) => {
    const currentTime = selectedTime ;
    // const hours = currentTime.getHours().toString().padStart(2, '0');
    // const minutes = currentTime.getMinutes().toString().padStart(2, '0');
    // const timeString = `${hours}:${minutes}`; 
    setData({ ...data, eetime: currentTime});
    setShowTimePicker(false); // Hide the time picker after selection
  };
//////////////////////////////////////////////////////////////////////////////

  //const [endTime, setEndTime] = useState(new Date());
  const mainCategoryOptions = ['Sports', 'Entertainment', 'Online Gaming', 'Special Events'];
const sportsSubCategoryOptions = ['Cricket', 'Football', 'Basketball'];
const entertainmentSubCategoryOptions = ['Movie', 'Music', 'Theater'];
const onlineGamingSubCategoryOptions = ['MMORPG', 'Battle Royale', 'Strategy'];
const specialEventsSubCategoryOptions = ['Concert', 'Exhibition', 'Conference'];

//////////////////////////////////////////////////////////////////////////

const [mainCategory, setMainCategory] = useState('');
const [category, setCategory] = useState('');

const handleMainCategoryChange = (value) => {
  setMainCategory(value);
  setCategory(''); // Reset the sub-category when main category changes
  setData({ ...data, main_category: value, category: '' });
};

const handleCategoryChange = (value) => {
  setCategory(value);
  setData({ ...data, category: value });
};




  const handleImageUpload = async () => {
    const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (permissionResult.granted === false) {
      alert('Permission to access camera roll is required!');
      return;
    }

    const pickerResult = await ImagePicker.launchImageLibraryAsync();
    if (!pickerResult.canceled) {
      const formData = new FormData();
      formData.append('image', {
        uri: pickerResult.uri,
        name: 'eventpic.jpg',
        type: 'image/jpeg',
      });

      fetch('http://192.168.29.34:5000/upload-image', {
        method: 'POST',
        mode:'cors',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'multipart/form-data',
        },
        body: formData,
      })
        .then((response) => response.json())
        .then((responseData) => {
          console.log(responseData);
          setServerImagePath(responseData.serverimagepath)
          setData({ ...data, imageurl: responseData.filename });
        })
        .catch((error) => {
          console.error(error);
          // Handle error as needed
        });
    }
  };

  const handleSubmit = async () => {
    fetch('http://192.168.64.230:5000/insert-post-details', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((responseData) => {
        console.log(responseData);
        // Handle response data as needed
      })
      .catch((error) => {
        console.error(error);
        // Handle error as needed
      });
  };

  return (
    <View style={styles.container}>
    <ScrollView>    
    <KeyboardAvoidingView   behavior="padding" style={styles.container}>
          <TouchableOpacity onPress={handleImageUpload} style={styles.imageUploadButton}>
        {data.imageurl ? (
          <Image source={{ uri: serverImagePath }} style={styles.imagePreview} />
        ) : (
          <Text>Select Image</Text>
        )}
      </TouchableOpacity>
      <TextInput
        placeholder="Title"
        value={data.title}
        onChangeText={(text) => setData({ ...data, title: text })}
        style={styles.input}
      />
      <TextInput
        placeholder="Required"
        value={data.required}
        onChangeText={(text) => setData({ ...data, required: text })}
        style={styles.input}
      />
      
      
      <TextInput
      placeholder="Team Description"
      value={data.team_description}
      onChangeText={(text) => setData({ ...data, team_description: text })}
      style={styles.input}
    />
    <Picker
      selectedValue={mainCategory}
      onValueChange={handleMainCategoryChange}
    >
      <Picker.Item label="Select Main Category" value="" />
      {mainCategoryOptions.map((option) => (
        <Picker.Item key={option} label={option} value={option} />
      ))}
    </Picker>

    <Picker
      selectedValue={category}
      onValueChange={handleCategoryChange}
      enabled={!!mainCategory} 
      style={styles.picker}// Disable the sub-category dropdown if main category is not selected
    >
      <Picker.Item label="Select Category" value="" style={styles.picker} />
      {mainCategory === 'Sports' && sportsSubCategoryOptions.map((option) => (
        <Picker.Item key={option} label={option} value={option} style={styles.picker}/>
      ))}
      {mainCategory === 'Entertainment' && entertainmentSubCategoryOptions.map((option) => (
        <Picker.Item key={option} label={option} value={option} />
      ))}
      {mainCategory === 'Online Gaming' && onlineGamingSubCategoryOptions.map((option) => (
        <Picker.Item key={option} label={option} value={option} />
      ))}
      {mainCategory === 'Special Events' && specialEventsSubCategoryOptions.map((option) => (
        <Picker.Item key={option} label={option} value={option} />
      ))}
    </Picker>
    <TextInput
      placeholder="Address"
      value={data.address}
      onChangeText={(text) => setData({ ...data, address: text })}
      style={styles.input}
    />
    <TextInput
      placeholder="Amount"
      value={data.amount}
      onChangeText={(text) => setData({ ...data, amount: text })}
      style={styles.input}
    />
    <TextInput
      placeholder="User ID"
      value={data.user_id}
      onChangeText={(text) => setData({ ...data, user_id: text })}
      style={styles.input}
    />
    <TextInput
      placeholder="Description"
      value={data.description}
      onChangeText={(text) => setData({ ...data, description: text })}
      style={styles.input}
    />

    <DateTimePicker
     mode="date"
     value={date}
     display="spinner"
     onChange={(newdate)=>setData({...data,edate:newdate})}
    />


    {/* <TouchableOpacity onPress={() => setShowDatePicker(true)} style={styles.dateButton}>
      <Text>{date.toDateString()}</Text>
    </TouchableOpacity>
    {showDatePicker && (
      <DateTimePicker
        mode="date"
        value={date}
        display="spinner"
        onChange={handleDateChange}
      />
    )}


    <TouchableOpacity onPress={() => setShowTimePicker(true) } style={styles.picker}>
  <Text>{data.estime ? data.estime : 'Select Start Time'}</Text>
</TouchableOpacity>
{showTimePicker && (
  <DateTimePicker
    mode="time"
    is24Hour={true}
    value={data.estime ? new Date(data.estime) : new Date()} // Set the initial value or the previously selected time
    display="spinner"
    onChange={handleTimeChange}
  /> 
)}


<TouchableOpacity onPress={() => setShoweeTimePicker(true)}>
  <Text>{data.eetime ? data.eetime : 'Select end Time'}</Text>
</TouchableOpacity>
{showeeTimePicker && (
  <DateTimePicker
    mode="time"
    is24Hour={true}
    value={data.eetime ? new Date(data.eetime) : new Date()} // Set the initial value or the previously selected time
    display="spinner"
    onChange={handleeeTimeChange}/>
    )} */}
      <Button title="Submit" onPress={handleSubmit} style={styles.submitButton} />
      </KeyboardAvoidingView>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  imageUploadButton: {
    marginBottom: 20,
    alignItems: 'center',
    justifyContent: 'center',
    width: 200,
    height: 200,
    backgroundColor: '#f2f2f2',
    borderRadius: 8,
  },
  imagePreview: {
    width: '100%',
    height: '100%',
    borderRadius: 8,
  },
  selectImageText: {
    fontSize: 16,
    color: '#888',
  },
  input: {
    marginBottom: 12,
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
  },
  picker: {
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
  },
  dateButton: {
    marginBottom: 12,
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    backgroundColor: '#f2f2f2',
    justifyContent: 'center',
    alignItems: 'center',
  },
  dateButtonText: {
    fontSize: 16,
    color: '#333',
  },
  submitButton: {
    marginTop: 16,
    backgroundColor: '#007AFF',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 4,
  },
  submitButtonText: {
    fontSize: 16,
    color: '#fff',
    textAlign: 'center',
  },
  
});

export default EventInsert;
