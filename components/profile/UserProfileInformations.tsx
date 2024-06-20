import { User } from '@/model/User'
import { StyleSheet, Text, View } from 'react-native'
import { Entypo } from '@expo/vector-icons';
import { useColors } from '@/hooks/useColors';

interface Props {
    user: User
}

const UserProfileInformations: React.FC<Props> = ({ user }) => {
    const { tint } = useColors()
    return (
        <View style={styles.container}>
            <Text style={styles.fullName}>{user.fullName}</Text>
            <View style={styles.emailContainer}>
                <Entypo name="email" size={20} color={tint} />
                <Text style={styles.email}>{user.email}</Text>
            </View>
        </View>
    )
}

export default UserProfileInformations

const styles = StyleSheet.create({
    container: {
        position: "absolute",
        bottom: 10,
        left: 15,
        zIndex: 20,
        gap: 10,
    },
    fullName: {
        color: "white",
        fontSize: 34,
        fontWeight: "bold",
    },
    emailContainer: {
        flexDirection: "row",
        alignItems: "center",
        gap: 5,
    },
    email: {
        color: "white",

        fontSize: 22,
        marginBottom: 2,
    }
})