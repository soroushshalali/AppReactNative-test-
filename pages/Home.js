import React from 'react';
import { View, Text, Button, Pressable, StyleSheet } from 'react-native';
// import { AccessAlarm, ThreeDRotation } from '@material-ui/icons';




const Home = (props) => {
    return (
        <View>
            <Text>{props.route.params.text}</Text>

            {/* <Text>{props.id}</Text> */}
            <Pressable style={{ width: 100, borderWidth: 2, backgroundColor: 'green', paddingHorizontal: 10 }}
                onPress={() => props.navigation.navigate('lifecycle')}
            ><Text style={{ color: '#ddd' }} >LifeCycle</Text></Pressable>
            <Pressable  style={styles.drawer} onPress={()=>props.navigation.openDrawer()} >
                <Text>Drawer</Text>
            </Pressable>
            <Button title='page1&2' onPress={() => props.navigation.navigate('page1&2')} />

            <Button title='page3' style={styles.page3BTN} onPress={() => props.navigation.navigate('Page3')} />
        </View>
    );
}

export default Home;
const styles = StyleSheet.create({
    page3BTN: {
        marginTop: 10,
    },
    drawer:{
        marginVertical:10,
        backgroundColor:'#fa2',
        paddingVertical:10,
        width:100,
        alignItems:'center',
        borderWidth:1,
    }
});