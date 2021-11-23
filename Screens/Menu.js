import React, { useState,  useEffect } from 'react';
import { Text, View, StyleSheet, useWindowDimensions, TouchableOpacity,ScrollView,FlatList, ImageBackground, TextInput } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { auth, db, storageRef, fb } from '../data/firebase'
import constant from 'expo-constants';
import { NavigationContainer } from '@react-navigation/native';
import Drinks from './Drinks'
import MealsPage from './Meals';
import { TabView, SceneMap } from 'react-native-tab-view';
import { MaterialIcons } from '@expo/vector-icons';

const image = {uri: "https://images.unsplash.com/photo-1522336572468-97b06e8ef143?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzF8fHJlc3RhdXJhbnR8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"};

const MenuPage = ({route, navigation}) => {

  const { adminuid } = route.params;
    return(
        <View style={styles.container}>
           <ImageBackground source={image} resizeMode="cover" style={styles.image}>

                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.buttons} onPress={() => navigation.navigate("MealsPage",{ adminuid: adminuid})}>
                    <MaterialIcons name="fastfood" size={24} color="white" />
                        <Text style={styles.btnText}>Meals</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.buttons} onPress={() => navigation.navigate("Drinks", { adminuid: adminuid})}>
                    <MaterialIcons name="fastfood" size={24} color="white" />
                    <Text style={styles.btnText}>Drinks</Text>
                    </TouchableOpacity>
                </View>

                </ImageBackground>
        </View>
    )
}
export default MenuPage;

const styles = StyleSheet.create({
    container: {
        flex: 1,
       height: "100%",
       width: "100%"
    },
    btnText: {
      textAlign: "center",
      fontSize: 35,
      color: "#ffffff",
  },
  buttons: {
      backgroundColor: "#2e8b57",
      borderRadius: 20,
      padding: 10,
      height: 120,
      width: 300,
      paddingTop: 25,
      margin: 25,
      alignSelf: "center",
  },
  buttonContainer:{
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      paddingTop: 160,
  },
  image: {
      flex: 1,
      justifyContent: "center"
  },
  HeadText:{
      marginTop: -60,
      justifyContent: "center",
      textAlign: "center",
      alignSelf: "center",
      height: 80,
},
})

