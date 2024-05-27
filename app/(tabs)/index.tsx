import { StyleSheet } from 'react-native';

import { View } from '@/components/ui/Themed';
import PostList from '@/components/home/PostList';
import Colors from '@/constants/Colors';
import { useColorScheme } from '@/components/useColorScheme';
import { useColors } from '@/hooks/useColors';

export default function HomeScreen() {
  const { backgroundSecondary } = useColors();

  return (
    <View style={[styles.container, { backgroundColor: backgroundSecondary }]}>
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
