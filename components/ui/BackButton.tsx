import React from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native'
import { View } from './Themed'
import { Ionicons } from '@expo/vector-icons'
import { useNavigation } from 'expo-router'
import { useColors } from '@/hooks/useColors'

const BackButton = () => {
    const { goBack } = useNavigation()
    const { text, backgroundSecondary } = useColors()
    return (
        <TouchableOpacity onPress={goBack} style={[styles.container, { backgroundColor: text }]}>
            <Ionicons name="arrow-back" size={22} color={backgroundSecondary} />
        </TouchableOpacity>
    )
}

export default BackButton

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        top: 20,
        left: 20,
        zIndex: 100,
        borderRadius: 50,
        padding: 5
    },

})