import React, { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import * as Font from 'expo-font';

const CalorieCalculator = (props) => {

  const [breakfast, setBreakfast] = useState('0');
  const [lunch, setLunch] = useState('0');
  const [dinner, setDinner] = useState('0');
  const [debugging, setDebugging] = useState(false);
  const [total, setTotal] = useState('0');


  let debugView = '';

  if (debugging) {
    debugView = (
      <View>
        <Text> Breakfast Calories: {breakfast} </Text>
        <Text> Lunch Calories: {lunch} </Text>
        <Text> Dinner Calories: {dinner} </Text>
        <Text> Total Calories: {total} </Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.header}>
        Calculate total calories for one day = {props.total}
      </Text>
      <TextInput
        style={styles.textinput}
        placeholder="breakfast"
        onChangeText={(text) => {
          setBreakfast(parseFloat(text));
        }}
      />
      <TextInput
        style={styles.textinput}
        placeholder="lunch"
        onChangeText={(text) => {
          setLunch(parseFloat(text));
        }}
      />
      <TextInput
        style={styles.textinput}
        placeholder="dinner"
        onChangeText={(text) => {
          setDinner(parseFloat(text));
        }}
      />
      <Button
        color="#b22222"
        title="Calculate Total Calories"
        onPress={() =>
          setTotal(
            parseFloat(breakfast) + parseFloat(lunch) + parseFloat(dinner)
          )
        }
      />

      <Text> Total Daily Caloric Intake: {total} </Text>

      <Button
        title={(debugging ? 'hide' : 'show') + ' debug info'}
        color="#d2b48c"
        onPress={() => setDebugging(!debugging)}
      />
      <Text> {debugView} </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#f5deb3',
    borderColor: '#d2b48c',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textinput: {
    margin: 20,
    fontSize: 20,
  },
  header: {
    fontSize: 35,
    color: 'brown',
  },
});

export default CalorieCalculator;
