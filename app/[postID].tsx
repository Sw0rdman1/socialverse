import AuthorInfo from '@/components/post/AuthorInfo';
import BackButton from '@/components/ui/BackButton';
import Image from '@/components/ui/Image';
import { ScrollView, Text, View } from '@/components/ui/Themed';
import { usePost } from '@/hooks/usePosts';
import { useLocalSearchParams } from 'expo-router';
import { Dimensions, StyleSheet } from 'react-native';

const { width, height } = Dimensions.get('window');

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
        <>
            <BackButton />
            <AuthorInfo user={post.author} />
            <ScrollView
                style={styles.container}
                contentContainerStyle={{ alignItems: 'center' }}
                bounces={false}
                showsVerticalScrollIndicator={false}
            >
                <Image source={{ uri: post.image }} style={styles.container} />
            </ScrollView>
        </>

    )
}

export default PostScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: width,
        height: height,
    },
})