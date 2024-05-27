import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import Post from '@/model/Post';
import { useColors } from '@/hooks/useColors';


const ICON_SIZE = 22;


interface InteractionSectionProps {
    post: Post;
}

const InteractionSection: React.FC<InteractionSectionProps> = ({ post }) => {
    const [isLiked, setIsLiked] = useState(false);
    const [numberOfLikes, setNumberOfLikes] = useState(post.likes);

    const [isBookmarked, setIsBookmarked] = useState(false);
    const [numberOfBookmarks, setNumberOfBookmarks] = useState(post.saves);

    const { tint, backgroundSecondary, text, tintTransparent, likeColor, likeColorTransparent } = useColors();


    const handleLike = async () => {
        // if (isLiked) {
        //     await api.likes.unlikePost(post.id, currentUser.id);
        //     setNumberOfLikes(numberOfLikes - 1);
        // } else {
        //     await api.likes.likePost(post.id, currentUser.id);
        //     setNumberOfLikes(numberOfLikes + 1);
        // }
        setIsLiked(!isLiked);
    }

    const handleBookmark = async () => {
        // if (isBookmarked) {
        //     await api.bookmarks.unbookmarkPost(post.id, currentUser.id);
        //     setNumberOfBookmarks(numberOfBookmarks - 1);
        // } else {
        //     await api.bookmarks.bookmarkPost(post.id, currentUser.id);
        //     setNumberOfBookmarks(numberOfBookmarks + 1);
        // }

        setIsBookmarked(!isBookmarked);
    }


    async function fetchData() {
        // const numberOfLikes = await api.likes.getLikesForPost(post.id);
        // setNumberOfLikes(numberOfLikes);

        // const numberOfBookmarks = await api.bookmarks.getBookmarksForPost(post.id);
        // setNumberOfBookmarks(numberOfBookmarks);

        // const isPostLIked = await api.likes.isPostLikedByUser(post.id, currentUser.id);
        // setIsLiked(isPostLIked);

        // const isPostBookmarked = await api.bookmarks.isPostBookmarkedByUser(post.id, currentUser.id);
        // setIsBookmarked(isPostBookmarked);
    }

    useEffect(() => {
        fetchData();
    }, [])


    return (
        <View style={styles.container}>
            <TouchableOpacity
                onPress={handleLike}
                style={[styles.interactionContainer,
                {
                    backgroundColor: isLiked ? likeColorTransparent : backgroundSecondary,

                }]}
            >
                <Text style={[styles.interactionText, { color: text }]}>{numberOfLikes}</Text>
                {isLiked ?
                    <AntDesign name="heart" size={ICON_SIZE} color={likeColor} /> :
                    <AntDesign name="hearto" size={ICON_SIZE} color={text} />
                }
            </TouchableOpacity>

            <TouchableOpacity
                onPress={handleBookmark}
                style={[styles.interactionContainer, {
                    backgroundColor: isBookmarked ? tintTransparent : backgroundSecondary
                }]}
            >
                <Text style={[styles.interactionText, { color: text }]}>{numberOfBookmarks}</Text>

                {isBookmarked ?
                    <FontAwesome name="bookmark" size={ICON_SIZE} color={tint} /> :
                    <FontAwesome name="bookmark-o" size={ICON_SIZE} color={text} />
                }
            </TouchableOpacity>
        </View >
    )
}

export default InteractionSection

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        width: '100%',
        gap: 15,
        paddingHorizontal: 15,
        height: 60,
        marginTop: 10,
        paddingTop: 5,
    },
    interactionContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        padding: 10,
        borderRadius: 10,
        height: 45,
    },
    interactionText: {
        marginRight: 10,
        fontSize: 18,
        fontWeight: '600',
    },

})

