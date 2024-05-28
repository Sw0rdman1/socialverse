import { StyleSheet } from 'react-native'
import { View } from '../ui/Themed'
import Image from '../ui/Image'
import BackButton from '../ui/BackButton'
import { User } from '@/model/User'
import UserProfileInformations from './UserProfileInformations'

interface Props {
    user: User
}

const UserProfileHeader: React.FC<Props> = ({ user }) => {
    return (
        <View>
            <BackButton />
            <View style={styles.imageOverlay} />
            <Image source={user.profilePicture} style={styles.image} />
            <UserProfileInformations user={user} />
        </View>
    )
}

export default UserProfileHeader

const styles = StyleSheet.create({
    image: {
        width: "100%",
        height: "100%",
        borderBottomRightRadius: 30,
    },
    imageOverlay: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: "rgba(0,0,0,0.4)",
        borderBottomRightRadius: 30,
        zIndex: 10,
    }
})
