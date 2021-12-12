import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  StatusBar,
  TextInput,
  Button,
} from 'react-native';
import {useValue} from './ValueContext';
import * as Font from 'expo-font';

const Login = () => {
  const [firstName,setFirstName] = useState("");
  const [lastName,setLastName] = useState("");
  const [email,setEmail] = useState("");
  const [pass,setPass] = useState("");
  const [login,setLogin] = useState(false);

   return(
      <View style = {{backgroundColor: "white"}}>
         <TextInput style={styles.input}
              placeholder="First Name "
              onChangeText={text =>{ setFirstName(text)}}
         />
         <TextInput style={styles.input}
              placeholder="Last Name "
              onChangeText={text =>{ setLastName(text)}}
         />
         <TextInput style={styles.input}
              placeholder="Email "
              onChangeText={text =>{ setEmail(text)}}
         />

        <View>
        <TextInput secureTextEntry={true} style={styles.input}
              placeholder="Password "
              onChangeText={text =>{ setPass(text)}}

         />
        </View>
        <Button
            color='red' title='Sign Up'
            onPress = {() =>
              setLogin(true)}
        />
         <Text>Profile Created For:{firstName}{lastName}</Text>

      </View>
   )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
  paragraph: {
    margin: 24,
    marginTop: 0,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  scrollView: {
    marginHorizontal: 10,
  },
});


export default Login
