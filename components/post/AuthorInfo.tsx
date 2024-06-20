import { StyleSheet } from 'react-native'
import { Text, TouchableOpacity } from '../ui/Themed'
import { User } from '@/model/User'
import Avatar from '../ui/Avatar'
import { Link, useRouter } from 'expo-router'

interface Props {
    user: User
}

const AuthorInfo: React.FC<Props> = ({ user }) => {
    const router = useRouter();

    const handlePress = () => {
        router.push(`/user/${user.id}`)
    }

    return (
        <TouchableOpacity onPress={handlePress} style={styles.container}>
            <Avatar url={user.avatarUrl} size={40} />
            <Text style={styles.fullName}>{user.fullName}</Text>
        </TouchableOpacity>
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
    fullName: {
        fontWeight: 'bold',
        fontSize: 18,
    },
})