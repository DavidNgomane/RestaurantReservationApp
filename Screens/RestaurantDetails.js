import React, {useState} from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image, ImageBackground, FlatList } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import constant from 'expo-constants';
import { Description, HotItems } from '../data/flatListData';
import { ScrollView } from 'react-native-gesture-handler';
import { auth, db, storageRef, fb } from '../data/firebase'

const image1 = {uri: "https://images.unsplash.com/photo-1560053608-13721e0d69e8?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTV8fHJlc3RhdXJhbnR8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"};

const Item = ({ description }) => {
  return (
        <View style={styles.descriptionContainer}>
          <Text >{description}</Text>
        </View>
  );
}

const Items = ({ image }) => {
  return (
    <View style={styles.listItem2} >
        <Image source={{uri:image}} style={styles.img}/>
    </View>
  );
}

const RestaurantDetails = ({route, navigation}) => {

  const [users, setUsers] = useState('');
  
  const { adminuid } = route.params;
  useState(() => {
    let { users,  } = route.params;
    setUsers(users)
    console.log(users)
  }, [users])

  return (
      <ScrollView style={styles.container} >
      <View style={styles.Top}>
        <ImageBackground source = {image1} resizeMode="cover" style={styles.image1}>
            <View  style={styles.HeadText}>

              <TouchableOpacity style={{marginHorizontal: -10}}>
                <FontAwesome name="arrow-circle-left" size={35} color="white" onPress = {() => navigation.navigate("Home")}/>
              </TouchableOpacity>

              <Text style={styles.TextRestaurant}>
                {users.name}
              </Text>

            </View>
        </ImageBackground>
      </View>

        <TouchableOpacity style={styles.bookTable} onPress = {() => navigation.navigate("BookingForm", {
          name: users.name,
          adminuid: adminuid,
          }
          )}>
          <Text style={styles.bookText}>Book Table</Text>
        </TouchableOpacity>

        <View>

              <FlatList 
                data={Description}
                renderItem={({ item }) => {
                  return(
                        <Item description={item.description}/>
                  )}
              }
                  keyExtractor = {(item) => item.id}
              />
          </View>

          <Text style={styles.RestaurantList}>
            Hot items on the menu
          </Text>

          <FlatList 
                horizontal={true}
                data={ HotItems }
                renderItem={({ item }) => {
                  return(
                  <Items image={item.image}/>
                  )}
              }
                  keyExtractor = {(item) => item.id}
              />

              <View style={{flexDirection: "row", justifyContent: "center"}}>
                <TouchableOpacity style={styles.menuButton}  onPress = {() => navigation.navigate("MealsPage", {
                  name: users.name,
                  adminuid: adminuid,
                })}>
                  <Text style={styles.menuText}>View Meals</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.menuButton}  onPress = {() => navigation.navigate("Drinks", {
                  name: users.name,
                  adminuid: adminuid,
                })}>
                  <Text style={styles.menuText}>View Drinks</Text>
                </TouchableOpacity>
              </View>
          </ScrollView>
    
  )
}
export default RestaurantDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
},
menuButton: {
  justifyContent: "center",
    alignSelf: "center",
    borderRadius: 20,
    height: 60,
    width: 150,
    backgroundColor: "#2e8b57",
    margin: 10
},
menuText: {
  textAlign: "center",
    fontSize: 15,
    color: "#ffffff"
},
  Tab: {
    flex: 1,
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
    marginHorizontal: 10, 
      
  },
  TextRestaurant:{
    fontSize: 40,
    color: "white",
    height: 150,
    paddingHorizontal: 90
   
  },
  bookTable:{
    justifyContent: "center",
    alignSelf: "center",
    borderRadius: 20,
    height: 120,
    width: 300,
    backgroundColor: "#2e8b57",
    margin: 10

  },
  bookText:{
    textAlign: "center",
    fontSize: 35,
    color: "#ffffff"
  },
  descriptionContainer: {
    justifyContent: "center",
    alignSelf: "center",
    borderRadius: 20,
    height: 120,
    width: 300,
    backgroundColor: "white",
    padding: 10,
    marginBottom: 20,
    borderWidth: 1
  },
  RestaurantList: {
    fontSize: 30, 
    color: "#2e8b57", 
    fontWeight: "bold",
    paddingLeft: 15,
  },
  listItem2: {
    paddingLeft: 15,
    paddingTop: 10,
    flex: 1,
    flexDirection: "column",
    borderRadius: 8,
  
  },
  img: {
    height: 100,
    width: 100,
    borderRadius: 10
  }
});