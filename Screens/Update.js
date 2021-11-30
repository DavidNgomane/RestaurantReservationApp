import React, { useState } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image, Modal, Pressable, TextInput, ActivityIndicator } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import constant from 'expo-constants';
import * as ImagePicker from 'expo-image-picker';
import { auth, db, storageRef, fb } from '../data/firebase'

const UpdatePage = ({navigation}) => {

const [image, setImage] = useState('');
const [uploading, setUploading] = useState(false);

const pickImage = async () => {
  let result = await ImagePicker.launchImageLibraryAsync({
    mediaTypes: ImagePicker.MediaTypeOptions.Images,
    allowsEditing: true,
    aspect: [4, 3],
    quality: 1,
  });

  console.log(result.uri);

  if (!result.cancelled) {
    setUploading(true)
    const blob = await new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.onload = function () {
        resolve(xhr.response);
      };
      xhr.onerror = function () {
        reject(new TypeError("Network request failed!"));
      };
      xhr.responseType = "blob";
      xhr.open("GET", result.uri, true);
      xhr.send(null);
    });

    const ref = storageRef.child(new Date().toISOString());
    const snapshot = (await ref.put(blob)).ref
      .getDownloadURL()
      .then((imageUrl) => {
        setImage(imageUrl);
        console.log(
          imageUrl,
          "this is setting the image too storage before 3"
        );

        blob.close();
        setUploading(false)
      });
  }
};

  const update = () => {
    try {
        const uid = auth?.currentUser?.uid;
        return db
          .collection("users")
          .doc(uid)
          .update({
            uid: uid,
            image: image,
          })
          .then((snapShot) => navigation.navigate("Profile"))
          .catch((error) => {
            const errorMessage = error.message;
            alert("Couldn't update resturant Details");
          });
        // ...
      } catch (error) {
        const errorMessage = error.message;
        alert("Failed to update restaurant");
      }
  }


return (
    <View  style={styles.container}>
      <View style={{marginLeft: 30, marginTop: 40}}>
        <FontAwesome name="window-close" size={24} color="#2e8b57" onPress={() => navigation.navigate("Profile")}/>
      </View>
      <Text style={{textAlign: "center", color: "#2e8b57", fontSize: 25, marginBottom: 10, marginTop: 10}}>update profile picture</Text>

    <View style={{justifyContent: "center", alignItems: "center"}}>
        <TouchableOpacity  onPress={pickImage}>
        <Image style={styles.image} source={{uri: image}} value={image}/>
              
        <FontAwesome name="camera" size={24} color="black" style={{marginLeft: 80, marginTop: -25}}/>
        </TouchableOpacity> 
    </View>

          <View style={{paddingTop: 55}}>
            <TouchableOpacity style={styles.touch1} onPress={update}>
            {!uploading ? (<Text style={styles.text2}>Update Details</Text>)  : (
                    <ActivityIndicator
                      size="large"
                      color="black"
                      style={{ alignSelf: "center" }}
                    />
                  )}
            </TouchableOpacity>  
            </View>
    </View>
    )
}
export default UpdatePage;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: "100%",
        width: "100%"
    },
    image: {
        width: 120,
        height: 120,
        borderRadius: 200,
        borderWidth: 2,
        backgroundColor: "gray"
      },
    TextField: {
        justifyContent: "center",
        alignSelf: "center",
        borderRadius: 20,
        height: 95,
        width: 250,
        backgroundColor: "#ffffff",
        padding: 10,
        paddingTop: 3,
        marginTop: 25
      },
    input: {
        height: 40,
        margin: 12,
        padding: 10,
      },
    touch1: {
        backgroundColor: '#2e8b57',
        width: 220,
        borderRadius: 20,
        padding: 15,
        marginLeft: 70,
      },
    text2: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center'
      },
})