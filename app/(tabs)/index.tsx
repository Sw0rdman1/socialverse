import { StyleSheet } from 'react-native';

import { View } from '@/components/ui/Themed';
import PostList from '@/components/home/PostList';
import Colors from '@/constants/Colors';
import { useColorScheme } from '@/components/useColorScheme';

export default function HomeScreen() {
  const colorScheme = useColorScheme();
  const backgroundColor = Colors[colorScheme ?? 'light'].backroundSecondary

  return (
    <View style={[styles.container, { backgroundColor }]}>
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
