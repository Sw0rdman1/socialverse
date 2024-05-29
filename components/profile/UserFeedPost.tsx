import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Animated from 'react-native-reanimated'
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import Post from '@/model/Post';
import { Link } from 'expo-router';
import { useColors } from '@/hooks/useColors';


const { width } = Dimensions.get('window');


interface UserFeedPostProps {
    post: Post;
    isGrid: boolean;
    index: number;
}

const UserFeedPost: React.FC<UserFeedPostProps> = ({ post, index, isGrid }) => {
    const { text } = useColors();
    return (
        <View key={post.id} style={[styles.postContainer, (!isGrid || index % 3 === 0) && styles.fullWidthPost]}>
            <Link href={`/post/${post.id}`} asChild>
                <TouchableOpacity
                    activeOpacity={0.8}
                    style={styles.image}>
                    <Animated.Image
                        sharedTransitionTag={post.id + ".image"}
                        source={{ uri: post.imageUrl }}
                        style={styles.image}

                    />
                    <View style={styles.interactionContainer}>
                        <AntDesign name="heart" size={20} color={"white"} />
                        <Text style={[styles.interactionText, { color: "white" }]}>{post.numberOfLikes}</Text>
                    </View>
                </TouchableOpacity>
            </Link>
        </View>
    )
}

export default UserFeedPost

const styles = StyleSheet.create({
    postContainer: {
        width: '49%',
        height: width * 0.6,
        marginBottom: 5,
    },
    fullWidthPost: {
        width: '100%',
    },
    image: {
        flex: 1,
        width: '100%',
        height: '100%',
        borderRadius: 10,
    },

    interactionContainer: {
        position: 'absolute',
        bottom: 0,
        flexDirection: 'row',
        alignItems: 'center',
        gap: 5,
        paddingHorizontal: 15,
        paddingVertical: 10,
        width: "100%",
        backgroundColor: 'rgba(0,0,0,0.5)',
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,

    },
    interactionText: {
        fontSize: 16,
        fontWeight: 'bold'
    }
})