import { User } from '@/model/User';
import { StyleSheet, View } from 'react-native'
import { Text, TouchableOpacity } from '../ui/Themed';
import Avatar from '../ui/Avatar';
import { useRouter } from 'expo-router';
import { useColors } from '@/hooks/useColors';

interface SearchResultProps {
    user: User;
}

const SearchResult: React.FC<SearchResultProps> = ({ user }) => {
    const router = useRouter();
    const { backgroundSecondary } = useColors();

    const handlePress = () => {
        router.push(`/user/${user.id}`)
    }

    return (
        <TouchableOpacity onPress={handlePress} style={[styles.container, { backgroundColor: backgroundSecondary }]}>
            <Avatar url={user.profilePicture} size={60} />
            <View style={styles.textContainer}>
                <Text style={styles.username}>{user.displayName}</Text>
                <Text style={styles.name}>{user.email}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default SearchResult

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        padding: 15,
        alignItems: 'center',
        marginBottom: 2,
    },
    textContainer: {
        marginLeft: 15,
    },
    username: {
        fontSize: 18,
        fontWeight: '600',
    },
    name: {
        fontSize: 16,
        color: 'gray',
    },
})