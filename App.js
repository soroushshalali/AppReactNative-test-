/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TextInput,
  TouchableOpacity,
  FlatList,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const App: () => React$Node = () => {
  const [scrollEnabled, setScrollEnabled] = useState(false);
  const dataArray = [
    {
      id: '1',
      name: 'soroush',
      family: 'shalali'
    },
    {
      id: '2',
      name: 'soroush',
      family: 'shalali'
    },
    {
      id: '3',
      name: 'soroush',
      family: 'shalali'
    },
    {
      id: '4',
      name: 'soroush',
      family: 'shalali'
    },
    {
      id: '5',
      name: 'soroush',
      family: 'shalali'
    },
    {
      id: '6',
      name: 'soroush',
      family: 'shalali'
    },


  ];
  return (
    <ScrollView nestedScrollEnabled >
      <Text style={{ fontFamily: 'Audiowide-Regular', fontSize: 20 }} >Test soroush </Text>
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
        autoFocus={true}
        onChangeText={(text) => { alert(text) }}
      />

      <FlatList
        horizontal
        keyExtractor={item => item.id}
        data={dataArray}
        ListHeaderComponent={() => <Text>FlatList</Text>}
        ListFooterComponent={() => <Text>Footer for FlatList</Text>}
        ListHeaderComponentStyle={{ backgroundColor: 'green' }}
        renderItem={({ item }) => {
          return (
            <View style={{ borderWidth: 5, borderColor: 'gray', borderRadius: 10, alignItems: 'center', marginVertical: 10 }} >
              <Text>{item.name}</Text>
              <Text>{item.family}</Text>
            </View>
          );
        }} />

      <ScrollView nestedScrollEnabled horizontal scrollEnabled={scrollEnabled ? false : true} showsHorizontalScrollIndicator={false} >
        <View style={styles.view} ></View>
        <View style={styles.view} ></View>
        <View style={styles.view} ></View>
        <View style={styles.view} ></View>
        <View style={styles.view} ></View>
        <View style={styles.view} ></View>
        <View style={styles.view} ></View>
        <View style={styles.view} ></View>
        <View style={styles.view} ></View>
        <View style={styles.view} ></View>
        <View style={styles.view} ></View>
        <View style={styles.view} ></View>
        <View style={styles.view} ></View>
        <View style={styles.view} ></View>
        <View style={styles.view} ></View>
        <View style={styles.view} ></View>
        <View style={styles.view} ></View>
        <View style={styles.view} ></View>
        <View style={styles.view} ></View>
        <View style={styles.view} ></View>
        <View style={styles.view} ></View>
        <View style={styles.view} ></View>
        <View style={styles.view} ></View>
      </ScrollView>
      <TouchableOpacity onPress={() => { setScrollEnabled(!scrollEnabled) }} >
        <Text>click Me</Text>
      </TouchableOpacity>

      <ScrollView nestedScrollEnabled style={{ height: 300, borderWidth: 2 }}>
        {dataArray.map((item, index) => {
          return (
            <View key={index} style={{ borderWidth: 5, borderColor: 'gray', borderRadius: 10, alignItems: 'center', marginVertical: 10 }} >
              <Text>{item.name}</Text>
              <Text>{item.family}</Text>
            </View>
          );
        })}
      </ScrollView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  view: {
    height: 50,
    width: 50,
    backgroundColor: 'red',
    margin: 5,
  }
});

export default App;
