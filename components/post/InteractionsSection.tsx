import { StyleSheet } from 'react-native'
import { Text, View } from '../ui/Themed'
import Post from '@/model/Post'

interface Props {
    post: Post
}

const InteractionsSection: React.FC<Props> = ({ post }) => {
    return (
        <View style={styles.container}>
            <View style={styles.buttonContainer}>
                <Text>{post.likes}</Text>

            </View>
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
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: 'lightgrey',
    },
    buttonContainer: {
        flexDirection: 'row',
        gap: 10,
    },
})