import { StyleSheet } from 'react-native';

import { View } from '@/components/ui/Themed';
import PostList from '@/components/home/PostList';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <PostList />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },

});
