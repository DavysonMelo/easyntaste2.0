import React from 'react'
import {View, ActivityIndicator, Modal} from 'react-native'


export default function LoadingModal({visible}){
    return(
        <View  style={{marginTop: 22}}>
            <Modal
                transparent={true}
                visible={visible}
                animationType="slide"
            >
                <View style={{marginTop: 22, padding:50}}>
                    <ActivityIndicator size="large" color="#0000ff" />
                </View>
            </Modal>
        </View>
    )
}