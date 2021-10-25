import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import HomePage from './Screens/HomePage';
import Bookings from './Screens/Bookings';
import Profile from './Screens/Profile';
import RestaurantDetails from './Screens/RestaurantDetails';
import BookingForm from './Screens/BookingForm';
import Preview from './Screens/Preview';
import Finished from './Screens/Finished';

const Stack = createNativeStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomePage} options= {{headerShown: false}}/>
        <Stack.Screen name="Bookings" component={Bookings} options= {{headerShown: false}}/>
        <Stack.Screen name="Profile" component={Profile} options= {{headerShown: false}}/>
        <Stack.Screen name="RestaurantDetails" component={RestaurantDetails} options= {{headerShown: false}}/>
        <Stack.Screen name="BookingForm" component={BookingForm} options= {{headerShown: false}}/>
        <Stack.Screen name="Preview" component={Preview} options= {{headerShown: false}}/>
        <Stack.Screen name="Finished" component={Finished} options= {{headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};


export default  MyStack;