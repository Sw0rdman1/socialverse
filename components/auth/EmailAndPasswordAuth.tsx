import { Alert, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { supabase } from '@/config/supabase'
import { DisplayNameInput, EmailInput, PasswordInput } from './InputFields'
import { router } from 'expo-router'
import { AppleAuth } from './AppleAuth'

const RegisterForm = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [displayName, setDisplayName] = useState('')

    async function signUpWithEmail() {
        const {
            error,
        } = await supabase.auth.signUp({
            email: email,
            password: password,
            options: { data: { full_name: displayName } },
        })

        if (error) Alert.alert(error.message)
    }



    return (
        <View style={styles.formContainer}>
            <EmailInput value={email} setValue={setEmail} />
            <PasswordInput value={password} setValue={setPassword} />
            <DisplayNameInput value={displayName} setValue={setDisplayName} />
            {/* <Button text='Register' onPress={signUpWithEmail} /> */}

        </View>
    )
}

const LogInForm = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    async function signInWithEmail() {

        const { error } = await supabase.auth.signInWithPassword({
            email: email,
            password: password,
        })

        if (error) Alert.alert(error.message)
        router.replace('/');
    }


    return (
        <View style={styles.formContainer}>
            <EmailInput value={email} setValue={setEmail} />
            <PasswordInput value={password} setValue={setPassword} />
            {/* <Button text='Log In' onPress={signInWithEmail} /> */}
        </View>
    )
}

const EmailAndPasswordAuth = () => {
    const [isRegister, setIsRegister] = useState(false)

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{isRegister ? 'Register' : 'Log In'}</Text>
            {isRegister ? <RegisterForm /> : <LogInForm />}
            <TouchableOpacity style={styles.changeFormContainer} onPress={() => setIsRegister(!isRegister)}>
                <Text style={styles.changeFormText}>{isRegister ? 'Already have an account? Log In' : 'Don\'t have an account? Register'}</Text>
            </TouchableOpacity>
            <Text style={styles.orText}>or</Text>
            <AppleAuth />
        </View>
    )
}

export default EmailAndPasswordAuth

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
    },
    title: {
        fontSize: 44,
        fontWeight: 'bold',
        marginBottom: 50,
    },
    changeFormContainer: {
        marginVertical: 20,
    },
    changeFormText: {
        color: '#007AFF',
    },
    orText: {
        marginBottom: 20,
        fontSize: 18,
        fontWeight: 'bold',
    },
    formContainer: {
        alignItems: 'center',
        width: '100%',
        paddingHorizontal: 30,
    },
    input: {
        height: 45,
        marginVertical: 10,
        padding: 10,
        borderWidth: 1,
        borderColor: 'gray',
        fontSize: 18,
        width: '100%',
    },
    button: {
        backgroundColor: 'black',
        padding: 10,
        paddingHorizontal: 60,
        borderRadius: 20,
        marginTop: 20,
    },
    buttonText: {
        fontSize: 18,
        color: 'white',
    },

})