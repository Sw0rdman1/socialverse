import FollowerSection from '@/components/profile/FollowerSection';
import Image from '@/components/ui/Image'
import { Text, View } from '@/components/ui/Themed'
import { useCurrentUser } from '@/context/AppContext'
import { useColors } from '@/hooks/useColors';
import { LinearGradient } from 'expo-linear-gradient';
import { Dimensions, StyleSheet } from 'react-native'
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';

const { height, width } = Dimensions.get('window');

const MyProfileScreen = () => {
    const currentUser = useCurrentUser()
    const { backgroundSecondary, tint } = useColors()

    return (
        <View style={[styles.container, { backgroundColor: backgroundSecondary }]}>
            <LinearGradient colors={['transparent', 'transparent', backgroundSecondary]} style={styles.linearGradient} />
            <Image source={currentUser?.profilePicture} style={styles.profileImage} />
            <View style={styles.nameContainer}>
                <View style={styles.displayNameContainer}>
                    <FontAwesome5 name="hashtag" size={26} color={tint} />
                    <Text style={styles.displayName}>
                        {currentUser?.displayName}
                    </Text>
                </View>
                <Text style={styles.email}>{currentUser?.email}</Text>
            </View>
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
    displayNameContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'transparent',
        gap: 5,
    },
    displayName: {
        marginBottom: 5,
        fontSize: 32,
        fontWeight: '600',
    },
    email: {
        fontSize: 22,
        color: 'gray',
    },
})