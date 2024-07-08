import { StyleSheet } from 'react-native'
import { Text, TextInput, TouchableOpacity, View } from '../ui/Themed';
import { useState } from 'react';
import Entypo from '@expo/vector-icons/Entypo';
import { useColors } from '@/hooks/useColors';

interface InputFieldsProps {
    value: string;
    setValue: (value: string) => void;
    password?: boolean;
}

const EmailInput: React.FC<InputFieldsProps> = ({ value, setValue }) => {
    const [error, setError] = useState<string | null>(null)
    const { tint } = useColors()

    const validateEmail = () => {
        const re = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
        if (value.length > 0 && !re.test(value)) {
            setError('Please enter a valid email address')
        } else {
            setError(null)
        }
    }


    return (
        <View style={styles.inputContainer}>
            <Entypo style={styles.icon} name="email" size={24} color={tint} />
            <TextInput
                style={styles.input}
                placeholder='Email'
                value={value}
                onChangeText={(text) => {
                    if (error) setError(null)
                    setValue(text)
                }}
                keyboardType='email-address'
                autoCapitalize='none'
                autoComplete='email'
                onBlur={validateEmail}
            />
            <Text style={styles.error}>{error}</Text>
        </View>
    )
}

const PasswordInput: React.FC<InputFieldsProps> = ({ value, setValue, password }) => {
    const [error, setError] = useState<string | null>(null)
    const { tint } = useColors()

    const validatePassword = () => {
        if (value.length > 0 && value.length < 6) {
            setError('Password must be at least 6 characters')
        } else {
            setError(null)
        }
    }

    return (
        <View style={styles.inputContainer}>
            <Entypo style={styles.icon} name="lock" size={24} color={tint} />
            <TextInput
                style={styles.input}
                placeholder='Password'
                value={value}
                onChangeText={(text) => {
                    if (error) setError(null)
                    setValue(text)
                }}
                secureTextEntry={true}
                onBlur={validatePassword}
            />
            <Text style={styles.error}>{error}</Text>
        </View>
    )
}

const FullNameInput: React.FC<InputFieldsProps> = ({ value, setValue }) => {
    const [error, setError] = useState<string | null>(null)
    const { tint } = useColors()

    const validatefullName = () => {
        if (value.length > 0 && value.length < 6) {
            setError('Display Name must be at least 6 characters')
        } else {
            setError(null)
        }
    }

    return (
        <View style={styles.inputContainer}>
            <Entypo style={styles.icon} name="user" size={24} color={tint} />
            <TextInput
                style={styles.input}
                placeholder='Display Name'
                value={value}
                onChangeText={(text) => {
                    if (error) setError(null)
                    setValue(text)
                }}
                onBlur={validatefullName}
            />
            <Text style={styles.error}>{error}</Text>
        </View>
    )
}

interface AuthButtonProps {
    text: string;
    onPress: () => void;
}

const AuthButton: React.FC<AuthButtonProps> = ({ text, onPress }) => {
    const { tint } = useColors()
    return (
        <TouchableOpacity onPress={onPress} style={[styles.button, { backgroundColor: tint }]}>
            <Text style={styles.buttonText}>{text}</Text>
        </TouchableOpacity>
    )

}

export { EmailInput, PasswordInput, FullNameInput, AuthButton }

const styles = StyleSheet.create({
    inputContainer: {
        width: '100%',
        height: 80,
        marginBottom: 10,
    },
    inputTitle: {
        height: 25,
        fontSize: 16,
        marginLeft: 5,
        color: 'gray',
        fontWeight: 'bold',
    },
    input: {
        height: 50,
        width: '100%',
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 10,
        padding: 12,
        fontSize: 20,
        paddingLeft: 42,
    },
    error: {
        color: 'red',
        fontSize: 12,
        marginLeft: 5,
        marginTop: 5,
        fontWeight: '600',
    },
    icon: {
        position: 'absolute',
        top: 13,
        left: 10,
        zIndex: 100,
    },
    button: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
    },
    buttonText: {
        fontSize: 20,
        color: 'white',
        fontWeight: 'bold',
    },
})