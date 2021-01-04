import React from 'react';
import { View, Text, Image, StyleSheet, StatusBar, ScrollView, TextInput, Pressable } from 'react-native';
import { Formik } from "formik";
 import * as yup from 'yup';


 let schema = yup.object().shape({
     email: yup.string().required().email('inco E-Mail'),
     password:yup.string().min(8,'min 8')
 });

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
            <Formik
                 validationSchema={schema}
                initialValues={{ email: '', password: '' }}
                onSubmit={(values, actions) => {
                    setTimeout(() => {
                        alert(JSON.stringify(values, null, 2))
                        actions.setSubmitting(false);
                    }, 500)
                }}
            >
                {
                    ({ values, errors, handleChange, handleBlur, handleSubmit }) => {
                        return (

                            <View>
                                <View style={styles.thirdStyle} >
                                    <TextInput
                                        keyboardType='email-address'
                                        placeholder='EMAIL'
                                        textContentType='emailAddress'
                                        style={styles.inputBox}
                                        onBlur={handleBlur('email')}
                                        onChangeText={handleChange('email')}
                                        value={values.email}
                                    />
                                    <Text>{errors.email}</Text>
                                    <TextInput
                                        placeholder='Password'
                                        textContentType='password'
                                        secureTextEntry
                                        style={[styles.inputBox, { marginVertical: 15 }]}
                                        onBlur={handleBlur('password')}
                                        onChangeText={handleChange('password')}
                                        value={values.password}
                                    />
                                    <Text>{errors.password}</Text>
                                </View>
                                <View style={{ paddingHorizontal: '5%' }}>
                                    <Pressable
                                        style={styles.press}
                                        onPress={handleSubmit}
                                    >
                                        <Text style={{ color: '#fff', fontSize: 20 }} >Log- in</Text>
                                    </Pressable>
                                </View>
                            </View>

                        )
                    }
                }
            </Formik>

        </ScrollView >
    );
}
const styles = StyleSheet.create({
    firstStyle: {
        height: 200
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
        borderRadius: 10,
        marginBottom: 20
    }
});



export default LoginScreen;