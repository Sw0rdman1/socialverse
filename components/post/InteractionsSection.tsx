import { StyleSheet, TouchableOpacity, View } from 'react-native'
import { Text } from '../ui/Themed'
import Post from '@/model/Post'
import { useState } from 'react'
import { Ionicons } from '@expo/vector-icons'
import { useColors } from '@/hooks/useColors'

interface Props {
    post: Post
}

const InteractionsSection: React.FC<Props> = ({ post }) => {
    const [isLiked, setIsLiked] = useState(false)
    const { text, background } = useColors()

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => setIsLiked(!isLiked)} activeOpacity={0.4} style={[styles.iconContainer, { backgroundColor: background }]}>
                <Ionicons
                    name={isLiked ? 'heart' : 'heart-outline'}
                    size={30}
                    color={isLiked ? 'red' : text}
                />
            </TouchableOpacity>
            <Text style={styles.text}>{post.likes}</Text>
        </View>
    )
}

export default InteractionsSection

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        right: 20,
        top: 200,
        zIndex: 100,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 5,
    },
    iconContainer: {
        padding: 10,
        borderRadius: 50,
    },
    text: {
        fontSize: 18,
        fontWeight: 'bold'
    },

})