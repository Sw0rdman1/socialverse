import Image from '@/components/ui/Image';
import { ScrollView, Text, View } from '@/components/ui/Themed';
import { usePost } from '@/hooks/usePosts';
import { useLocalSearchParams } from 'expo-router';
import { Dimensions, StyleSheet } from 'react-native';

const { width } = Dimensions.get('window')

const PostScreen = () => {
    const { postID } = useLocalSearchParams<{ postID: string }>();
    const { post, loading } = usePost(postID as string);

    if (loading) {
        console.log('Loading...');
        return <Text>Loading...</Text>
    }

    if (!post) {
        return <Text>Post not found</Text>
    }


    return (
        <ScrollView
            style={styles.container}
            contentContainerStyle={{ alignItems: 'center' }}
            bounces={false}
            showsVerticalScrollIndicator={false}
        >
            <Image source={{ uri: post.image }} style={{ width, height: 600 }} />
        </ScrollView>
    )
}

export default PostScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },

})