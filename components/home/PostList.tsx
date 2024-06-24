import { FlatList, RefreshControl, StyleSheet, View } from 'react-native'
import Post from './Post'
import { useColors } from '@/hooks/useColors'
import { usePosts } from '@/hooks/usePosts'
import { useEffect, useRef, useState } from 'react'
import NumberOfNewPosts from './NumberOfNewPosts'
import PostCreateLoader from '../newPost/PostCreateLoader'

const TIME_TO_SHOW_NEW_POSTS = 60 * 1000 // 1 minute

const PostList = () => {
    const { tint } = useColors()
    const flatListRef = useRef<FlatList>(null)
    const { loading, posts, onRefresh } = usePosts()
    const [numberOfNewPosts, setNumberOfNewPosts] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setNumberOfNewPosts(prevCount => prevCount + 1);
        }, TIME_TO_SHOW_NEW_POSTS)

        return () => clearInterval(interval)
    }, [])

    const clickNewPostsHandler = () => {
        onRefresh()
        setNumberOfNewPosts(0)
        flatListRef.current?.scrollToOffset({ offset: 0, animated: true });
    }

    const onRefreshHandler = () => {
        setNumberOfNewPosts(0)
        onRefresh()
    }


    return (
        <View style={styles.container}>
            <NumberOfNewPosts numberOfNewPosts={numberOfNewPosts} clickNewPostsHandler={clickNewPostsHandler} />
            <FlatList
                ref={flatListRef}
                data={posts}
                keyExtractor={item => item.id.toString()}
                renderItem={({ item }) => (
                    <Post post={item} />
                )}
                style={{ width: '100%' }}
                refreshControl={
                    <RefreshControl tintColor={tint} refreshing={loading} onRefresh={onRefreshHandler} />
                }
                ListHeaderComponent={<PostCreateLoader />}
                ListFooterComponent={<View style={{ height: 120 }} />}
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