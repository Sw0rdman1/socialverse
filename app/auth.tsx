import { AppleAuth } from '@/components/auth/AppleAuth';
import { Text, View } from 'react-native';


export default function SignIn() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            {/* <EmailAndPasswordAuth /> */}
            <AppleAuth />
        </View>
    );
}
