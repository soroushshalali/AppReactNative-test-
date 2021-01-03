import React, { useState, useEffect } from 'react';
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
  VirtualizedList,
  TouchableWithoutFeedback,
  TouchableHighlight,
  Pressable,
  Modal,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import dArray from '../data';
let page = 0;
let count = 5;
const Page1and2 = () => {
  const [scrollEnabled, setScrollEnabled] = useState(false);
  const [color, setColor] = useState(false);
  const [counterClick, setCounterClick] = useState(0);

  //infinitList
  const [isloading, setIsLoading] = useState(true);
  const [item, setItem] = useState([]);
  const [fetchStatus, setFetchStatus] = useState(false);
  const [modalVisible, setModalVisible] = useState(true);

  useEffect(() => {
    setItem([...item, ...dArray.slice(page, count)]);
    setIsLoading(false);
  }, []);

  const fetchData = () => {
    setFetchStatus(true);
    page = count;
    count = count + 5;
    setItem([...item, ...dArray.slice(page, count)]);
    setFetchStatus(false);
  }
  //**********************

  return (
    <ScrollView nestedScrollEnabled >

      <Text style={{ fontFamily: 'Audiowide-Regular', fontSize: 20 }} >Test soroush </Text>


    

      <Pressable 
        onPress={()=>setModalVisible(!modalVisible)}  
        style={styles.showModal}    
      >
        <Text>Show Modal</Text>
      </Pressable>
      <Modal
        animationType='slide'
        visible={modalVisible}
        hardwareAccelerated={true}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
        }}
      >
        <View>
          <View>
            <Text>Hello World!</Text>

            <TouchableHighlight
            activeOpacity={1}
            style={styles.hideModal}
              onPress={() => {
                setModalVisible(!modalVisible);
              }}
            >
              <Text>Hide Modal</Text>
            </TouchableHighlight>
          </View>
        </View>
      </Modal>

      <FlatList
        /* infinitList */
        data={item}
        keyExtractor={(item, index) => item.id + index}
        ListFooterComponent={() => {
          return (
            <TouchableOpacity
              style={{
                backgroundColor: 'green'
              }}
              activeOpacity={0.1}
              onPress={() => fetchData()}
            >
              <Text>more Data</Text>
            </TouchableOpacity>
          );
        }}
        renderItem={({ item }) => {
          return (
            <View>
              <Text>{item.id}.{item.name}</Text>
            </View>
          );
        }}
      />

      <TouchableOpacity activeOpacity={1} style={{ borderWidth: 2, marginVertical: 10 }} onPress={() => setColor(!color)} >
        <Text style={{ color: color ? 'red' : 'blue' }} >click TochableOpacity</Text>
      </TouchableOpacity>

      <TouchableWithoutFeedback activeOpacity={0} onPress={() => setColor(!color)}>
        <Text style={{ color: color ? 'red' : 'blue' }} >click TochableWithoutFeedback</Text>
      </TouchableWithoutFeedback>

      <TouchableHighlight underlayColor='#aaa' onPress={() => setColor(!color)} >
        <Text style={{ color: color ? 'red' : 'blue' }} >click TouchableHighlight</Text>
      </TouchableHighlight>

      <Pressable
        style={{ borderWidth: 2, marginVertical: 10 }}
        onPress={() => setCounterClick(counterClick + 1)}
        onLongPress={() => setCounterClick(counterClick - 1)}
        delayLongPress={1000}
        // pressRetentionOffset={{ top: 100 }}
        hitSlop={{ bottom: 10 }}
      >
        <Text>Click Pressable</Text>
      </Pressable>
      <Text>{counterClick}</Text>


      <View>
        <Text>VirtualizedList</Text>
        <VirtualizedList
          horizontal
          data={dArray}
          renderItem={({ item }) => {
            return (
              <View style={{ borderWidth: 5, borderColor: 'gray', borderRadius: 10, alignItems: 'center', marginVertical: 10 }} >
                <Text>{item.name}</Text>
                <Text>{item.family}</Text>
              </View>
            );

          }}
          getItem={(data, index) => {
            return data[index];
          }}
          getItemCount={(data) => { return data.length }}
        />
      </View>

      <FlatList
        horizontal
        keyExtractor={item => item.id}
        data={dArray}
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
        {dArray.map((item, index) => {
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
  },
  showModal:{
    backgroundColor: "#F194FF",
    borderRadius: 20,
    padding: 10,
    elevation: 10,
    width:150,
    alignItems:'center'
  },
  hideModal:{
    backgroundColor:'#F191AA',
    borderRadius:10,
    padding:10,
    width:150,
    alignItems:'center'
  }
});

export default Page1and2;
