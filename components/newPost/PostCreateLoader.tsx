import { usePostsContext } from '@/context/PostsContext'
import { StyleSheet } from 'react-native'
import { Text, View } from '../ui/Themed'
import { useEffect, useState } from 'react'
import { useColors } from '@/hooks/useColors'
import { Image } from 'expo-image'

interface PostCreateLoaderProps {
    addNewPostHandler: () => Promise<void>
}

const PostCreateLoader: React.FC<PostCreateLoaderProps> = ({ addNewPostHandler }) => {
    const { newPost, setNewPost } = usePostsContext()
    const { tint, backgroundSecondary } = useColors()
    const [progress, setProgress] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress(prevProgress => prevProgress + 1)
        }, 50)

        return () => clearInterval(interval)
    }, [newPost])

    useEffect(() => {
        const uploadPost = async () => {
            if (progress >= 100) {
                await addNewPostHandler()
                setProgress(0)
                setNewPost(null)
            }
        }
        uploadPost()
    }, [progress])

    if (!newPost) {
        return null
    }

    return (
        <View style={[styles.container, { backgroundColor: backgroundSecondary }]}>
            <View style={[styles.loader, { width: `${progress}%`, backgroundColor: tint }]} />
            <View style={styles.postInfirmations}>
                <Image source={{ uri: newPost?.imageUrl }} style={styles.image} />
                <Text style={styles.title}> Uploading... </Text>
            </View>
        </View>
    )
}

export default PostCreateLoader

const styles = StyleSheet.create({
    container: {
        width: '100%',
        backgroundColor: 'lightgrey',
        overflow: 'hidden',
    },
    loader: {
        height: 5,
    },
    postInfirmations: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
        padding: 10,
        backgroundColor: 'transparent',
    },
    image: {
        width: 50,
        height: 50,
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
    },

})