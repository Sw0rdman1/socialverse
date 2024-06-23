import { User } from '@/model/User';
import { StyleSheet, View } from 'react-native'
import { Text, TouchableOpacity } from '../ui/Themed';
import Avatar from '../ui/Avatar';
import { useRouter } from 'expo-router';
import { useColors } from '@/hooks/useColors';

interface SearchResultProps {
    user: User;
    addToHistoryHandler: (user: User) => void;
}

const SearchResult: React.FC<SearchResultProps> = ({ user, addToHistoryHandler }) => {
    const router = useRouter();
    const { backgroundSecondary } = useColors();

    const handlePress = () => {
        router.push(`/user/${user.id}`)
        addToHistoryHandler(user);
    }

    return (
        <TouchableOpacity onPress={handlePress} style={[styles.container, { backgroundColor: backgroundSecondary }]}>
            <Avatar url={user.avatarUrl} size={60} />
            <View style={styles.textContainer}>
                <Text style={styles.username}>{user.fullName}</Text>
                <Text style={styles.name}>{user.email}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default SearchResult

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        padding: 10,
        alignItems: 'center',
        marginBottom: 10,
        borderRadius: 10,
        marginHorizontal: 5,
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