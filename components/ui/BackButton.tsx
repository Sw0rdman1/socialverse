import React from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native'
import { View } from './Themed'
import { Ionicons } from '@expo/vector-icons'
import { useNavigation } from 'expo-router'
import { useColors } from '@/hooks/useColors'

const BackButton = () => {
    const { goBack } = useNavigation()
    const { text } = useColors()
    return (
        <TouchableOpacity onPress={goBack} style={styles.container}>
            <View style={styles.circle}>
                <Ionicons name="arrow-back" size={22} color={text} />
            </View>
        </TouchableOpacity>
    )
}

export default BackButton

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        top: 60,
        left: 20,
        zIndex: 100,
    },
    circle: {
        width: 40,
        height: 40,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
})