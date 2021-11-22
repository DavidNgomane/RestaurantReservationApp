import React from 'react';
import { View, StyleSheet, TouchableOpacity, Image, Text, ImageBackground } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import constant from 'expo-constants';
import moment from 'moment';

const image1 = {uri: "https://images.unsplash.com/photo-1599458448510-59aecaea4752?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTZ8fHJlc3RhdXJhbnR8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"};

const BookingForm = ({route, navigation}) => {

  return (
    <View  style={styles.container}>
       <View style={styles.Top}>
        <ImageBackground source = {image1} resizeMode="cover" style={styles.image1}>
            <View  style={styles.HeadText}>
            <TouchableOpacity style={{marginHorizontal: -10}}>
                <FontAwesome name="arrow-circle-left" size={30} color="white" onPress = {() => navigation.navigate("BookingForm")}/>
              </TouchableOpacity>

              <Text style={styles.TextRestaurant}>
                Make a Reservation
              </Text>
            </View>
        </ImageBackground>
      </View>

        <View style={styles.preview}>
          <Text style={{fontSize: 30, color: "#2e8b57"}}>Restaurant: {route.params.resto}</Text>
          <Text >Number of people:{route.params.number}</Text> 
          <Text >Date Preferred: {moment(route.params.date).format("DD/MM/YYYY")}</Text>
          <Text >Time Preferred: {moment(route.params.time).format("hh:mm a")}</Text>
          <Text >Status: {route.params.status}</Text>
        </View>

        <View style={styles.Button}>
            <TouchableOpacity  onPress = {() => navigation.navigate("Finished")} style={styles.submitButton}>
              <Text style={styles.submitText}>Confirm Booking</Text>
            </TouchableOpacity>
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
    flexDirection: "row",
    marginVertical: -20,
    justifyContent: "center",
    textAlign: "center",
    alignSelf: "center",
    height: 80,
    marginHorizontal: 30,
  },
  TextRestaurant:{
    fontSize: 40,
    color: "white",
    height: 120,
    justifyContent: "center",
    textAlign: "center",
    alignSelf: "center",
  },
  preview: {
    justifyContent: "center",
    alignSelf: "center",
    borderRadius: 20,
    height: 250,
    width: 300,
    backgroundColor: "white",
    padding: 12,
    marginTop: 40,
    paddingBottom: 25,
    borderWidth: 1
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