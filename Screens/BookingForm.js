import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity, SafeAreaView,ScrollView, 
TextInput, Text, ImageBackground } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import constant from 'expo-constants';
import { auth, db } from '../data/firebase'


const image1 = {uri: "https://images.unsplash.com/photo-1565650834520-0b48a5c83f43?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nzh8fHJlc3RhdXJhbnR8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"};

const BookingForm = ({route, navigation}) => {

  const { name, adminuid } = route.params;

  const [number, setNumber] = useState();
  const [date, setDate] = useState();
  const [time, setTime] = useState();

  const booking = () => {
    const user = auth.currentUser;
      navigation.navigate("Preview", {
        restaurant: name,
        number: number,  
        date: date,
        time: time,
        adminuid: adminuid
      });

          return db.collection('Bookings').add({
          uid: user.uid,
          restaurant: name,
          numberOfPeople: number,  
          date: date,
          time: time,
          adminuid: adminuid
      })
     
    
    .catch((error) => {
     
      const errorMessage = error.message;
      alert(errorMessage)
    });
  }

  return (
    <View  style={styles.container}>
      <View style={styles.Top}>
        <ImageBackground source = {image1} resizeMode="cover" style={styles.image1}>
            <View  style={styles.HeadText}>
              
            <TouchableOpacity style={{marginHorizontal: -10}}>
                <FontAwesome name="arrow-circle-left" size={30} color="white" onPress = {() => navigation.navigate("Home")}/>
              </TouchableOpacity>

              <Text style={styles.TextRestaurant}>
                Make a Reservation
              </Text>

            </View>
        </ImageBackground>
      </View>


        <SafeAreaView>
          <ScrollView>
          <View style={styles.TextField}>
            <View style={{flex: 1, flexDirection: "row", marginHorizontal: 3}}>
              <FontAwesome5 name="users" size={24} color="black" />
              <Text style={{flex: 1, flexDirection: "row", marginHorizontal: 10,fontWeight: "bold"}}>Number of People</Text>
              </View>
              <TextInput 
                keyboardType='numeric'
                style={styles.input}
                onChangeText={text => setNumber(text)}
                value={number}
              />
          </View>

          <View style={styles.TextField}>
            <View style={{flex: 1, flexDirection: "row", marginHorizontal: 3}}>
            <FontAwesome name="calendar" size={24} color="black" />
            <Text style={{flex: 1, flexDirection: "row", marginHorizontal: 10,fontWeight: "bold", }}>Date Preferred</Text>
            </View>
            <TextInput 
              style={styles.input}
              onChangeText={date => setDate(date)}
              value={date}
            />
          </View>

          <View style={styles.TextField}>
          <View style={{flex: 1, flexDirection: "row", marginHorizontal: 3}}>
          <FontAwesome name="clock-o" size={24} color="black" />
          <Text style={{flex: 1, flexDirection: "row", marginHorizontal: 10,fontWeight: "bold"}}>Time Preferred</Text>
          </View>
          <TextInput 
            style={styles.input}
            onChangeText={time => setTime(time)}
            value={time}
          />
          </View>

          <View style={styles.Button}>
            <TouchableOpacity  onPress = { booking } style={styles.submitButton}>
              <Text style={styles.submitText}>Submit</Text>
            </TouchableOpacity>
          </View>

          </ScrollView>
          </SafeAreaView>
    </View>
  )
}
export default BookingForm;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#d3d3d3",
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
  input: {
    height: 40,
    margin: 12,
    padding: 10,
    
  },
  TextField: {
    justifyContent: "center",
    alignSelf: "center",
    borderRadius: 20,
    height: 100,
    width: 300,
    backgroundColor: "#ffffff",
    padding: 10,
    paddingTop: 3,
    marginTop: 10,
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