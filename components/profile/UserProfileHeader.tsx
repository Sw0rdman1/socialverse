import { User } from '@/model/User'
import { StyleSheet } from 'react-native'
import { Text, View } from '../ui/Themed'

interface Props {
    user: User
}

const UserProfileHeader: React.FC<Props> = ({ user }) => {
    return (
        <View>
            <Text>UserProfileHeader</Text>
        </View>
    )
}

export default UserProfileHeader

const styles = StyleSheet.create({})