import React from 'react'
import {Text, StyleSheet, Image, TextInput, ScrollView, TouchableOpacity, View, SafeAreaView} from 'react-native'
import {MaterialIcons} from '@expo/vector-icons';
import {heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen'
import illustration from './assets/SearchIllustration.png'
import logo from './assets/logo.png'
export default function Home(){
    return (
    <>
        <SafeAreaView style={styles.view}>
            <ScrollView>
                <View>
                    <View style={styles.header}>
                        <View style={styles.headerTitle}>
                            <Text style={styles.title}>Easy N' Taste</Text>
                            <Text style={styles.info}>Encotre as melhores receitas pesquisando pelos ingredientes que você tem em casa ;)</Text>
                        </View>
                        <Image source={logo} style={styles.headerLogo}/>
                    </View>

                    <View style={styles.formGroup}>
                        <TextInput style={styles.input} autoCapitalize="words" autoCorrect={false} placeholder="Batata, carne, cebola..." keyboardType="web-search" />
                        <TouchableOpacity style={styles.btn}>
                            <MaterialIcons size={45} name='search' color="#eb0" />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.suggestionsBlock}>
                        <Text style={styles.subTitle}>Sugestões...</Text>
                        <View style={styles.cardSuggestions}>
                            <Image source={illustration} style={styles.cardIllustration}/>
                            <Text style={styles.cardText}>Nenhuma sugestão disponível. Realize sua primeira pesquisa ;)</Text>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    </>
    )
}

const styles = StyleSheet.create({
    view:{
        flex:1,
        backgroundColor:'#fc1',
        flexDirection:"column"
    },
    header:{
        flexDirection:'row',
        backgroundColor: '#171717',
        padding: 30,
        paddingTop:100
    },
    headerTitle:{
        flex:1,
        flexDirection:"column",
        padding: 10,
        marginRight: 10
    },
    headerLogo:{
        flex:1,
        width: wp('20%'),
        height: hp('20%'),
        marginLeft: 10,
    },
    title:{
        color:'#ffc800',
        fontWeight: '700',
        fontSize:hp('3.2%')
    },
    info:{
        textAlign:"justify",
        fontSize: hp('2%'),
        fontStyle:"italic",
        color:'#fff',
    },
    subTitle:{
        color:'#fff',
        fontWeight: '700',
        fontSize:hp('3.2%')
    },
    img:{
        width: 200,
        height: 200,
        marginBottom:30,
    },
    formGroup:{
        flexDirection:'row',
        padding: 20,
        paddingTop:0,
    },
    input:{
        flex:5,
        width: '100%',
        padding:15,
        borderTopLeftRadius:25,
        fontSize:hp('2.5%'),
        fontWeight: '300',
        backgroundColor: '#fff',
        shadowColor:'#000',
        shadowOpacity:0.2,
        shadowOffset:{
            width:4,
            height: 4

        },
        elevation: 4,
        bottom:20,
    },
    btn:{
        flex:1,
        backgroundColor:'#fff',
        alignContent:'center',
        justifyContent:"center",
        elevation:4,
        borderBottomRightRadius:25,
        padding:6,
        
        bottom:20,

        shadowColor:'#000',
        shadowOpacity:0.2,
        shadowOffset:{
            width:4,
            height: 4

        },
    },
    suggestionsBlock:{
        padding: 20
    },  
    cardSuggestions:{
        backgroundColor:'#fff',
        padding: 20,
        alignItems:"center",
        flexDirection:"row",
        top:10,
        shadowColor:'#000',
        borderTopLeftRadius:25,
        borderBottomRightRadius:25,
        shadowOpacity:0.2,
        shadowOffset:{
            width:4,
            height: 4

        },
        elevation:6,
    },
    cardIllustration:{
        width: wp('15%'),
        height: hp('15%'),
        flex:1,
    },
    cardText:{
        flex:1,
        padding: 7,
        textAlign:"justify",
        fontSize: hp('2%'),
        fontStyle:"italic",
        color:'#2e2e2e',
    }
})
