/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React, { useState, useEffect } from 'react';
import {View} from 'react-native'
import Page1and2 from './pages/Page1and2'
import Page3 from './pages/Page3'
import LoginScreen from './pages/LoginScreen'
import dArray from './data';
import LifeCycle from './pages/LifeCycle';

const App: () => React$Node = () => {
  return (
    <View>
      {/* <Page1and2 /> */}
      {/* <Page3 /> */}
      {/* <LoginScreen /> */}
      <LifeCycle />
    </View>
  );
};

export default App;
