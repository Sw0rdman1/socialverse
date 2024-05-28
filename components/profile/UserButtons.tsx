import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import Animated, { FadeInDown, FadeInRight, FadeInUp, FadeOutRight } from 'react-native-reanimated'
import { User } from '@/model/User';
import { useColors } from '@/hooks/useColors';

interface FollowButtonProps {
    isFollowing: boolean;
    setIsFollowing: (value: boolean) => void;
    user: User;
}

const FollowButton: React.FC<FollowButtonProps> = ({ isFollowing, setIsFollowing, user }) => {
    const { text, backgroundSecondary, tintTransparent, tint } = useColors();

    const handleFollow = () => {
        setIsFollowing(!isFollowing)
    }

    return (
        <View style={{ flex: 1 }}>
            <TouchableOpacity
                style={[styles.button, {
                    backgroundColor: backgroundSecondary,
                }]}
                onPress={handleFollow}
            >
                <Ionicons name={isFollowing ? 'checkmark' : 'add'} size={26} color={!isFollowing ? text : tint} />
                <Text
                    style={[styles.buttonText, { color: !isFollowing ? text : tint }]}
                >
                    {isFollowing ? 'Following' : 'Follow'}
                </Text>
            </TouchableOpacity>
        </View >
    )
}

const WriteMessageButton = () => {
    const { backgroundSecondary, tintTransparent, tint } = useColors();


    return (
        <Animated.View
            entering={FadeInRight.duration(300)}
            exiting={FadeOutRight.duration(300)}
            style={{ flex: 1 }}>
            <TouchableOpacity
                style={[styles.button, { backgroundColor: tint, borderColor: tintTransparent }]}
            >
                <Ionicons name='chatbubble-ellipses' size={24} color={backgroundSecondary} />
                <Text
                    style={[styles.buttonText, { color: backgroundSecondary }]}
                >
                    Message
                </Text>
            </TouchableOpacity>
        </Animated.View>
    )
}

interface UserButtonsProps {
    user: User;
    isFollowing: boolean;
    setIsFollowing: (value: boolean) => void;
}

const UserButtons: React.FC<UserButtonsProps> = ({ user, isFollowing, setIsFollowing }) => {

    return (
        <Animated.View
            entering={FadeInDown.delay(800).duration(500)}
            style={styles.container}>
            <FollowButton isFollowing={isFollowing} setIsFollowing={setIsFollowing} user={user} />
            {isFollowing && <WriteMessageButton />}
        </Animated.View>
    )
}


export default UserButtons

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginHorizontal: 15,
        gap: 15,
        height: 50,
        marginTop: 5,
    },
    button: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        borderRadius: 20,
    },

    buttonText: {
        marginLeft: 5,
        fontSize: 18,
        fontWeight: 'bold',
    },
})