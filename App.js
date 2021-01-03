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
import dArray from './data';

const App: () => React$Node = () => {
  return (
    <View>
      {/* <Page1and2 /> */}
      <Page3 />
    </View>
  );
};

export default App;
