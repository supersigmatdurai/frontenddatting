import React, { useState } from 'react';
import { Button, Image, View, ScrollView } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import {useRoute } from '@react-navigation/native';
import styles from './Styles'

export default function ImagePickerExample() {
  const [image, setImage] = useState(null);
  const route = useRoute();
  // const {eventdata} = route.params;

  // const eventDate = new Date(eventdata.estime);

  // // Format the date and time
  // const formattedDate = eventDate.toLocaleDateString();
  // const formattedTime = eventDate.toLocaleTimeString();

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  return (
    <View>
    <ScrollView>
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
      <Button title="Pick an image from camera roll" onPress={pickImage} />
    </View>
    {/* {eventdata.map((event) => (
          <View key={event.event_id} style={styles.cardcontainer}>
            <TouchableOpacity onPress={() => handlePress(event.event_id,event.category)}>
              <Image
                source={{ uri: event.imageurl }}
                resizeMode="cover"
                style={styles.image}
              />
              <View style={styles.desc}>
                <Text style={styles.textcol}>{event.category}</Text>
                <Text style={styles.textcolin}>{event.description}</Text>
                <Text>Date: {formattedDate}</Text>
                <Text>Time: {formattedTime}</Text>
              </View>
            </TouchableOpacity>
          </View>
        ))} */}
        </ScrollView>
    </View>
  );
}
