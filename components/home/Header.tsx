import { StyleSheet, View } from 'react-native'
import { Text } from '../ui/Themed'
import Image from '../ui/Image'
import { Entypo } from '@expo/vector-icons'
import { useColors } from '@/hooks/useColors';

const LOGO = '../../assets/images/logo.png'

const HeaderLeft = () => {
    const { tint } = useColors()

    return (
        <View style={styles.containerLeft}>
            <Image
                source={require(LOGO)}
                style={{ width: 40, height: 40 }}
            />
            <Text style={[styles.title, { color: tint }]}>SocialVerse</Text>
        </View>
    )
}

const HeaderRight = () => {
    const { tint } = useColors()

    return (
        <View style={styles.containerRight}>
            <Entypo name="chat" size={26} color={tint} />
        </View>
    )
}


export { HeaderLeft, HeaderRight }

const styles = StyleSheet.create({
    containerLeft: {
        width: 300,
        paddingLeft: 15,
        alignItems: 'center',
        flexDirection: 'row',
        gap: 5,
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
    },
    containerRight: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingRight: 20,
    }

})