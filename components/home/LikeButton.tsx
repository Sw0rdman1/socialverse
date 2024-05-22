import { useState } from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { Text, View } from '../ui/Themed'
import { useColors } from '@/hooks/useColors'

interface Props {
    likes: number
}

const LikeButton: React.FC<Props> = ({ likes }) => {
    const [liked, setLiked] = useState(false)
    const { text } = useColors()

    const handleLike = () => {
        setLiked(!liked)
    }

    return (
        <View style={styles.likesContainer}>
            <Text style={styles.likesCount}>{likes}</Text>

            <TouchableOpacity onPress={handleLike}>
                <Ionicons
                    name={liked ? 'heart' : 'heart-outline'}
                    size={26}
                    color={liked ? 'red' : text}
                />
            </TouchableOpacity>
        </View>
    )
}

export default LikeButton

const styles = StyleSheet.create({
    likesContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 5,
        marginRight: 5,
    },
    likesCount: {
        fontSize: 20,
        fontWeight: '600',
    },
})



