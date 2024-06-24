import React from 'react';
import { Redirect, Stack } from 'expo-router';

import { useColors } from '@/hooks/useColors';
import { useAuth } from '@/context/AppContext';
import { Text } from '@/components/ui/Themed';
import { PostsProvider } from '@/context/PostsContext';


export default function TabLayout() {
    const { tint } = useColors();
    const { isLoading, session } = useAuth();

    if (isLoading) {
        return <Text>Loading...</Text>;
    }

    if (!session || !session.user) {
        return <Redirect href="/auth" />;
    }

    return (
        <PostsProvider>
            <Stack>
                <Stack.Screen name='(home)' options={{ headerShown: false }} />
                <Stack.Screen
                    name="post/[postID]"
                    options={{ headerShown: false, presentation: 'modal' }}
                />
                <Stack.Screen
                    name="user/[userID]"
                    options={{ headerShown: false, presentation: 'modal' }}
                />
                <Stack.Screen
                    name="newPost"
                    options={{ headerShown: false, presentation: 'modal' }}
                />
            </Stack>
        </PostsProvider>
    );
}
