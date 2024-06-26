import { ActivityIndicator, StyleSheet, } from 'react-native'
import { ScrollView, Text, View } from '../ui/Themed';
import { useSearch } from '@/hooks/useSearch';
import { useColors } from '@/hooks/useColors';
import SearchBanner from './SearchBanner';
import SearchResult from './SearchResult';
import Image from '../ui/Image';
import { User } from '@/model/User';

const Loading = () => {
    const { tint } = useColors();
    return (
        <View style={styles.loadingContainer}>
            <ActivityIndicator size="large" color={tint} />
            <Text style={styles.loadingTitle}>Loading...</Text>
        </View>
    )
}

const NoResultsFound = () => {
    return (
        <View style={styles.noResultsContainer}>
            <Text style={styles.noResultsTitle}>Sorry, we couldn't find </Text>
            <Text style={styles.noResultsTitle}>any results</Text>
            <Image style={styles.image} source={require('../../assets/images/no-results.png')} />
        </View>
    )
}

interface SearchMainContentProps {
    searchTerm: string;
    addToHistoryHandler: (user: User) => void;
    deleteHistoryHandler: (id: string) => void;
    searchHistory: User[];
}

const SearchMainContent: React.FC<SearchMainContentProps> = ({ searchTerm, addToHistoryHandler, deleteHistoryHandler, searchHistory }) => {
    const { searchResults, loading } = useSearch(searchTerm);

    if (loading) return <Loading />;

    if (!loading && searchResults.length === 0) {
        if (searchTerm.length === 0) return <SearchBanner searchHistory={searchHistory} handleDelete={deleteHistoryHandler} />;
        return <NoResultsFound />;
    };

    return (
        <ScrollView style={styles.listContainer}>
            <View style={{ height: 125 }} />
            {searchResults.map((user) => (
                <SearchResult key={user.id} user={user} addToHistoryHandler={addToHistoryHandler} />
            ))}
        </ScrollView>
    )
}

export default SearchMainContent

const styles = StyleSheet.create({
    listContainer: {
        width: '100%',
        paddingHorizontal: 10,
    },
    loadingContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    loadingTitle: {
        marginTop: 10,
        fontSize: 20,
        fontWeight: '700',
    },
    noResultsContainer: {
        flex: 1,
        alignItems: 'center',
        paddingTop: 150,
    },
    noResultsTitle: {
        marginTop: 10,
        fontSize: 22,
        fontWeight: '700',
    },
    image: {
        width: 250,
        aspectRatio: 1,
    },

})