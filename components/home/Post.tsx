import PostEntity from '@/model/Post'
import { Dimensions, StyleSheet, TouchableOpacity } from 'react-native'
import { Text, View } from '../ui/Themed'
import Image from '../ui/Image'
import LikeButton from './LikeButton'
import { Link } from 'expo-router'
import HashtagText from '../ui/HashtagText'

interface Props {
    post: PostEntity
}

const { width } = Dimensions.get('window')

const Post: React.FC<Props> = ({ post }) => {
    const date = new Date(post.createdAt)
    post.createdAt = date.toDateString()

    return (
        <View style={styles.container}>
            <Link href={`${post.id}`} asChild>
                <TouchableOpacity style={styles.image} >
                    <Image source={{ uri: post.imageUrl }} style={styles.image} />
                </TouchableOpacity>
            </Link>
            <View style={styles.userContainer}>
                <View style={styles.bottonContainer}>
                    <Image source={{ uri: post.author.profilePicture }} style={styles.userImage} />
                    <View style={styles.usernameTimeContainer}>
                        <Text style={styles.username}>{post.author.displayName}</Text>
                        <Text style={styles.createdAt}>{post.createdAt}</Text>
                    </View>
                </View>
                <LikeButton likes={post.numberOfLikes} />

            </View>
            <HashtagText style={styles.caption}>{post.caption}</HashtagText>

        </View>
    )
}

export default Post

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        width: width - 20,
        margin: 5,
        marginTop: 15,
        padding: 5,
        borderRadius: 15,
    },
    image: {
        width: '100%',
        height: 425,
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
    },
    userContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        gap: 10,
        padding: 5,
        paddingBottom: 10,
        marginTop: 5,
    },
    bottonContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
    },
    userImage: {
        width: 45,
        height: 45,
        borderRadius: 30,
    },
    usernameTimeContainer: {
        flexDirection: 'column',
        gap: 5,
    },
    username: {
        fontWeight: 'bold',
        fontSize: 20,
    },
    createdAt: {
        color: 'gray',
        fontSize: 12,
    },
    caption: {
        fontSize: 19,
        fontWeight: '500',
        padding: 10,
        alignSelf: 'flex-start',
    },


})