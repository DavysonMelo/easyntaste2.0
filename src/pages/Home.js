import React from 'react'
import {Text, StyleSheet, Image, TextInput, ImageBackground, } from 'react-native'


import logo from './assets/logo.png'
import bg from './assets/bg.jpg'
export default function Home(){
    return (
            <ImageBackground source={bg} style={styles.view}>
                <Image source={logo} style={styles.img}/>
                <Text style={styles.title}>Easy n' Taste</Text>
                <TextInput style={styles.input}/>
            </ImageBackground>
    )
}

const styles = StyleSheet.create({
    view:{
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
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
        width: 300,
        height: 50,
        backgroundColor:'#fff',
        borderRadius: 20,
        padding: 15   
    },
    title:{
        color:'#fff',
        fontSize: 30
    }
})
