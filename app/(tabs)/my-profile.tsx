import FollowerSection from '@/components/profile/FollowerSection';
import Image from '@/components/ui/Image'
import { View } from '@/components/ui/Themed'
import { useCurrentUser } from '@/context/AppContext'
import { Dimensions, StyleSheet } from 'react-native'

const { height, width } = Dimensions.get('window');

const MyProfileScreen = () => {
    const currentUser = useCurrentUser()

    return (
        <View style={styles.container}>
            <Image source={currentUser?.profilePicture} style={styles.profileImage} />
            <FollowerSection user={currentUser} isFollowing={false} />
        </View>
    )
}

export default MyProfileScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    profileImage: {
        width: width,
        height: height / 3,
        borderRadius: 20,
    },
})