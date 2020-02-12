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
                        <View style={styles.textArea}>
                            <Text style={styles.title}>{item.titulo}</Text>
                            <Text style={styles.description}>{item.description}</Text>
                        </View>
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
        width: wp('90%'),
        shadowColor:'#000',
        shadowOpacity:0.2,
        shadowOffset:{
            width:4,
            height: 4

        },
        elevation: 4,
    },

    thumbnail:{
        width: wp('90%'),
        height: hp('30%'),
        alignSelf: "center",
    },
    textArea:{
        padding:25,
    },  
    title:{
        color: "#1c1c1c",
        fontWeight: "bold",
        marginTop: 10,
        fontSize: 20,
        textTransform:"uppercase",
    },
    
    description:{
        color:"#1c1c1c",
        alignSelf: "center",
        textAlign: "justify",
        marginTop: 20,
        marginBottom: 15,
    }


});
