import React, { useState } from 'react'
import { View, Text, ImageBackground, TouchableOpacity, StyleSheet, TextInput } from 'react-native';
import { auth, db } from '../data/firebase';

const image = {uri: "https://images.unsplash.com/photo-1574936145840-28808d77a0b6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjR8fHJlc3RhdXJhbnR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"}

const LoginPage = ({navigation}) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
         
    const loginUser = () => {
        if(!email || !password) {
            alert('Please add all the fields!')
        }

        auth.signInWithEmailAndPassword(email, password)
            .then((userCredential) => {
                // Signed In
                navigation.navigate('Home');

                const user = userCredential.user;
                console.log('User signed in! : ' , user.uid) // Checking if it works
            })
            .catch((error) => {
                alert('Something went wron! : ' + error);
            });
    }

    return (
            <View style={styles.container}>

              <View style={styles.Top}>
                <ImageBackground source = {image} resizeMode="cover" style={styles.image1}>
                  <View  style={styles.HeadText}>
                    <Text style={styles.TextRestaurant}>
                      Welcome
                    </Text>
                </View>
                </ImageBackground>
              </View>

              <View style={{backgroundColor: "#f5f5f5", height: "80%", borderTopLeftRadius: 30, marginTop: -28}}>
                <View style={styles.inner2}>
                    <Text style={styles.text}>
                        LOGIN
                    </Text>

                    <View style={{marginTop: 40}}>
                        <View style={styles.TextField} >
                          <View  style={{flex: 1, flexDirection: "row", marginHorizontal: 3, margin: 15}}>
                            <Text style={{flex: 1, flexDirection: "row", marginHorizontal: 10,fontWeight: "bold"}}>Email Address</Text>
                          </View>
                            <TextInput 
                            style={styles.inputBox} 
                            placeholder='example@email.com'
                            color='#000'
                            onChangeText={email => setEmail(email)}
                            />
                        </View>

                    <View style={styles.TextField} >
                      <View style={{flex: 1, flexDirection: "row", marginHorizontal: 3, margin: 15}}>
                        <Text style={{flex: 1, flexDirection: "row", marginHorizontal: 10,fontWeight: "bold"}}>Password</Text>
                      </View>
                        <TextInput 
                            style={styles.inputBox} 
                            placeholder='**********' 
                            color='#000'
                            onChangeText={password => setPassword(password)}
                            secureTextEntry
                        />
                    </View>
                </View>

                    </View>
                    
                <View style={{paddingTop: 55}}>
                    <TouchableOpacity style={styles.touch1} onPress={loginUser}>
                        <Text style={styles.text2}>LOGIN</Text>
                    </TouchableOpacity>

                    <View style={{flexDirection: 'row', paddingLeft: 60, paddingTop: 10}}>
                        <Text style={{color: '#000000', fontSize: 16}}>Don't have an account? </Text>
                        <TouchableOpacity onPress={() => navigation.navigate('RegisterPage')}>
                            <Text style={{color: '#2e8b57', fontSize: 16, textDecorationLine: "underline"}}>Register here</Text>
                        </TouchableOpacity>
                    </View>   
                </View>
              </View>
            </View>
      
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: "100%",
    width: "100%"
},
  inner2: {
    //margin: 30,
    marginTop: 50,
  },
  touch1: {
    //margin: 30,
    backgroundColor: '#2e8b57',
    width: 220,
    borderRadius: 20,
    padding: 15,
    marginLeft: 70,
  },
  text: {
    color: '#2e8b57',
    fontSize: 40,
    paddingLeft: 5,
    textAlign: "center"
  },
  text2: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  TextField: {
    justifyContent: "center",
    alignSelf: "center",
    borderRadius: 20,
    height: 95,
    width: 300,
    backgroundColor: "#ffffff",
    padding: 10,
    paddingTop: 3,
    marginTop: 10
  },
    inputBox: {
        width: '85%',
        //borderWidth: 1,
        height: 30,
        borderRadius: 20,
        borderColor: '#FFF',
        paddingLeft: 15,
    },
    image: {
      flex: 1, 
      justifyContent: "center", 
  },
  HeadText: {
          marginTop: 20,
          justifyContent: "center",
          textAlign: "center",
          alignSelf: "center",
          height: 80,
  },
  TextRestaurant:{
      fontSize: 40,
      color: "white",
      height: 150,
      fontWeight: "bold"
    },
    Top:{
      //marginTop: constant.statusBarHeight,
      height: "30%",
      borderBottomRightRadius: 20,
      borderBottomLeftRadius: 20,
    },
    image1: {
      flex: 1, 
      justifyContent: "center", 
      height: "100%",
      flexDirection: "row"
    },
});

export default LoginPage;
