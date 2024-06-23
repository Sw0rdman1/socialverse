import { StyleSheet } from 'react-native'
import React from 'react'
import { Text, View } from '@/components/ui/Themed'
import Button from '@/components/ui/Button'
import { useRouter } from 'expo-router'
import NewPostForm from '@/components/newPost/NewPostForm'

const NewPostScreen = () => {
    return (
        <View style={styles.container}>
            <NewPostForm />
        </View>
    )
}

export default NewPostScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
})