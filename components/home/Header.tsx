import { StyleSheet, View } from 'react-native'
import { Text } from '../ui/Themed'
import Image from '../ui/Image'
import { Entypo } from '@expo/vector-icons'
import { useColorScheme } from '@/components/useColorScheme';
import Colors from '@/constants/Colors';

const LOGO = '../../assets/images/logo.png'

const HeaderLeft = () => {
    const colorScheme = useColorScheme();
    const color = Colors[colorScheme ?? 'light'].tint

    return (
        <View style={styles.containerLeft}>
            <Image
                source={require(LOGO)}
                style={{ width: 40, height: 40 }}
            />
            <Text style={[styles.title, { color }]}>SocialVerse</Text>
        </View>
    )
}

const HeaderRight = () => {
    const colorScheme = useColorScheme();
    const color = Colors[colorScheme ?? 'light'].tint

    return (
        <View style={styles.containerRight}>
            <Entypo name="chat" size={26} color={color} />
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