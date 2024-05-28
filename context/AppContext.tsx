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
            profilePicture: "https://t3.ftcdn.net/jpg/02/99/04/20/360_F_299042079_vGBD7wIlSeNl7vOevWHiL93G4koMM967.jpg"
        });

    }, []);

    return (
        <AppContext.Provider value={{ api, currentUser }}>
            {children}
        </AppContext.Provider>
    );
};

export const useCurrentUser = (): CurrentUserProps => {
    const context = useContext(AppContext);
    if (!context) {
        throw new Error('useAppContext must be used within a AppProvider');
    }
    return { currentUser: context.currentUser };
};