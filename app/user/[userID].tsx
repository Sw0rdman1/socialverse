import Caption from '@/components/post/Caption';
import InteractionsSection from '@/components/post/InteractionsSection';
import PostHeader from '@/components/post/PostHeader';
import UserProfileHeader from '@/components/profile/UserProfileHeader';
import AnimatedHeader from '@/components/ui/AnimatedHeader';
import { Text, View } from '@/components/ui/Themed';
import { usePost } from '@/hooks/usePosts';
import { useUser } from '@/hooks/useUser';
import { useLocalSearchParams } from 'expo-router';
import { Dimensions } from 'react-native';

const { height } = Dimensions.get('window');

const UserProfileScreen = () => {
    const { userID } = useLocalSearchParams<{ userID: string }>();
    const { user, userPosts, loading } = useUser(userID as string);

    if (loading) {
        return <Text>Loading...</Text>
    }

    if (!user || !userPosts) {
        return <Text>User not found</Text>
    }


    return (
        <AnimatedHeader
            headerComponent={<UserProfileHeader user={user} />}
            minHeight={350}
            maxHeight={height - 200}
        >
            <View style={{ height: 700 }} />
        </AnimatedHeader>

    )
}

export default UserProfileScreen

