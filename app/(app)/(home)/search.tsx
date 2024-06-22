import { ActivityIndicator, StyleSheet } from 'react-native';
import { ScrollView, View } from '@/components/ui/Themed';
import SearchHeader from '@/components/search/SearchHeader';
import { SetStateAction, useState } from 'react';
import { User } from '@/model/User';
import SearchResult from '@/components/search/SearchResult';
import SearchBanner from '@/components/search/SearchBanner';
import { useSearch } from '@/hooks/useSearch';
import { useColors } from '@/hooks/useColors';



export default function SearchScreen() {
  const [searchTerm, setSearchTerm] = useState('');
  const { searchResults, loading } = useSearch(searchTerm);
  const { tint } = useColors();


  return (
    <View style={styles.container}>
      <SearchHeader searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      {(!loading && searchResults.length === 0) && <SearchBanner />}
      <ScrollView style={styles.listContainer}>
        <View style={{ height: 120 }} />
        {loading && <ActivityIndicator size="large" color={tint} />}
        {searchResults.map((user) => (
          <SearchResult key={user.id} user={user} />
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  listContainer: {
    width: '100%',
  },

});
