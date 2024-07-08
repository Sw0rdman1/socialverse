import { Slot, Stack } from 'expo-router'
import { StyleSheet, Text, View } from 'react-native'

const AuthLayout = () => {
    return (
        <Stack>
            <Stack.Screen
                name="sign-in"
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="register"
                options={{ headerShown: false }}
            />
        </Stack>
    )
}

export default AuthLayout

const styles = StyleSheet.create({})