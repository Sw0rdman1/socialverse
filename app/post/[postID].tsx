import Caption from '@/components/post/Caption';
import InteractionsSection from '@/components/post/InteractionsSection';
import PostHeader from '@/components/post/PostHeader';
import AnimatedHeader from '@/components/ui/AnimatedHeader';
import { Text, View } from '@/components/ui/Themed';
import { usePost } from '@/hooks/usePosts';
import { useLocalSearchParams } from 'expo-router';
import { Dimensions } from 'react-native';

const { height } = Dimensions.get('window');

const PostScreen = () => {
    const { postID } = useLocalSearchParams<{ postID: string }>();
    const { post, loading } = usePost(postID as string);

    if (loading) {
        return <Text>Loading...</Text>
    }

    if (!post) {
        return <Text>Post not found</Text>
    }


    return (
        <AnimatedHeader
            headerComponent={<PostHeader post={post} />}
            minHeight={350}
            maxHeight={height - 200}
        >
            <Caption post={post} />
            <InteractionsSection post={post} />
            <View style={{ height: 700 }} />
        </AnimatedHeader>

    )
}

export default PostScreen

