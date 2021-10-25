import React from 'react';
import { View, StyleSheet, TouchableOpacity, SafeAreaView, Image, Text } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import constant from 'expo-constants';

const image1 = {uri: "https://images.unsplash.com/photo-1599458448510-59aecaea4752?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTZ8fHJlc3RhdXJhbnR8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"};

const BookingForm = ({route, navigation}) => {

  return (
    <View  style={styles.container}>
      <View style={styles.Top}>
          <Image source = {image1} resizeMode="stretch" style={styles.image1}/>
          <View  style={styles.HeadText}>
            <Text style={styles.TextRestaurant}>
              Book Table
            </Text>
          </View>
        </View>

        <View style={styles.preview}>
          <Text style={{fontSize: 30, color: "#2e8b57"}}>Restaurant: {route.params.resto}</Text>
          <Text >Number of people:{route.params.number}</Text>
          <Text >Date Preferred: {route.params.text}</Text>
          <Text >Time Preferred: {route.params.text1}</Text>
        </View>

        <View style={styles.Button}>
            <TouchableOpacity  onPress = {() => navigation.navigate("Finished")} style={styles.submitButton}>
              <Text style={styles.submitText}>Confirm Booking</Text>
            </TouchableOpacity>
        </View>
      

        <View style={styles.Tab}>
        <FontAwesome name="home" size={24} color="white" onPress = {() => navigation.navigate("Home")}/>
        <FontAwesome name="list" size={24} color="white" style={{marginLeft: 130}} onPress = {() => navigation.navigate("Bookings")}/>
        <FontAwesome name="user-circle-o" size={24} color="white" style={{marginLeft: 130}} onPress = {() => navigation.navigate("Profile")}/>
        </View>
    </View>
  )
}
export default BookingForm;

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
  Top:{
    marginTop: constant.statusBarHeight,
    height: 150,
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
  },
  image1: {
    flex: 1, 
    justifyContent: "center", 
    borderBottomRightRadius: 20, 
    borderBottomLeftRadius: 20
  },
  HeadText:{
    marginTop: -60,
    justifyContent: "center",
    textAlign: "center",
    alignSelf: "center",
    height: 80,
  },
  TextRestaurant:{
    fontSize: 40,
    color: "white",
    height: 150,
  },
  preview: {
    justifyContent: "center",
    alignSelf: "center",
    borderRadius: 20,
    height: 250,
    width: 300,
    backgroundColor: "#d3d3d3",
    padding: 12,
    marginTop: 40,
    paddingBottom: 25,
  },
  submitButton: {
    justifyContent: "center",
    alignSelf: "center",
    borderRadius: 20,
    height: 70,
    width: 300,
    backgroundColor: "#2e8b57",
},
submitText:{
  textAlign: "center",
  fontSize: 25,
  color: "#ffffff"
},
Button:{
  margin: 45
}
});