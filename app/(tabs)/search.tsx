import { StyleSheet } from 'react-native';

import { View } from '@/components/ui/Themed';
import SearchHeader from '@/components/search/SearchHeader';
import { useState } from 'react';

export default function SearchScreen() {
  const [searchTerm, setSearchTerm] = useState('');


  return (
    <View style={styles.container}>
      <SearchHeader searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },

});
