import { StyleSheet, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { Ionicons } from '@expo/vector-icons';
import Animated, { FadeInDown } from 'react-native-reanimated';
import UserFeedPost from './UserFeedPost';
import { User } from '@/model/User';
import Post from '@/model/Post';
import { useColors } from '@/hooks/useColors';
import { Text } from '../ui/Themed';



const NotFollowingFeed = ({ displayName }: { displayName: string }) => {

    return (
        <Animated.View
            entering={FadeInDown.delay(500).duration(500)}
            style={styles.notFollowingContainer}>
            <View style={styles.notFollowingContainer}>
                <Ionicons name="lock-closed" size={28} color={"gray"} />
                <Text style={[styles.NotFollowingText, { color: "gray" }]}>
                    This user is private. Follow to see {displayName} posts
                </Text>
            </View>
        </Animated.View>
    )
}

interface UserFeedProps {
    user: User;
    isFollowing: boolean;
    posts: Post[];
}

const UserFeed: React.FC<UserFeedProps> = ({ user, isFollowing, posts }) => {
    const { background, tint } = useColors();
    const [isGrid, setIsGrid] = useState(true);

    if (!isFollowing) {
        return <NotFollowingFeed displayName={user.displayName} />
    }



    return (
        <Animated.View
            entering={FadeInDown.delay(500).duration(500)}
            style={[styles.container, { backgroundColor: background }]}
        >
            <View style={styles.postsContainer}>
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>
                        Posts
                    </Text>
                    <View style={styles.viewOptions}>
                        <TouchableOpacity onPress={() => setIsGrid(true)}>
                            <Ionicons
                                name={isGrid ? 'grid' : 'grid-outline'}
                                size={24}
                                color={isGrid ? tint : "gray"}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => setIsGrid(false)}>
                            <Ionicons
                                name={isGrid ? 'list-outline' : 'list'}
                                size={28}
                                color={isGrid ? "gray" : tint}
                            />
                        </TouchableOpacity>
                    </View>
                </View>
                {posts.map((post, index) => (
                    <UserFeedPost key={post.id} post={post} index={index} isGrid={isGrid} />
                ))}
            </View>
        </Animated.View>
    )

}

export default UserFeed

const styles = StyleSheet.create({
    notFollowingContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: "100%",
        paddingHorizontal: 25,
        gap: 5,
    },
    NotFollowingText: {
        textAlign: 'center',
        fontSize: 16,
        fontWeight: 'bold',
    },
    container: {
        flex: 1,
        paddingBottom: 100,
        marginTop: 20,
    },
    titleContainer: {
        width: '95%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: 10,
        marginTop: 5,
        marginBottom: 25,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    postsContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        marginHorizontal: 10,
        gap: 5,
    },
    viewOptions: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        gap: 10,
    },

})