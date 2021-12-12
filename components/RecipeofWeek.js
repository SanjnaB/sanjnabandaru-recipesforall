import React from "react";
import { SafeAreaView, View, Text, StyleSheet} from 'react-native'
import ScreenTemplate from '../containers/ScreenTemplate'
import * as Font from 'expo-font';
import PhotoID from './PhotoId'

const RecipeofWeek = () => {
  return (
    <ScreenTemplate

        footer={<Text  style={{fontSize:32}}>  </Text>}
    >
        <Text style={{fontSize:32, color: 'black'}}>Top voted recipe of the week by our community members.</
        Text>
        <PhotoID
            name="Creamy Tomato Spinach Pasta"
            imageurl="https://www.budgetbytes.com/wp-content/uploads/2013/07/Creamy-Tomato-Spinach-Pasta-close.jpg"
        />
    </ScreenTemplate>
  )
}

const styles=StyleSheet.create({
  centeredElt:{
    flex:1,
    flexDirection:'row',
    justifyContent:'space-around'
  },
  banner:{
    flexDirection:'row',
    justifyContent:'space-between'
  }
})

export default RecipeofWeek
