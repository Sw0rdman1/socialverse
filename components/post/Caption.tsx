import { StyleSheet } from 'react-native'
import { Text, View } from '../ui/Themed'
import Post from '@/model/Post'
import Avatar from '../ui/Avatar'
import HashtagText from '../ui/HashtagText'

interface Props {
    post: Post
}

const Caption: React.FC<Props> = ({ post }) => {
    return (
        <View style={styles.container}>
            <View style={styles.user}>
                <Avatar url={post.author.avatarUrl} size={30} />
                <Text style={styles.username}>{post.author.fullName}</Text>
            </View>
            <HashtagText style={styles.caption}>{post.caption}</HashtagText>
        </View>
    );
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