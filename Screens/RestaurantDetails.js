import React, {useState} from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image, FlatList } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import constant from 'expo-constants';
import { Description, HotItems } from '../data/flatListData';
import { ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';

//import { RestaurantData } from '../data/flatListData';

const image1 = {uri: "https://images.unsplash.com/photo-1522336572468-97b06e8ef143?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzF8fHJlc3RhdXJhbnR8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"};

const Item = ({ description }) => {
  return (
        <View style={styles.descriptionContainer}>
          <Text >{description}</Text>
        </View>
  );
}

const Items = ({ image }) => {
  return (
    <>
    <ScrollView>
    <View style={styles.listItem2} >
        <Image source={{uri:image}} style={styles.img}/>
    </View>
    </ScrollView>
    
    </>
  );
}

const RestaurantDetails = ({route, navigation}) => {

  const [RestaurantData, setRestaurantData ] = useState('');

  useState(() => {
    let { RestaurantData } = route.params;
    setRestaurantData(RestaurantData)
  }, [RestaurantData])

  return (
    
    <View style={styles.container}>
      <View style={styles.Top}>
                <Image source = {image1} resizeMode="stretch" style={styles.image1}/>
            <View  style={styles.HeadText}>
                <Text style={styles.TextRestaurant}>
                  {RestaurantData.name}
                </Text>
            </View>
        </View>
        <SafeAreaView>
          <ScrollView contentContainerStyle={{ flexGrow: 1}}>

        <TouchableOpacity style={styles.bookTable} onPress = {() => navigation.navigate("BookingForm", {
          name: RestaurantData.name,

          }
          )}>
          <Text style={styles.bookText}>Book Table</Text>
        </TouchableOpacity>

        <View style={{flex:1, padding: 10}}>

              <FlatList 
                data={Description}
                renderItem={({ item }) => {
                  return(
                    <ScrollView>
                        <Item description={item.description}/>
                  </ScrollView>)}
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
                    <ScrollView >
                  <Items image={item.image}/>
                  </ScrollView>)}
              }
                  keyExtractor = {(item) => item.id}
              />

          </ScrollView>
    </SafeAreaView>
      <View  style={styles.container}>
        <View style={styles.Tab}>
        <FontAwesome name="home" size={24} color="white" onPress = {() => navigation.navigate("Home")}/>
        <FontAwesome name="list" size={24} color="white" style={{marginLeft: 130}} onPress = {() => navigation.navigate("Bookings")}/>
        <FontAwesome name="user-circle-o" size={24} color="white" style={{marginLeft: 130}} onPress = {() => navigation.navigate("Profile")}/>
        </View>
      </View>
    </View>
    
  )
}
export default RestaurantDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  bookTable:{
    justifyContent: "center",
    alignSelf: "center",
    borderRadius: 20,
    height: 120,
    width: 300,
    backgroundColor: "#2e8b57",

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
    backgroundColor: "#d3d3d3",
    padding: 10
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