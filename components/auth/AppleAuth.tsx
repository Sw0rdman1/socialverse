import { useAuth } from '@/context/AppContext'
import * as AppleAuthentication from 'expo-apple-authentication'
import { View } from 'react-native'

export function AppleAuth() {
    const { signInWithApple } = useAuth()

    return (
        <View style={{ width: '100%', paddingHorizontal: 30 }}>
            <AppleAuthentication.AppleAuthenticationButton
                buttonType={AppleAuthentication.AppleAuthenticationButtonType.SIGN_IN}
                buttonStyle={AppleAuthentication.AppleAuthenticationButtonStyle.BLACK}
                cornerRadius={10}
                style={{ width: "100%", height: 50 }}
                onPress={signInWithApple}
            />
        </View>
    )
}