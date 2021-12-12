import React, { useState } from "react";
import { AppRegistry, Platform } from 'react-native';
import ValueProvider from './ValueContext';
import HomeScreen from './HomeScreen'

const App = () => {
  const data = {firstName:"first name", lastName:"last name", email:"null", password:"null"}

  return (
    <ValueProvider value={data}>
        <HomeScreen/>
    </ValueProvider>
  )
}

export default App
