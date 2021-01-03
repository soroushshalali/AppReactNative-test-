import React from 'react';
import { View, Text, Image, StyleSheet, StatusBar, ScrollView, TextInput, Pressable } from 'react-native';



const LoginScreen = () => {
    return (
        <ScrollView>
            <StatusBar hidden />

            <View style={styles.firstStyle} >
                <Image resizeMode='stretch' style={styles.imageLogin} source={require('../assets/images/login-image.jpg')} />
            </View>

            <View style={styles.secondStyle} >
                <Text style={{ fontSize: 30, textAlign: 'center' }} >Welcome!</Text>
            </View>
            <View style={styles.thirdStyle} >
                <TextInput
                    keyboardType='email-address'
                    placeholder='EMAIL'
                    textContentType='emailAddress'
                    style={styles.inputBox}
                />
                <TextInput
                    placeholder='Password'
                    textContentType='password'
                    secureTextEntry
                    style={[styles.inputBox, { marginVertical: 15 }]}
                />
            </View>

            <View style={{ paddingHorizontal: '5%' }}>
                <Pressable
                    style={styles.press}
                >
                    <Text style={{ color: '#fff' , fontSize:20 }} >Login</Text>
                </Pressable>
            </View>
        </ScrollView >
    );
}
const styles = StyleSheet.create({
    firstStyle: {
        height:200
    },
    imageLogin: {
        width: '100%',
        height: '100%'
    },
    secondStyle: {
        marginVertical: 15
    },
    thirdStyle: {
        paddingHorizontal: '5%'
    },
    inputBox: {
        backgroundColor: '#ddd',
        borderRadius: 5,
    },
    press: {
        backgroundColor: '#388e3c',
        alignItems: 'center',
        paddingVertical: 10,
        borderRadius: 10
    }
});



export default LoginScreen;