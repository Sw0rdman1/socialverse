import PostList from '@/components/home/PostList';
import { View } from '@/components/ui/Themed';
import { useColors } from '@/hooks/useColors';
import { StyleSheet } from 'react-native';

export default function HomeScreen() {
  const { background } = useColors();

  return (
    <View style={[styles.container, { backgroundColor: background }]}>
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
