import { useAuth } from '@/context/AppContext'
import { isLightTheme } from '@/hooks/useColors'
import * as AppleAuthentication from 'expo-apple-authentication'
import { View } from 'react-native'

export function AppleAuth() {
    const { signInWithApple } = useAuth()
    const isLight = isLightTheme()

    return (
        <View style={{ width: '100%', paddingHorizontal: 30 }}>
            <AppleAuthentication.AppleAuthenticationButton
                buttonType={AppleAuthentication.AppleAuthenticationButtonType.SIGN_IN}
                buttonStyle={isLight ? AppleAuthentication.AppleAuthenticationButtonStyle.BLACK : AppleAuthentication.AppleAuthenticationButtonStyle.WHITE}
                cornerRadius={10}
                style={{ width: "100%", height: 50 }}
                onPress={signInWithApple}
            />
        </View>
    )
}