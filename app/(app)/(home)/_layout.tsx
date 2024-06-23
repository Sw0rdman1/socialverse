import { Redirect, Tabs } from 'expo-router';
import { useClientOnlyValue } from '@/components/useClientOnlyValue';
import { HeaderLeft, HeaderRight } from '@/components/home/Header';
import { useColors } from '@/hooks/useColors';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { useAuth, useCurrentUser } from '@/context/AppContext';
import { Text } from '@/components/ui/Themed';
import { StyleSheet } from 'react-native';
import AddNewPostButton from '@/components/newPost/AddNewPostButton';



export default function TabLayout() {
  const { tint, backgroundSecondary, text } = useColors();
  const { isLoading, session } = useAuth();

  if (isLoading) {
    return <Text>Loading...</Text>;
  }

  if (!session || !session.user) {
    return <Redirect href="/auth" />;
  }

  return (
    <>
      <Tabs
        screenOptions={{
          tabBarShowLabel: false,
          tabBarActiveTintColor: tint,
          headerShown: useClientOnlyValue(false, true),
          tabBarStyle: [styles.container, { backgroundColor: backgroundSecondary, shadowColor: text }],
        }}>
        <Tabs.Screen
          name="index"
          options={{
            tabBarIcon: ({ color }) => <FontAwesome size={26} name="home" color={color} />,
            headerStyle: {
              height: 120,
            },
            headerTitle: () => null,
            headerLeft: () => <HeaderLeft />,
            headerRight: () => <HeaderRight />,
          }}
        />
        <Tabs.Screen
          name="search"
          options={{
            tabBarIcon: ({ color }) => <FontAwesome size={24} name="search" color={color} />,
            headerShown: false,
          }}
        />
        <Tabs.Screen
          name="my-profile"
          options={{
            tabBarIcon: ({ color }) => <FontAwesome size={24} name="user-circle-o" color={color} />,
            headerShown: false,
          }}
        />
      </Tabs>
      <AddNewPostButton />
    </>
  );
}


const styles = StyleSheet.create({
  container: {
    width: "70%",
    height: 65,
    paddingBottom: 0,
    marginHorizontal: 15,
    borderTopColor: "transparent",
    borderRadius: 35,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.65,
    shadowRadius: 3,
    position: "absolute",
    bottom: 40,
  },

});