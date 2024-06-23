import { Dimensions, StyleSheet } from 'react-native'
import Image from '../ui/Image'
import { Text, TouchableOpacity, View } from '../ui/Themed'
import { User } from '@/model/User';
import { useRouter } from 'expo-router';
import { useColors } from '@/hooks/useColors';
import Avatar from '../ui/Avatar';
import AntDesign from '@expo/vector-icons/AntDesign';

const { height, width } = Dimensions.get('window')

interface SearchBannerProps {
    searchHistory: User[];
    handleDelete: (id: string) => void;
}

const HistoryResult: React.FC<{ user: User, handleDelete: (id: string) => void }> = ({ user, handleDelete }) => {
    const router = useRouter();
    const { backgroundSecondary, text } = useColors();

    const handlePress = () => {
        router.push(`/user/${user.id}`)
    }

    return (
        <TouchableOpacity onPress={handlePress} style={[styles.searchResultContainer, { backgroundColor: backgroundSecondary }]}>
            <View style={styles.leftSide}>
                <Avatar url={user.avatarUrl} size={60} />
                <View style={styles.textContainer}>
                    <Text style={styles.username}>{user.fullName}</Text>
                    <Text style={styles.name}>{user.email}</Text>
                </View>
            </View>
            <TouchableOpacity onPress={() => handleDelete(user.id)} style={styles.deleteButton}>
                <AntDesign name="close" size={22} color={text} />
            </TouchableOpacity>
        </TouchableOpacity>
    )
}

const HistoryBanner: React.FC<SearchBannerProps> = ({ searchHistory, handleDelete }) => {
    return (
        <View style={styles.container}>
            <Text style={[styles.text, { alignSelf: "flex-start", marginLeft: 20, fontSize: 18 }]}>
                Your recent searches
            </Text>
            <View style={styles.historyContainer}>
                {searchHistory.map((user) => (
                    <HistoryResult key={user.id} user={user} handleDelete={handleDelete} />
                ))}
            </View>
        </View>
    )
}

const SearchBanner: React.FC<SearchBannerProps> = ({ searchHistory, handleDelete }) => {

    if (searchHistory.length > 0) return <HistoryBanner handleDelete={handleDelete} searchHistory={searchHistory} />;

    return (
        <View style={styles.container}>
            <Image source={require('../../assets/images/search-banner.png')} style={styles.image} />
        </View>
    )
}

export default SearchBanner

const styles = StyleSheet.create({
    container: {
        height: height,
        paddingTop: 130,
        width: width,
        alignItems: 'center',
        gap: 10,
    },
    text: {
        fontSize: 22,
        fontWeight: '600',
    },
    image: {
        width: width - 30,
        aspectRatio: 1,
        borderRadius: 30,
    },
    historyContainer: {
        width: width,
        backgroundColor: 'transparent',
        marginTop: 10,
    },
    textContainer: {
        marginLeft: 15,
        backgroundColor: 'transparent',
    },
    username: {
        fontSize: 18,
        fontWeight: '600',
    },
    name: {
        fontSize: 16,
        color: 'gray',
    },
    searchResultContainer: {
        flexDirection: 'row',
        padding: 10,
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 10,
        borderRadius: 10,
        marginHorizontal: 5,
    },
    leftSide: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'transparent',
    },
    deleteButton: {
        backgroundColor: 'transparent',
        padding: 5,
        borderRadius: 5,
        marginLeft: 10,
    },
})