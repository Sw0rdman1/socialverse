import { StyleSheet, TouchableOpacity } from 'react-native'
import { Text, View } from '../ui/Themed'
import Post from '@/model/Post'
import { useState } from 'react'

interface Props {
    post: Post
}

const InteractionsSection: React.FC<Props> = ({ post }) => {
    const [isLiked, setIsLiked] = useState(false)

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.buttonContainer}>
                <Text>{post.likes}</Text>

            </TouchableOpacity>
        </View>
    )
}

export default InteractionsSection

const styles = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
    },
    buttonContainer: {
        flexDirection: 'row',
        gap: 10,
    },
})