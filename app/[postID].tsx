import AuthorInfo from '@/components/post/AuthorInfo';
import InteractionsSection from '@/components/post/InteractionsSection';
import AnimatedHeader from '@/components/ui/AnimatedHeader';
import BackButton from '@/components/ui/BackButton';
import Image from '@/components/ui/Image';
import { Text, View } from '@/components/ui/Themed';
import { usePost } from '@/hooks/usePosts';
import { useLocalSearchParams } from 'expo-router';
import { Dimensions, StyleSheet } from 'react-native';

const { height } = Dimensions.get('window');

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
        <AnimatedHeader
            headerComponent={<Image source={post.image} style={styles.container} />}
            minHeight={200}
            maxHeight={height - 200}
        >
            <InteractionsSection post={post} />
            <View style={{ height: 1000 }} />
        </AnimatedHeader>

    )
}

export default PostScreen

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "100%",
        borderBottomRightRadius: 30,
    },
})