import AuthorInfo from '@/components/post/AuthorInfo';
import InteractionsSection from '@/components/post/InteractionsSection';
import Avatar from '@/components/ui/Avatar';
import BackButton from '@/components/ui/BackButton';
import Image from '@/components/ui/Image';
import { ScrollView, Text, View } from '@/components/ui/Themed';
import { usePost } from '@/hooks/usePosts';
import { useLocalSearchParams } from 'expo-router';
import { Dimensions, StyleSheet } from 'react-native';

const { width } = Dimensions.get('window')
const height = width * 1.5;

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
                <Image source={{ uri: post.image }} style={{ width, height }} />
                <View style={styles.borderRadiusEffect} />
                <InteractionsSection post={post} />

            </ScrollView>
        </>

    )
}

export default PostScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    borderRadiusEffect: {
        height: 60,
        width: '100%',
        position: 'absolute',
        top: height - 20,
        borderTopRightRadius: 30,
    },
    captionContainer: {
        paddingHorizontal: 20,
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        gap: 10,
    },
    caption: {
        fontSize: 20,
        fontWeight: 'bold',
    }

})