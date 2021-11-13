import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { auth, db } from '../data/firebase';


const Profile = ({navigation}) => {

  const Signout = () => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        navigation.navigate('LoginPage');
        const uid = user.uid;
        // ...
      } else {
        
        // ...
      }
    });
}

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress = {Signout}>
        <Text style={styles.text}>
          Signout
        </Text>
      </TouchableOpacity>
      
        <View style={styles.Tab}>
        <FontAwesome name="home" size={24} color="white" onPress = {() => navigation.navigate("Home")}/>
        <FontAwesome name="list" size={24} color="white" style={{marginLeft: 130}} onPress = {() => navigation.navigate("Bookings")}/>
        <FontAwesome name="user-circle-o" size={24} color="white" style={{marginLeft: 130}} onPress = {() => navigation.navigate("Profile")}/>
        </View>
    </View>
  )
}
export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
},
  Tab: {
    flexDirection: "row",
    height: 70,
        width: 360,
        marginTop: 10,
        backgroundColor: "#2e8b57",
        padding: 15,
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
        alignSelf: "center",
        position: 'absolute',
        bottom: 0, 
  },
  text: {
    //marginTop: 300,
    fontSize: 20,
    justifyContent: "center",
    textAlign: "center",
    color: '#fff',
    fontWeight: "bold"
},
button: {
  backgroundColor: '#2e8b57',
  width: 220,
  borderRadius: 20,
  padding: 15,
  marginLeft: 70,
  marginTop: 300,
}
});