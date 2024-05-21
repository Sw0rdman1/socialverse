import { FlatList, StyleSheet } from 'react-native'
import { View } from '../ui/Themed'
import Post from './Post'

const PostList = () => {

    const posts = [{
        id: 1,
        user: {
            id: 1,
            username: 'john_doe',
            profile: 'https://cdn.fakercloud.com/avatars/ricburton_128.jpg'
        },
        image: 'https://www.serbia.travel/files/1-Kalemegdan%20%2C%20Beograd%20%2C%20Leto%20%2C%20Pobednik%20%2C%20Shutterstock%20(2)-0-1280x768.jpg',
        caption: 'This is a caption',
        likes: 10,
        comments: 20,
        saves: 30,
        createdAt: '2021-09-01T12:00:00Z'
    }]

    return (
        <View style={styles.container}>
            <FlatList
                data={posts}
                keyExtractor={item => item.id.toString()}
                renderItem={({ item }) => (
                    <Post post={item} />
                )}
                style={{ width: '100%', paddingTop: 20 }}
            />
        </View>
    )
}

export default PostList

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
})