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
    const { text, background, backroundSecondary } = useColors()

    return (
        <View style={styles.container}>

            <View style={[styles.buttonContainer, { backgroundColor: backroundSecondary }]}>
                <TouchableOpacity onPress={() => setIsLiked(!isLiked)} activeOpacity={0.4} >
                    <Ionicons
                        name={isLiked ? 'heart' : 'heart-outline'}
                        size={30}
                        color={isLiked ? 'red' : text}
                    />
                </TouchableOpacity>
                <Text style={styles.text}>{post.likes}</Text>
            </View>
        </View>

    )
}

export default InteractionsSection

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
    },
    buttonContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 5,
        padding: 10,
        borderRadius: 10,
    },
    text: {
        fontSize: 18,
        fontWeight: 'bold'
    },

})