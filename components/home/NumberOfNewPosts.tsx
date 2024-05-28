import { useColors } from '@/hooks/useColors'
import { StyleSheet, TouchableOpacity } from 'react-native'
import { Text } from '../ui/Themed'

interface Props {
    numberOfNewPosts: number
    clickNewPostsHandler: () => void
}

const NumberOfNewPosts: React.FC<Props> = ({ numberOfNewPosts, clickNewPostsHandler }) => {
    const { tint, text } = useColors()

    if (numberOfNewPosts === 0) return null

    return (
        <TouchableOpacity onPress={clickNewPostsHandler} style={[styles.container, { backgroundColor: tint, shadowColor: text }]}>
            <Text style={[styles.text, { color: "whitesmoke" }]}>{numberOfNewPosts} new posts</Text>
        </TouchableOpacity>
    )
}

export default NumberOfNewPosts

const styles = StyleSheet.create({
    container: {
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        top: 10,
        zIndex: 100,
        paddingHorizontal: 25,
        borderRadius: 30,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 10,
        elevation: 5,

    },
    text: {
        fontSize: 16,
        fontWeight: '700',
    }
})