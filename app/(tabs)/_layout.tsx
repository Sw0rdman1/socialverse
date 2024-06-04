import React from 'react';
import { Tabs } from 'expo-router';

import { useClientOnlyValue } from '@/components/useClientOnlyValue';
import { HeaderLeft, HeaderRight } from '@/components/home/Header';
import { useColors } from '@/hooks/useColors';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { useCurrentUser } from '@/context/AppContext';
import Avatar from '@/components/ui/Avatar';

function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
  size?: number;
  myProfile?: boolean;
}) {
  const currentUser = useCurrentUser();
  const iconSize = props.size || 24;

  if (props.myProfile) {
    return <Avatar size={22} url={currentUser.profilePicture} />;
  }
  return <FontAwesome size={iconSize}  {...props} />;
}

export default function TabLayout() {
  const { tint } = useColors();

  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        tabBarActiveTintColor: tint,
        headerShown: useClientOnlyValue(false, true),
      }}>
      <Tabs.Screen
        name="index"
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} />,
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
          tabBarIcon: ({ color }) => <TabBarIcon size={20} name="search" color={color} />,
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="my-profile"
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="user-circle-o" color={color} myProfile />,
          headerShown: false,
        }}
      />

    </Tabs>
  );
}
