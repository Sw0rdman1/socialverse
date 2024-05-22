import { FlatList, RefreshControl, StyleSheet, View } from 'react-native'
import Post from './Post'
import { useCallback, useState } from 'react'
import { useColors } from '@/hooks/useColors'
import { usePosts } from '@/hooks/usePosts'

const PostList = () => {
    const { tint } = useColors()

    const { loading, posts, onRefresh } = usePosts()


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