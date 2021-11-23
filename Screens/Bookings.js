import React, { useState,  useEffect } from 'react';
import { View, StyleSheet, TouchableOpacity, Image, Text, ImageBackground, FlatList } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { auth, db } from '../data/firebase'
import moment from 'moment';
import constant from 'expo-constants';

const image1 = {uri: "https://images.unsplash.com/photo-1599458448510-59aecaea4752?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTZ8fHJlc3RhdXJhbnR8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"};


const Bookings = ({navigation}) => {
  const[users, setUsers] = useState(null);

  const Bookings = async () => {
    const uid = auth?.currentUser?.uid;
    const querySanp = await db.collection('Bookings').where("uid", "==", uid).get();
    const allusers = querySanp.docs.map(docSnap=>docSnap.data())
  
    console.log(allusers)
    setUsers(allusers)
  }
  
  useEffect(() => {
  Bookings()
  }, [])

  const RenderCard = ({item}) => {
    return (
    
            <View style={styles.listItem}>
               <View style={{margin: 10}}>
                <Text>
                <Text style={{fontWeight: 'bold'}}>
                   Restaurant:
                </Text> {item.restaurant}
                </Text>
               <Text>
               <Text style={{fontWeight: 'bold'}}>
                  Guests:
                </Text> {item.numberOfPeople}
                </Text>        
                  <Text>
                    <Text style={{fontWeight: 'bold'}}>
                      Date: 
                      </Text>
                    {moment(item.date.toDate()).format('MM/DD/YYYY')}
                </Text> 
                <Text>
                    <Text style={{fontWeight: 'bold'}}>
                      Time: 
                      </Text>
                    {moment(item.date.toDate()).format('HH:mm a')}
                </Text> 

                <Text>
                <Text style={{fontWeight: 'bold'}}>
                   Status:
                </Text> {item.status}
                </Text>
               
              </View>
            </View>
    )
  }

  return (
    <View  style={styles.container}>
          <View style={styles.Top}>
        <ImageBackground source = {image1} resizeMode="cover" style={styles.image1}>
            <View  style={styles.HeadText}>
              <Text style={styles.TextRestaurant}>
               Bookings
              </Text>
            </View>
        </ImageBackground>
      </View>
      
       <View style={{paddingLeft: 15, paddingTop: 10, justifyContent: "center", alignItems: "center"}}>
          <View>
          <FlatList
            verticall={false} showsHorizontalScrollIndicator={false}
            data={users}
            renderItem={({item})=> {return <RenderCard item={item} key={item.key}/>}}
            keyExtractor={(item) =>item.uid}             
          />
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
listItem: {
  paddingLeft: 3,
  paddingTop: 3,
  //paddingBottom: ,
  //margin: 3,
  marginTop: 20,
  flex: 1,
  //flexDirection: "column",
  borderRadius: 10,
  backgroundColor: "white",
  borderWidth: 1
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
Top:{
  marginTop: constant.statusBarHeight,
  height: 150,
  borderBottomRightRadius: 20,
  borderBottomLeftRadius: 20,
},
});