import { StyleSheet } from 'react-native'
import { Text, View } from '../ui/Themed'

const HeaderLeft = () => {
    return (
        <View style={styles.containerLeft}>
        </View>
    )
}

const HeaderRight = () => {
    return (
        <View style={styles.containerRight}>
            <Text>Header</Text>
        </View>
    )
}

export { HeaderLeft, HeaderRight }

const styles = StyleSheet.create({
    containerLeft: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    containerRight: {
        alignItems: 'center',
        justifyContent: 'center',
    }

})