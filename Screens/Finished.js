import React from 'react';
import { View, StyleSheet, TouchableOpacity, SafeAreaView, Image, Text } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import constant from 'expo-constants';

const image1 = {uri: "https://images.unsplash.com/photo-1583354608715-177553a4035e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTd8fHJlc3RhdXJhbnR8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"};

const BookingForm = ({navigation}) => {
  
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

        <View style={styles.danko}>
        <FontAwesome name="thumbs-o-up" size={200} color="#2e8b57" />
        <Text style={styles.dankoText}>Dankoo!!!</Text>
        </View>

        <View style={{margin: 30}}>
        <View style={styles.Button}>
            <TouchableOpacity  onPress = {() => navigation.navigate("Bookings")} style={styles.submitButton}>
              <Text style={styles.submitText}>View Bookings</Text>
            </TouchableOpacity>
        </View>

        <View style={styles.Button}>
            <TouchableOpacity  onPress = {() => navigation.navigate("Home")} style={styles.submitButton}>
              <Text style={styles.submitText}>Return to Home</Text>
            </TouchableOpacity>
        </View>
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
  margin: 15
},
danko:{
  justifyContent: "center",
  alignSelf: "center",
},
dankoText:{
  justifyContent: "center",
  alignSelf: "center",
  color: "#2e8b57",
  fontSize: 30
}
});