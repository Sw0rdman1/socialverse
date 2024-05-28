import { StyleSheet } from 'react-native'
import { View } from '../ui/Themed'
import Image from '../ui/Image'
import BackButton from '../ui/BackButton'
import { User } from '@/model/User'

interface Props {
    user: User
}

const UserProfileHeader: React.FC<Props> = ({ user }) => {
    return (
        <View>
            <Image source={user.profilePicture} style={styles.image} />
            <BackButton />
        </View>
    )
}

export default UserProfileHeader

const styles = StyleSheet.create({
    image: {
        width: "100%",
        height: "100%",
        borderBottomRightRadius: 30,
    }
})
