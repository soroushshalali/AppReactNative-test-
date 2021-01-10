import React, { useState, useEffect } from 'react';
import { Image, View, Text, StyleSheet, Alert, Pressable, ScrollView, RefreshControl, StatusBar, Button } from 'react-native';

import {
    Header,
    LearnMoreLinks,
    Colors,
    DebugInstructions,
    ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import dArray from '../data';

const Page3 = (props) => {
    const showAlert = () => {
        Alert.alert(
            'title For Alert',
            'message For Alert',
            [
                {
                    text: 'More',
                    onPress: () => console.log('More')
                },
                {
                    text: 'Cancel',
                    onPress: () => console.log('cancel')
                },
                {
                    text: 'OK',
                    onPress: () => console.log('OK')
                },
            ],
            { cancelable: true }
        );
    }

    return (
        <View>
            <StatusBar
                // backgroundColor='red'
                // hidden
                barStyle='dark-content'
            // translucent
            />
            <View>
                <Image style={styles.logo} resizeMode='contain' source={require('../assets/images/react-native.png')}
                    
                />
            </View>
            <Pressable
                onPress={showAlert}
                style={styles.showAlert}
            >
                <Text>show Alert</Text>
            </Pressable>
            {/* stackNavigator */}
            <Button title='go to Home' onPress={()=>props.navigation.dispatch(StackActions.popToTop())} />
        </View>
    );
};

const styles = StyleSheet.create({
    showAlert: {
        backgroundColor: '#ddd',
        borderRadius: 40,
        borderWidth: 2,
        borderColor: '#aaa',
        width: 100,
        paddingVertical: 5,
        alignItems: 'center',
        marginVertical: 10
    },
    logo:{
        width: 150,
        height: 150,
    }

});

export default Page3;
