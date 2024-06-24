import Post from '@/model/Post';
import React, { createContext, useState } from 'react';

interface PostsContextType {
    newPost: Post | null;
    setNewPost: (post: Post | null) => void;
}

export const PostsContext = createContext<PostsContextType>({
    newPost: null,
    setNewPost: () => { },
});

interface PostsProviderProps {
    children: React.ReactNode;
}

export const PostsProvider: React.FC<PostsProviderProps> = ({ children }) => {
    const [newPost, setNewPost] = useState<Post | null>(null);

    return (
        <PostsContext.Provider value={{ newPost, setNewPost }}>
            {children}
        </PostsContext.Provider>
    );
};

export const usePostsContext = () => {
    const context = React.useContext(PostsContext);
    if (context === undefined) {
        throw new Error('usePostsContext must be used within a PostsProvider');
    }
    return context;
}
