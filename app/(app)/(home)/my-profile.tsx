import FollowerSection from '@/components/profile/FollowerSection';
import Image from '@/components/ui/Image'
import { Text, TouchableOpacity, View } from '@/components/ui/Themed'
import { useAuth, useCurrentUser } from '@/context/AppContext'
import { useColors } from '@/hooks/useColors';
import { LinearGradient } from 'expo-linear-gradient';
import { Dimensions, StyleSheet } from 'react-native'
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';

const { height, width } = Dimensions.get('window');

const MyProfileScreen = () => {
    const currentUser = useCurrentUser()
    const { backgroundSecondary, tint } = useColors()
    const { signOut } = useAuth()

    return (
        <View style={[styles.container, { backgroundColor: backgroundSecondary }]}>
            <LinearGradient colors={['transparent', 'transparent', backgroundSecondary]} style={styles.linearGradient} />
            <Image source={currentUser?.avatarUrl} style={styles.profileImage} />
            <View style={styles.nameContainer}>
                <Text style={styles.fullName}>{currentUser?.fullName}</Text>
                <View style={styles.usernameContainer}>
                    <FontAwesome5 name="hashtag" size={26} color={tint} />
                    <Text style={styles.username}>
                        {currentUser?.username}
                    </Text>
                </View>
            </View>
            <TouchableOpacity onPress={signOut} style={styles.logOutButton}>
                <FontAwesome5 name="sign-out-alt" size={26} color={tint} />
                <Text style={styles.logOutText}>Log out</Text>
            </TouchableOpacity>
        </View>
    )
}

export default MyProfileScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    profileImage: {
        width: width,
        height: 350,
    },
    linearGradient: {
        position: 'absolute',
        width: width,
        height: 350,
        zIndex: 100,
    },
    nameContainer: {
        margin: 10,
        marginHorizontal: 20,
        backgroundColor: 'transparent',
    },
    usernameContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'transparent',
        gap: 5,
    },
    fullName: {
        marginBottom: 5,
        fontSize: 32,
        fontWeight: '600',
    },
    username: {
        fontSize: 28,
        color: 'gray',
    },
    logOutButton: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 20,
        padding: 10,
        backgroundColor: 'rgba(0, 0, 0, 0.1)',
        borderRadius: 10,
    },
    logOutText: {
        fontSize: 20,
        fontWeight: '600',
        color: 'gray',
        marginLeft: 10,
    },
})