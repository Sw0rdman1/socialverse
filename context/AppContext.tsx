import React, { createContext, useContext, useEffect, useState } from 'react';
import GlobalController from '../services/GlobalController';


interface PostResponse {
    data: Post[];
    total: number;

}


interface AppContextProps {
    api: GlobalController;
    currentUser: User;
    initialPosts: PostResponse;
    loading: boolean
    refreshPosts: () => Promise<void>;
}

const AppContext = createContext<AppContextProps | undefined>(undefined);

interface AppProviderProps {
    children: React.ReactNode;
}

export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
    const api = GlobalController.getInstance();
    const [currentUser, setCurrentUser] = useState<User>({} as User);
    const [initialPosts, setInitialPosts] = useState<PostResponse>({} as PostResponse);
    const [loading, setLoading] = useState<boolean>(true);
    const { user, initialized } = useAuth();


    useEffect(() => {
        const fetchData = async () => {
            if (!initialized) {
                return;
            }

            if (!user) {
                setLoading(false);
                return;
            }

            const currentUser = await api.users.getCurrentUserInformations(user.id);
            setCurrentUser(currentUser);
            const posts = await api.posts.getPosts();
            setInitialPosts(posts);
            setTimeout(() => {
                setLoading(false);
            }, 1000);
        };

        fetchData();


    }, [user, initialized]);

    const refreshPosts = async () => {
        const posts = await api.posts.getPosts();
        setInitialPosts(posts);
    };

    return (
        <AppContext.Provider value={{ api, currentUser, initialPosts, loading, refreshPosts }}>
            {children}
        </AppContext.Provider>
    );
};

export const useAppContext = (): AppContextProps => {
    const context = useContext(AppContext);
    if (!context) {
        throw new Error('useAppContext must be used within a AppProvider');
    }
    return context;
};