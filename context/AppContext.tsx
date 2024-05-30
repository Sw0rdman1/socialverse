import React, { createContext, useContext, useEffect, useState } from 'react';
import GlobalController from '../services/GlobalController';
import { User } from '@/model/User';


interface AppContextProps {
    api: GlobalController;
    currentUser: User;
}

interface CurrentUserProps {
    currentUser: User;
}

interface ApiProps {
    api: GlobalController;
}

const AppContext = createContext<AppContextProps | undefined>(undefined);

interface AppProviderProps {
    children: React.ReactNode;
}

export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
    const api = GlobalController.getInstance();
    const [currentUser, setCurrentUser] = useState<User>({} as User);


    useEffect(() => {
        setCurrentUser({
            id: '1312412512',
            displayName: 'Bozidar Vujasinovic',
            email: 'vujasinovicb2019@gmail.com',
            profilePicture: 'https://jmrmolshsmmyxcivsxxv.supabase.co/storage/v1/object/sign/avatars/WhatsApp%20Image%202024-02-07%20at%2000.19.24.jpeg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJhdmF0YXJzL1doYXRzQXBwIEltYWdlIDIwMjQtMDItMDcgYXQgMDAuMTkuMjQuanBlZyIsImlhdCI6MTcxNjA1Nzg3NSwiZXhwIjoxNzQ3NTkzODc1fQ.Y65iuGQe9k9ViPuvr40NKa3_i2FKniNGVSLsz3_4RSE&t=2024-05-18T18%3A44%3A35.973Z',
            numberOfFollowers: 1452,
            numberOfFollowing: 641,
            numberOfPosts: 77,
        });

    }, []);

    return (
        <AppContext.Provider value={{ api, currentUser }}>
            {children}
        </AppContext.Provider>
    );
};

export const useCurrentUser = () => {
    const context = useContext(AppContext);
    if (!context) {
        throw new Error('useAppContext must be used within a AppProvider');
    }
    return context.currentUser;
};

export const useApi = () => {
    const context = useContext(AppContext);
    if (!context) {
        throw new Error('useAppContext must be used within a AppProvider');
    }
    return context.api;
};