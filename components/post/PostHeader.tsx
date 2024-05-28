import { StyleSheet } from 'react-native'
import { View } from '../ui/Themed'
import Image from '../ui/Image'
import Post from '@/model/Post'
import BackButton from '../ui/BackButton'
import AuthorInfo from './AuthorInfo'
import { Link } from 'expo-router'

interface Props {
    post: Post
}

const PostHeader: React.FC<Props> = ({ post }) => {
    return (
        <View>
            <Image source={post.imageUrl} style={styles.image} />
            <BackButton />

            <AuthorInfo user={post.author} />
        </View>
    )
}

export default PostHeader

const styles = StyleSheet.create({
    image: {
        width: "100%",
        height: "100%",
        borderBottomRightRadius: 30,
    }
})