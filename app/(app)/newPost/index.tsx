import { StyleSheet } from 'react-native'
import React from 'react'
import { Text, View } from '@/components/ui/Themed'
import Button from '@/components/ui/Button'
import { useRouter } from 'expo-router'

const NewPostScreen = () => {

    const router = useRouter();

    const handlePress = () => {
        router.navigate('(home)')
    }

    return (
        <View style={styles.container}>
            <Button text="Create Post" onPress={handlePress} />
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