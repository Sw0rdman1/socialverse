import { AppleAuth } from '@/components/auth/AppleAuth';
import EmailAndPasswordAuth from '@/components/auth/EmailAndPasswordAuth';
import { Text, View } from 'react-native';


export default function SignInScreen() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <EmailAndPasswordAuth />
            <AppleAuth />
        </View>
    );
}
