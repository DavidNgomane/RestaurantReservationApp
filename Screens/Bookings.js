import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const Bookings = ({navigation}) => {
  return (
    <View  style={styles.container}>
      <Text style={styles.text}>
                Welcome to Bookings
            </Text>

        <View style={styles.Tab}>
        <FontAwesome name="home" size={24} color="white" onPress = {() => navigation.navigate("Home")}/>
        <FontAwesome name="list" size={24} color="white" style={{marginLeft: 130}} onPress = {() => navigation.navigate("Bookings")}/>
        <FontAwesome name="user-circle-o" size={24} color="white" style={{marginLeft: 130}} onPress = {() => navigation.navigate("Profile")}/>
        </View>
    </View>
  )
}
export default Bookings;

const styles = StyleSheet.create({
  container: {
    flex: 1,
},
  Tab: {
    flexDirection: "row",
    height: 70,
        width: 360,
        backgroundColor: "#2e8b57",
        padding: 15,
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
        alignSelf: "center",
        position: 'absolute',
        bottom: 0, 
  },
  text: {
    marginTop: 300,
    fontSize: 20,
    justifyContent: "center",
    textAlign: "center",
    color: "black",
    fontWeight: "bold"
},
});