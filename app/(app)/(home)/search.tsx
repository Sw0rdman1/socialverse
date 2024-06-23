import { StyleSheet } from 'react-native';
import { View } from '@/components/ui/Themed';
import SearchHeader from '@/components/search/SearchHeader';
import { useState } from 'react';
import SearchMainContent from '@/components/search/SearchMainContent';
import { User } from '@/model/User';



export default function SearchScreen() {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchHistory, setSearchHistory] = useState<User[]>([]);

  const addToHistoryHandler = (user: User) => {
    setSearchHistory((prev) => {
      if (prev.find((u) => u.id === user.id)) return prev;
      return [user, ...prev];
    });
  }

  const deleteHistoryHandler = (id: string) => {
    setSearchHistory((prev) => prev.filter((u) => u.id !== id));
  }

  return (
    <View style={styles.container}>
      <SearchHeader searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <SearchMainContent
        searchHistory={searchHistory}
        searchTerm={searchTerm}
        addToHistoryHandler={addToHistoryHandler}
        deleteHistoryHandler={deleteHistoryHandler}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },


});
