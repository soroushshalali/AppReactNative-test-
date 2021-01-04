import React from 'react';
import { View, Text, Pressable, TextComponent, StyleSheet } from 'react-native';
import { useEffect, useState } from 'react/cjs/react.development';



const LifeCycle = () => {
    const [btn1, setBtn1] = useState('');
    const [btn2, setBtn2] = useState('');

    useEffect(() => {
        console.log('result btn1' + btn1);
    }, [btn1]);

    useEffect(() => {
        console.log('result btn2' + btn2);
    }, [btn2]);

    return (
        <View>

            <Pressable
                style={styles.btn}
                onPress={() => {
                    setBtn1('YES')
                }}
            >
                <Text>YES</Text>
            </Pressable>

            <Pressable
                style={styles.btn}
                onPress={() => {
                    setBtn2('NO')
                }}
            >
                <Text>NO</Text>
            </Pressable>


        </View>
    );
}

export default LifeCycle;

const styles = StyleSheet.create({
    btn: {
        borderWidth: 2,
        marginVertical: 10,
        backgroundColor: '#bbb',
        width: 100
    }

});