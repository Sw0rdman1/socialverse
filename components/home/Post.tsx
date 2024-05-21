import PostEntity from '@/model/Post'
import { StyleSheet } from 'react-native'
import { Text, View } from '../ui/Themed'
import Image from '../ui/Image'
import { useColorScheme } from '@/components/useColorScheme';
import Colors from '@/constants/Colors';

interface Props {
    post: PostEntity
}

const Post: React.FC<Props> = ({ post }) => {


    return (
        <View style={styles.container}>
            <Image source={{ uri: post.image }} style={styles.image} />
            <View style={styles.userContainer}>
                <Image source={{ uri: post.user.profile }} style={styles.userImage} />
                <View style={styles.userTextContainer}>
                    <Text style={styles.username}>{post.user.username}</Text>
                    <Text style={styles.createdAt}>{post.createdAt}</Text>
                </View>
            </View>
        </View>
    )
}

export default Post

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: 5,
        padding: 5,
        paddingTop: 10,
        borderRadius: 10,
    },
    image: {
        width: "100%",
        aspectRatio: 1,
        borderRadius: 10,
    },
    userContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 5,
    },
    userImage: {
        width: 40,
        height: 40,
        borderRadius: 20,
    },
    userTextContainer: {
        paddingLeft: 10,
    },
    username: {
        fontWeight: 'bold',
    },
    createdAt: {
        color: 'gray',
    }

})