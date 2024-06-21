import { StyleSheet } from 'react-native';

import { ScrollView, View } from '@/components/ui/Themed';
import SearchHeader from '@/components/search/SearchHeader';
import { SetStateAction, useEffect, useState } from 'react';
import { User } from '@/model/User';
import SearchResult from '@/components/search/SearchResult';


const users: SetStateAction<User[]> = []

export default function SearchScreen() {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState<User[]>([]);

  useEffect(() => {
    const fetchSearchResults = async () => {
      // Fetch search results
      setSearchResults(users);
    }
    fetchSearchResults();
  }, [searchTerm]);


  return (
    <View style={styles.container}>
      <SearchHeader searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <ScrollView style={styles.listContainer}>
        {/* Search Results */}
        <View style={{ height: 120 }} />
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
