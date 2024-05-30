import { Text, View } from '@/components/ui/Themed'
import { useCurrentUser } from '@/context/AppContext'
import { StyleSheet } from 'react-native'

const MyProfileScreen = () => {
    const currentUser = useCurrentUser()

    return (
        <View style={styles.container}>
            <Text>My Profile</Text>
        </View>
    )
}

export default MyProfileScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
})