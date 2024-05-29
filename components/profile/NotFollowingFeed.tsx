import { StyleSheet, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { Ionicons } from '@expo/vector-icons';
import Animated, { FadeInDown } from 'react-native-reanimated';
import { Text } from '../ui/Themed';



const NotFollowingFeed = ({ displayName }: { displayName: string }) => {

    return (
        <Animated.View
            entering={FadeInDown.delay(500).duration(500)}
            style={styles.notFollowingContainer}>
            <View style={styles.notFollowingContainer}>
                <Ionicons name="lock-closed" size={28} color={"gray"} />
                <Text style={[styles.notFollowingText, { color: "gray" }]}>
                    This user is private. Follow to see {displayName} posts
                </Text>
            </View>
        </Animated.View>
    )
}

export default NotFollowingFeed

const styles = StyleSheet.create({
    notFollowingContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: "100%",
        paddingHorizontal: 40,
        marginTop: 15,
        gap: 5,
    },
    notFollowingText: {
        textAlign: 'center',
        fontSize: 16,
        fontWeight: 'bold',
    },
    container: {
        flex: 1,
        paddingBottom: 50,
    },
    titleContainer: {
        width: '95%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: 10,
        marginTop: 5,
        marginBottom: 25,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    postsContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        marginHorizontal: 10,
        gap: 5,
    },
    viewOptions: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        gap: 10,
    },

})