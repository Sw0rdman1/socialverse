import { StyleSheet, View } from 'react-native'
import React from 'react'
import { Text } from '../ui/Themed';
import { useColors } from '@/hooks/useColors';
import { User } from '@/model/User';


const NumberContainer: React.FC<{ number: number, label: string, isFollowing: boolean }> = ({ number, label, isFollowing }) => {
    const { tint, text, backgroundSecondary, tintTransparent } = useColors();

    const textColor = isFollowing ? tint : text;

    return (
        <View style={[styles.item, { backgroundColor: isFollowing ? tintTransparent : backgroundSecondary }]}>
            <Text style={[styles.label, { color: textColor }]}>{label}</Text>
            <Text style={[styles.count, { color: textColor }]}>{number}</Text>
        </View>
    )
}

interface FollowerSectionProps {
    user: User;
    isFollowing: boolean;
}


const FollowerSection: React.FC<FollowerSectionProps> = ({ user, isFollowing }) => {

    if (!user.numberOfFollowers || !user.numberOfFollowing || !user.numberOfPosts) {
        return null;
    }

    return (
        <View style={styles.container}>
            <NumberContainer number={user.numberOfPosts} label="Posts" isFollowing={isFollowing} />
            <NumberContainer number={user.numberOfFollowers} label="Followers" isFollowing={isFollowing} />
            <NumberContainer number={user.numberOfFollowing} label="Following" isFollowing={isFollowing} />
        </View>
    )
}

export default FollowerSection

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginHorizontal: 25,
        gap: 25,
        height: 80,
        marginVertical: 30,
    },
    item: {
        paddingVertical: 15,
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 5,
        borderRadius: 15,
    },
    label: {
        fontSize: 16,
    },
    count: {
        fontSize: 18,
        fontWeight: 'bold',
    },
})