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
                <Text style={styles.username}>{post.user.username}</Text>
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
        borderRadius: 15,
    },
    image: {
        width: "100%",
        aspectRatio: 1,
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
    },
    userContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
        padding: 5,
        marginTop: 5,
    },
    userImage: {
        width: 40,
        height: 40,
        borderRadius: 30,
    },

    username: {
        fontWeight: 'bold',
        fontSize: 16,
    },


})