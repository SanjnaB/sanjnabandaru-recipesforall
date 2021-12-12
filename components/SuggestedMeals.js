import React from "react";
import { StyleSheet, Text, View, SafeAreaView, SectionList, StatusBar, Button } from "react-native";
import * as Font from 'expo-font';

const DATA = [
  {
    title: "Vegan",
    data: ["Chia Seed Pudding", "Potato Stuffed Peppers", "Lentil Bolognese"]
  },
  {
    title: "Vegetarian",
    data: ["Pesto Egg & Cheese Bagel", "Smoky Tempeh, Apple, and Arugula Sandwich", "Tofu Thai Green Curry"]
  },
  {
    title: "Pescatarian",
    data: ["Garlic-Herb Salmon Sliders", "Baked Tilapia with Parmesan Crust","Avocado Crab Boats"]
  },
  {
    title: "Keto",
    data: ["Bacon Egg Muffins", "Garlic, Butter, Parmesan Zucchini Noodles", "Buffalo Chicken Soup"]
  }
];

const Item = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

const App = () => (
    <SafeAreaView style={styles.container}>
    <SectionList
      sections={DATA}
      keyExtractor={(item, index) => item + index}
      renderItem={({ item }) => <Item title={item} />}
      renderSectionHeader={({ section: { title } }) => (
        <Text style={styles.header}>{title}</Text>
      )}
    />
  </SafeAreaView>
  );

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    marginHorizontal: 16
  },
  item: {
    backgroundColor: "#f5deb3",
    padding: 20,
    marginVertical: 8
  },
  header: {
    fontSize: 32,
    backgroundColor: "#fff"
  },
  title: {
    fontSize: 24
  }
});


export default App;
