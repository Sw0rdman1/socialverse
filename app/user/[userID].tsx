import FollowerSection from '@/components/profile/FollowerSection';
import UserButtons from '@/components/profile/UserButtons';
import UserFeed from '@/components/profile/UserFeed';
import UserProfileHeader from '@/components/profile/UserProfileHeader';
import AnimatedHeader from '@/components/ui/AnimatedHeader';
import { Text, View } from '@/components/ui/Themed';
import { useUser } from '@/hooks/useUser';
import { useLocalSearchParams } from 'expo-router';
import { useState } from 'react';
import { Dimensions } from 'react-native';

const { height } = Dimensions.get('window');

const UserProfileScreen = () => {
    const { userID } = useLocalSearchParams<{ userID: string }>();
    const { user, userPosts, loading } = useUser(userID as string);
    const [isFollowing, setIsFollowing] = useState(user?.isFollowing || false)

    if (loading) {
        return <Text>Loading...</Text>
    }

    if (!user || !userPosts) {
        return <Text>User not found</Text>
    }


    return (
        <AnimatedHeader
            headerComponent={<UserProfileHeader user={user} />}
            minHeight={250}
            maxHeight={height - 300}
        >
            <View style={{ flex: 1, height: isFollowing ? "auto" : 300 }}>
                <FollowerSection user={user} isFollowing={false} />
                <UserButtons user={user} isFollowing={isFollowing} setIsFollowing={setIsFollowing} />
                <UserFeed user={user} isFollowing={isFollowing} posts={userPosts} />
            </View>
        </AnimatedHeader >

    )
}

export default UserProfileScreen

