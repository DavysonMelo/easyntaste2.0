import React from 'react'
import {View, ActivityIndicator, Modal, StyleSheet} from 'react-native'

export default function LoadingModal({visible}){
    return(
        <View  style={styles.root}>
            <Modal
                transparent={true}
                style={styles.modal}
                visible={visible}
                animationType="fade"
            >
                <View style={{marginTop: 22, padding:50}}>
                    <ActivityIndicator size="large" color="#0000ff" />
                </View>
            </Modal>
        </View>
    )
}

const styles = StyleSheet.create({
    root:{
        marginTop:hp('50%'),
    },
    modal:{
        backgroundColor:'#000000'
    }
})