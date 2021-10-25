import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity, SafeAreaView,ScrollView, Image, TextInput, Text,  } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import constant from 'expo-constants';

const image1 = {uri: "https://images.unsplash.com/photo-1565650834520-0b48a5c83f43?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nzh8fHJlc3RhdXJhbnR8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"};

const BookingForm = ({route, navigation}) => {

  const { name } = route.params;


  const [number, setNumber] = useState();
  const [text, setText] = useState();
  const [text1, setText1] = useState();

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
            onChangeText={text => setText(text)}
            value={text}
          />
          </View>

          <View style={styles.TextField}>
          <View style={{flex: 1, flexDirection: "row", marginHorizontal: 3}}>
          <FontAwesome name="clock-o" size={24} color="black" />
          <Text style={{flex: 1, flexDirection: "row", marginHorizontal: 10,fontWeight: "bold"}}>Time Preferred</Text>
          </View>
          <TextInput 
            style={styles.input}
            onChangeText={text => setText1(text)}
            value={text1}
          />
          </View>

          <View style={styles.Button}>
            <TouchableOpacity  onPress = {() => navigation.navigate("Preview", {
              resto: name,
              number: number,
              text: text,
              text1: text1
            })} style={styles.submitButton}>
              <Text style={styles.submitText}>Submit</Text>
            </TouchableOpacity>
          </View>

          </ScrollView>
          </SafeAreaView>

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
    backgroundColor: "#d3d3d3",
    padding: 10,
    paddingTop: 3,
    marginTop: 10
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