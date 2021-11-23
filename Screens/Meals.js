import React, { useState,  useEffect } from 'react';
import { Text, View, StyleSheet, ImageBackground, Image, TouchableOpacity,ScrollView,FlatList, TextInput } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { auth, db, storageRef, fb} from '../data/firebase'
import constant from 'expo-constants';

const image1 = {uri: "https://media.istockphoto.com/photos/stuffed-turkey-for-thanksgiving-holidays-picture-id1278088432?b=1&k=20&m=1278088432&s=170667a&w=0&h=G-GizQuAXSUQKEdFZ4SKZN543t-mvc_MkjRBypjaVak="};

export default function MealsPage  ({route, navigation}) {

  const[users, setUsers] = useState(null)
  //const uid = auth.currentUser.uid;
  const { adminuid } = route.params;
    
  const getUsers = async () => {
    const querySanp = await db.collection('meals').where('uid', '==',adminuid).onSnapshot((querySanp) => {
      const allusers = querySanp.docs.map(docSnap=>docSnap.data())
      console.log(allusers)
      setUsers(allusers)})
    
}

useEffect(() => {
getUsers()
}, [])
const Item = ({ image, name, price }) => {
  return (
    <ScrollView >
    <View style={styles.listItem} >
        <Image source={{uri:image}} style={styles.img}/>
          <View style={{marginLeft: 10}}>
            <Text style={{fontWeight: "bold"}}>{name}</Text>
              <View style={{width: 230}}>
                <Text>{price}</Text>
              </View> 
          </View>
    </View>
    </ScrollView>
  );
}

    return(
        <View style={styles.container}>
          <View style={styles.Top}>
        <ImageBackground source = {image1} resizeMode="cover" style={styles.image1}>
            <View  style={styles.HeadText}>

              <TouchableOpacity style={{marginHorizontal: -10}}>
                <FontAwesome name="arrow-circle-left" size={35} color="white" onPress = {() => navigation.navigate("RestaurantDetails", {
                name: users.name,
                adminuid: adminuid})}/>
              </TouchableOpacity>

              <Text style={styles.TextRestaurant}>
                Meals
              </Text>

            </View>
        </ImageBackground>
      </View>
           
      <View style={{backgroundColor: "#2e8b57"}}>
        <FlatList 
            showsVerticalScrollIndicator={false}
              data={users}
              renderItem={({ item }) => {
                return(
                  <ScrollView>
                      <Item image={item.image} name={item.name} price={item.price}/>
                </ScrollView>)}
            }
                keyExtractor = {(item) => item.id}
            />
        </View>
         </View> 
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
       height: "100%",
       width: "100%"
    },
      listItem: {
        paddingLeft: 5,
        paddingTop: 5,
        margin: 3,
        flex: 1,
        flexDirection: "row",
        borderRadius: 10,
        backgroundColor: "white",
        borderWidth: 1
      },
      img: {
        height: 80,
        width: 80,
        borderRadius: 10
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
        marginHorizontal: 10, 
          
      },
      TextRestaurant:{
        fontSize: 40,
        color: "white",
        height: 150,
        paddingHorizontal: 90
       
      },
})

