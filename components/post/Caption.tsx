import { StyleSheet } from 'react-native'
import { Text, View } from '../ui/Themed'
import Post from '@/model/Post'
import Avatar from '../ui/Avatar'

interface Props {
    post: Post
}

const Caption: React.FC<Props> = ({ post }) => {
    return (
        <View style={styles.container}>
            <View style={styles.user}>
                <Avatar url={post.author.profilePicture} size={30} />
                <Text style={styles.username}>{post.author.displayName}</Text>
            </View>
            <Text style={styles.caption}> - "{post.caption}"</Text>
        </View>
    )
}

export default Caption

const styles = StyleSheet.create({
    container: {
        padding: 15,
        gap: 20,
    },
    user: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 7,
        marginLeft: 5,
    },
    username: {
        fontWeight: 'bold',
        fontSize: 18,
    },
    caption: {
        fontSize: 20,
        fontWeight: '500',
    }

})