import { ActivityIndicator, StyleSheet } from 'react-native'
import { Text, View } from './Themed'
import { useColors } from '@/hooks/useColors'

const Loading = ({ text }: { text: string }) => {
    const { tint } = useColors()

    return (
        <View style={styles.container}>
            <ActivityIndicator size="large" color={tint} />
            <Text style={styles.text}>{text}</Text>
        </View>
    )
}

export default Loading

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 20
    },
    text: {
        fontWeight: 'bold',
        fontSize: 22
    }
})