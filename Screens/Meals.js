import React, { useState,  useEffect } from 'react';
import { Text, View, StyleSheet, TouchableOpacity,ScrollView,FlatList, TextInput } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { auth, db } from '../data/firebase'
import constant from 'expo-constants';

const MealsPage = ({route, navigation}) => {

  const[users, setUsers] = useState(null);

  const { name, adminuid } = route.params;

  const Bookings = async () => {
    const uid = auth?.currentUser?.uid;
    const querySanp = await db.collection('Meals').where("adminuid", "==", uid).get();
    const allusers = querySanp.docs.map(docSnap=>docSnap.data())
  
    console.log(allusers)
    setUsers(allusers)
  }
  
  useEffect(() => {
  Bookings()
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
                <Image source = {image1} resizeMode="stretch" style={styles.image1}/>
            <View  style={styles.HeadText}>
                <Text style={styles.TextRestaurant}>
                  Meals
                </Text>
            </View>
        </View>

        <FlatList 
            showsVerticalScrollIndicator={false}
              data={users}
              renderItem={({ item }) => {
                return(
                  <ScrollView>
                    <View {users:item, adminuid: item.uid}>
                      <Item image={item.image} name={item.name} description={item.price}/>
                    </View>
                </ScrollView>)}
            }
                keyExtractor = {(item) => item.id}
            />

        </View>
    )
}
export default MealsPage;

const styles = StyleSheet.create({
    container: {
        flex: 1,
       height: "100%",
       width: "100%"
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
})

