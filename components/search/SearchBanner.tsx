import { Dimensions, StyleSheet } from 'react-native'
import Image from '../ui/Image'
import { Text, View } from '../ui/Themed'

const { height, width } = Dimensions.get('window')

const SearchBanner = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Type something to find</Text>
            <Text style={styles.text}>your friends</Text>
            <Image source={require('../../assets/images/search-banner.png')} style={styles.image} />
        </View>
    )
}

export default SearchBanner

const styles = StyleSheet.create({
    container: {
        height: height,
        paddingTop: 160,
        width: width,
        alignItems: 'center',
        gap: 10,
    },
    text: {
        fontSize: 22,
        fontWeight: '600',
    },
    image: {
        width: width - 60,
        aspectRatio: 1,
        borderRadius: 30,
    },
})