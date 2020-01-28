import React from 'react'
import {Text, StyleSheet, Image, TextInput, ImageBackground, TouchableOpacity, View} from 'react-native'
import {SearchBar} from 'react-native-elements'
import {MaterialIcons} from '@expo/vector-icons';

import logo from './assets/logo.png'
export default function Home(){
    return (
            <View style={styles.view}>
                <Text style={styles.title}>Pesquise receitas...</Text>
                
                
                <View style={styles.formGroup}>
                    <TextInput style={styles.input} 
                        autoCapitalize="words" 
                        autoCorrect={false}
                        placeholder="Batata, carne, cebola..."
                        autoFocus={true}
                        keyboardType="web-search"
                    />
                    <TouchableOpacity style={styles.btn}>
                        <MaterialIcons size={45} name='search' color="#fff"/>
                    </TouchableOpacity>
                </View>
                
            </View>
    )
}

const styles = StyleSheet.create({
    view:{
        flex:1,
        paddingTop:50,
        padding: 20,
        backgroundColor:'#ececec'
    },
    title:{
        color:'#202020',
        fontWeight: '700',

        fontSize:50
    },
    img:{
        width: 200,
        height: 200,
        marginBottom:30,
    },
    formGroup:{
        flexDirection:'row',
    },
    input:{
        flex:5,
        width: '100%',
        padding:15,
        borderTopLeftRadius:25,
        fontSize:20,
        fontWeight: '300',
        backgroundColor: '#fff',
        shadowColor:'#000',
        shadowOpacity:0.4,
        shadowOffset:{
            width:4,
            height: 6

        },
        elevation: 2,
    },
    btn:{
        flex:1,
        backgroundColor:'#eb0',
        alignContent:'center',
        justifyContent:"center",
        elevation:3,
        borderBottomRightRadius:25,
        padding:6,
    }
})
