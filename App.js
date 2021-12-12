import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import LoginContext from './components/LoginContext';
// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';
import HomeScreen from './components/HomeScreen';

export default function App() {
  return (
    <HomeScreen/>
  );
}
