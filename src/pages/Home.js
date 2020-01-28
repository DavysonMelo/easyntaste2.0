import React from 'react'
import {Text, StyleSheet, Image, TextInput, ImageBackground, TouchableOpacity, View} from 'react-native'

import {MaterialIcons} from '@expo/vector-icons';

import logo from './assets/logo.png'
import bg from './assets/bg.jpg'
export default function Home(){
    return (
            <ImageBackground source={bg} style={styles.view}>
                <Image source={logo} style={styles.img}/>
                <Text style={styles.title}>Easy n' Taste</Text>
                <View style={styles.formGroup}>
                    <View style={styles.inputLayout}>
                        <TextInput style={styles.input}/>
                    </View>
                    <View style={styles.btnGroup}>
                        <TouchableOpacity style={styles.button}>
                            <MaterialIcons name="search" size={30} color='#fff'/>
                        </TouchableOpacity>
                    </View>
                </View> 
            </ImageBackground>
    )
}

const styles = StyleSheet.create({
    view:{
        flex:1,
        alignItems: 'center',
        padding:20,
        paddingBottom:200
    },
    title:{
        color:'#fff'
    },
    img:{
        width: 200,
        height: 200,
        marginBottom:30,
    },
    input:{
        width: '100%',
        height: 50,
        backgroundColor:'#fff',
        borderRadius: 15,
        padding: 15,
        shadowColor:'#000',
        shadowOpacity:0.2,
        shadowOffset:{
            width:4,
            height: 4

        },
        elevation: 2,   
    },
    title:{
        color:'#fff',
        fontSize: 30
    },
    formGroup:{
        flex:1,
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'center'
    },
    inputLayout:{
        flex:4,
    },
    btnGroup:{
        height: 50,
        width: 50,
        marginLeft: 4
    },
    button:{
        flex: 1,
        height: 50,
        width: 50,
        padding: 7,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor: '#edb600',
        borderRadius: 25,
        shadowColor:'#000',
        shadowOpacity:0.2,
        shadowOffset:{
            width:4,
            height: 4

        },
        elevation: 2,
    }
})
