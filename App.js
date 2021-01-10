/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React, { useState, useEffect } from 'react';
import { View } from 'react-native'
import Page1and2 from './pages/Page1and2'
import Page3 from './pages/Page3'
//  import LoginScreen from './pages/LoginScreen'
import dArray from './data';
import LifeCycle from './pages/LifeCycle';
import Home from './pages/Home';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';



const Drawer = createDrawerNavigator();

const App: () => React$Node = () => {
  return (
    <NavigationContainer>
      {/* <Page1and2 /> */}
      {/* <Page3 /> */}
      {/* <LoginScreen /> */}
      {/* <LifeCycle /> */}

      <Drawer.Navigator>
        {/* <Drawer.Screen name="Home">
          {props => <Home {...props} id='id' />}
        </Drawer.Screen> */}
        <Drawer.Screen name='Home' component={Home} initialParams={{ text: 'Home!' }} />
        <Drawer.Screen name='lifecycle' component={LifeCycle} />
        <Drawer.Screen name='page1&2' component={Page1and2} />
        <Drawer.Screen name='Page3' component={Page3} options={{ gestureEnabled: false }} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default App;
