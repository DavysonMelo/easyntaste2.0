import React from 'react'
import {Text, StyleSheet, Image, TextInput, ImageBackground, TouchableOpacity, View} from 'react-native'
import {SearchBar} from 'react-native-elements'
import {MaterialIcons} from '@expo/vector-icons';

import illustration from './assets/SearchIllustration.png'
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
                <Text style={styles.subTitle}>Sugestões...</Text>
                <View style={styles.cardSuggestions}>
                    <Image source={illustration} style={styles.cardIllustration}/>
                    <Text style={styles.cardText}>Nenhuma sugestão disponível. Realize sua primeira pesquisa ;)</Text>
                </View>
            </View>
    )
}

const styles = StyleSheet.create({
    view:{
        flex:1,
        paddingTop:50,
        padding: 20,
        backgroundColor:'#ececec',
        flexDirection:"column"
    },
    title:{
        color:'#202020',
        fontWeight: '700',

        fontSize:50
    },
    subTitle:{
        color:'#474747',
        fontWeight: '700',
        top: 40,
        fontSize:25
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
    },
    cardSuggestions:{
        backgroundColor:'#fff',
        padding: 20,
        alignItems:"center",
        flexDirection:"row",
        top:50,
        shadowColor:'#000',
        borderTopLeftRadius:25,
        borderBottomRightRadius:25,
        shadowOpacity:0.2,
        shadowOffset:{
            width:4,
            height: 6

        },
        elevation:1,
    },
    cardIllustration:{
        width: 170,
        height: 170,
        flex:1,
    },
    cardText:{
        flex:1,
        padding: 7,
        textAlign:"justify",
        fontSize: 16,
        fontStyle:"italic",
        color:'#2e2e2e',
    }
})
