import React, {useEffect, useState} from 'react'
import { withNavigation } from 'react-navigation'
import {heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen'
import { View, StyleSheet, Text, FlatList, Image, TouchableOpacity } from 'react-native'

import api from '../services/api'

export default function RecipeList({receitas}){
    
    return(

        <View>
            
            {
                receitas.map(item => (
                    <View  style={styles.container} key={item.url}>
                        <Image style={styles.thumbnail} source={{uri: item.img}}/>
                        <Text style={styles.title}>{item.titulo}</Text>
                        <Text style={styles.description}>{item.description}</Text>
                    </View>
                ))
            }

            
           
        </View>
    )

}

const styles = StyleSheet.create({
    container:{
        backgroundColor: "#fff",
        marginBottom: 10,
        shadowColor:'#000',
        shadowOpacity:0.2,
        shadowOffset:{
            width:4,
            height: 4

        },
        elevation: 4,
    },

    thumbnail:{
        flex: 1,
        width: wp('88%'),
        height: hp('35%'),
        resizeMode: 'cover',
        alignSelf: "center",
    },

    title:{
        color: "#1c1c1c",
        alignSelf: "center",
        fontWeight: "bold",
        marginTop: 10,
        paddingHorizontal: 15,
        fontSize: 18,
    },

    description:{
        alignSelf: "center",
        textAlign: "justify",
        marginTop: 10,
        marginBottom: 15,
        paddingHorizontal: 15,
    }


});
