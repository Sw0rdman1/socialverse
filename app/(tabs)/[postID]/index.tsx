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
            <ScrollView
                style={styles.container}
                contentContainerStyle={{ alignItems: 'center' }}
                bounces={false}
                showsVerticalScrollIndicator={false}
            >
                <Image source={{ uri: post.image }} style={{ width, height }} />
                <View style={styles.borderRadiusEffect} />
                <View style={{ height: 400 }} />
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
        top: height - 40,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
    }

})