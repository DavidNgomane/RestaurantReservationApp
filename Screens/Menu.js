import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const Menu = ({route, navigation}) => {

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

      const Bookings = async () => {
        const uid = auth?.currentUser?.uid;
        const querySanp = await db.collection('Drinks').where("adminuid", "==", uid).get();
        const allusers = querySanp.docs.map(docSnap=>docSnap.data())
      
        console.log(allusers)
        setUsers(allusers)
      }
      
      useEffect(() => {
      Bookings()
      }, [])

    return(
        <View style={styles.container}>
            <Text>Welcome to Menu</Text>
        </View>
    );
}

export default Menu;

const styles = StyleSheet.create({
container:{
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 100
}
});