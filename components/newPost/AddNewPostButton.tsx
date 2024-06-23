import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Entypo } from '@expo/vector-icons';
import { useColors } from '@/hooks/useColors';
import { useRouter } from 'expo-router';

const AddNewPostButton = () => {
    const { tint, background } = useColors();
    const router = useRouter();

    const handlePress = () => {
        router.push('/newPost');
    }

    return (
        <TouchableOpacity
            style={[styles.addPostStyle, { backgroundColor: tint, shadowColor: tint }]}
            onPress={handlePress}
        >
            <Entypo name="plus" size={32} color={background} />
        </TouchableOpacity>
    )
}

export default AddNewPostButton

const styles = StyleSheet.create({
    addPostStyle: {
        width: 60,
        height: 60,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 60,
        position: "absolute",
        bottom: 40,
        right: 25,
        zIndex: 100,
        shadowOffset: { width: 2, height: 3 },
        shadowOpacity: 0.65,
        shadowRadius: 3,

    },
})