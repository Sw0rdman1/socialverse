import { StyleSheet } from 'react-native'
import { Text, View } from '../ui/Themed'
import { User } from '@/model/User'
import Avatar from '../ui/Avatar'

interface Props {
    user: User
}

const AuthorInfo: React.FC<Props> = ({ user }) => {
    return (
        <View style={styles.container}>
            <Avatar url={user.profilePicture} size={40} />
            <Text style={styles.displayName}>{user.displayName}</Text>
        </View>
    )
}

export default AuthorInfo

const styles = StyleSheet.create({
    container: {
        height: 50,
        zIndex: 100,
        position: 'absolute',
        top: 55,
        right: 20,
        paddingLeft: 5,
        paddingRight: 15,
        gap: 10,
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    },
    displayName: {
        fontWeight: 'bold',
        fontSize: 18,
    },
})