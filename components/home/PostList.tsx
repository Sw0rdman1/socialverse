import { FlatList, RefreshControl, StyleSheet, View } from 'react-native'
import Post from './Post'
import { useCallback, useState } from 'react'
import { useColors } from '@/hooks/useColors'

const PostList = () => {
    const [loading, setLoading] = useState(false)
    const { tint } = useColors()


    const onRefresh = useCallback(() => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 2000);
    }, []);

    const posts = [{
        id: 1,
        user: {
            id: 1,
            username: 'vujasinovicb',
            profile: 'https://jmrmolshsmmyxcivsxxv.supabase.co/storage/v1/object/sign/avatars/WhatsApp%20Image%202024-02-07%20at%2000.19.24.jpeg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJhdmF0YXJzL1doYXRzQXBwIEltYWdlIDIwMjQtMDItMDcgYXQgMDAuMTkuMjQuanBlZyIsImlhdCI6MTcxNjA1Nzg3NSwiZXhwIjoxNzQ3NTkzODc1fQ.Y65iuGQe9k9ViPuvr40NKa3_i2FKniNGVSLsz3_4RSE&t=2024-05-18T18%3A44%3A35.973Z'
        },
        image: 'https://www.serbia.travel/files/1-Kalemegdan%20%2C%20Beograd%20%2C%20Leto%20%2C%20Pobednik%20%2C%20Shutterstock%20(2)-0-1280x768.jpg',
        caption: 'This is a caption',
        likes: 10,
        comments: 20,
        saves: 30,
        createdAt: '2021-09-01T12:00:00Z'
    },
    {
        id: 2,
        user: {
            id: 1,
            username: 'vujasinovicb',
            profile: 'https://jmrmolshsmmyxcivsxxv.supabase.co/storage/v1/object/sign/avatars/WhatsApp%20Image%202024-02-07%20at%2000.19.24.jpeg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJhdmF0YXJzL1doYXRzQXBwIEltYWdlIDIwMjQtMDItMDcgYXQgMDAuMTkuMjQuanBlZyIsImlhdCI6MTcxNjA1Nzg3NSwiZXhwIjoxNzQ3NTkzODc1fQ.Y65iuGQe9k9ViPuvr40NKa3_i2FKniNGVSLsz3_4RSE&t=2024-05-18T18%3A44%3A35.973Z'
        },
        image: 'https://www.serbia.travel/files/1-Kalemegdan%20%2C%20Beograd%20%2C%20Leto%20%2C%20Pobednik%20%2C%20Shutterstock%20(2)-0-1280x768.jpg',
        caption: 'This is a caption',
        likes: 10,
        comments: 20,
        saves: 30,
        createdAt: '2021-09-01T12:00:00Z'
    }, {
        id: 3,
        user: {
            id: 1,
            username: 'vujasinovicb',
            profile: 'https://jmrmolshsmmyxcivsxxv.supabase.co/storage/v1/object/sign/avatars/WhatsApp%20Image%202024-02-07%20at%2000.19.24.jpeg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJhdmF0YXJzL1doYXRzQXBwIEltYWdlIDIwMjQtMDItMDcgYXQgMDAuMTkuMjQuanBlZyIsImlhdCI6MTcxNjA1Nzg3NSwiZXhwIjoxNzQ3NTkzODc1fQ.Y65iuGQe9k9ViPuvr40NKa3_i2FKniNGVSLsz3_4RSE&t=2024-05-18T18%3A44%3A35.973Z'
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
                style={{ width: '100%' }}
                refreshControl={
                    <RefreshControl tintColor={tint} refreshing={loading} onRefresh={onRefresh} />
                }
                ListFooterComponent={<View style={{ height: 20 }} />}
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