import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image, FlatList,ScrollView,  TextInput } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { auth, db, storageRef, fb } from '../data/firebase';
import * as ImagePicker from 'expo-image-picker';


const Profile = ({navigation}) => {

  const[users, setUsers] = useState(null)
  const [image, setImage] = useState('');
  const uid = auth.currentUser.uid;


  const getUsers = async () => {
          const querySanp = await db.collection('users').where('uid', '==', uid).get()
          const allusers = querySanp.docs.map(docSnap=>docSnap.data())
          console.log(allusers)
          setUsers(allusers)
  }

  useEffect(() => {
      getUsers()
  }, [])


const Item = ({ image, name, surname, email }) => {
  return (
    <ScrollView >
    <View style={styles.listItem} >
        <Image style={styles.image} source={{uri: image}} value={image}/> 
          <View style={{marginLeft: 10, justifyContent: "center", alignItems: "center", marginTop: 10}}>
            <Text style={{fontWeight: "bold"}}>{name} {surname}</Text>
              <View style={{width: 230, justifyContent: "center", alignItems: "center"}}>
                <Text>{email}</Text>
              </View>
          </View>
    </View>
    </ScrollView>
  );
}

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
            <View>
                <FlatList 
                    showsVerticalScrollIndicator={false}
                    data={users}
                    renderItem={({ item }) => {
                        return(
                        <ScrollView>
                            <Item image={item.image} name={item.name} surname={item.surname} email={item.email}/>
                        </ScrollView>)}
                    }
                        keyExtractor = {(item) => item.id}
                />
            </View>

            <View style={{ justifyContent: "center", marginTop: 15}}>
                <TouchableOpacity style={styles.menuButton}  onPress = {() => navigation.navigate("UpdatePage")}>
                  <Text style={styles.menuText}>Update Details</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.menuButton}  onPress = {Signout}>
                  <Text style={styles.menuText}>Sign Out</Text>
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
},
listItem: {
  paddingLeft: 5,
  paddingTop: 5,
  margin: 3,
  flex: 1,
  //flexDirection: "row",
  borderRadius: 10,
  backgroundColor: "white",
  borderWidth: 1,
  justifyContent: "center",
  alignItems: "center",
  marginTop: 45,
},
image: {
  width: 120,
  height: 120,
  borderRadius: 200,
  borderWidth: 2,
  backgroundColor: "gray"
},
menuButton: {
  justifyContent: "center",
    alignSelf: "center",
    borderRadius: 20,
    height: 40,
    width: 150,
    backgroundColor: "#2e8b57",
    margin: 5,
    marginTop: 25
   
},
menuText: {
  textAlign: "center",
    fontSize: 15,
    color: "#ffffff"
},
});