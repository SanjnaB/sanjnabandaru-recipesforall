import React, { useState, useEffect } from "react";
import { Button, StyleSheet, Text, SafeAreaView, ScrollView, Image, TextInput, View } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';

const Favorites = (props) => {
  const [info, setInfo] = useState({name:''});
  const [name, setName] = useState('');
  useEffect(() => {getData()},[])


  const getData = async () => {
        try {
          const jsonValue = await AsyncStorage.getItem('@recipe')
          let data = null
          if (jsonValue!=null) {
            data = JSON.parse(jsonValue)
            setInfo(data)
            setName(data.name)
            console.log('set name of recipe')
          } else {
            console.log('just read a null value from Storage')
            setInfo({})
            setName("")
          }
        } catch(e) {
          console.log("error in getData ")
          console.dir(e)
        }
  }

  const clearAll = async () => {
        try {
          console.log('in clearData')
          await AsyncStorage.clear()
        } catch(e) {
          console.log("error in clearData ")
          console.dir(e)
        }
  }

  const storeData = async (value) => {
        try {
          const jsonValue = JSON.stringify(value)
          await AsyncStorage.setItem('@recipe', jsonValue)
          console.log('just stored '+jsonValue)
        } catch (e) {
          console.log("error in storeData ")
          console.dir(e)
        }
  }

      return (
        <SafeAreaView style={styles.container}>
          <ScrollView style={styles.scrollView}>
            <View style={styles.container2}>
              <Text style={styles.header2}>
                 Search for a recipe!
              </Text>
           <View style={{flex:5, flexDirection:'row'}}>
          <Image style={{flex: 1, width: 400, height: 400, resizeMode: 'contain'}} source={{uri:'https://i.pinimg.com/564x/12/d3/a8/12d3a812c0146f71798688d79b4bfc90.jpg'}} />
            </View>

              <TextInput
                    style={styles.textinputname}
                    placeholder="Name of Recipe"
                    onChangeText={text => {setName(text) }}
                    value={name} />
              <Button
                    color='brown' title="Save Default Recipe Title, Don't Display"
                    onPress = {() => {
                         console.log("saving profile");
                         const theInfo = {name:"recipe name"}
                         console.log('data='+JSON.stringify(theInfo))
                         storeData(theInfo)
                       }}
                />
              <Button
                    color='brown' title='Save this recipe!'
                    onPress = {() => {
                         console.log("Saving recipe");
                         const theInfo = {name:name}
                         console.log(`theInfo=${theInfo}`)
                         setInfo(theInfo)
                         console.log('data='+JSON.stringify(theInfo))
                         storeData(theInfo)
                       }} />
              <Button
                      color='brown' title='Remove sampled recipe!'
                      onPress = {() => {
                      console.log('Removing...');
                      clearAll()
                      getData()
                       }} />
              <Button
                    color='brown' title='Retrieve recipe!'
                    onPress = {() => {
                    console.log('Retrieving...');
                    getData() }} />



              <Text>
               Name={name}{JSON.stringify(info)}
              </Text>
              </View>
        </ScrollView>
   </SafeAreaView>
      );
    }
  const styles = StyleSheet.create ({
    container: {
      flex: 1,
      flexDirection:'column',
      backgroundColor: '#d2b48c',
      alignItems: 'center',
      justifyContent: 'center',
    },
    textinputname:{
      margin:20,
      fontSize:20
    },
    header: {
      fontSize:40,
      color:'brown'
    },
    container2: {
      flex: 1,
      flexDirection:'column',
      backgroundColor: '#f5deb3',
      alignItems: 'center',
      justifyContent: 'center',
      borderColor: "#d2b48c",
      margin:"20%",
    },
    textinput:{
     margin:20,
     fontSize:16,
     textAlign: 'center',
   },
    centered:{
     flex:15,
     flexWrap: 'wrap',
     alignItems: 'stretch',
     justifyContent: 'center',
     borderWidth: 5,
     borderColor: 'brown',
  },
    header2: {
      fontSize:30,
      color:'#f5deb3',
      textAlign: 'center',
    },
  });
export default Favorites;
