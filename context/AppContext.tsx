import React, { createContext, useContext, useEffect, useState } from 'react';
import GlobalController from '../services/GlobalController';
import { User } from '@/model/User';
import { supabase } from '@/config/supabase';
import { Session } from '@supabase/supabase-js';
import { jwtDecode } from 'jwt-decode'
import * as AppleAuthentication from 'expo-apple-authentication'
import { snakeToCamel } from '@/utils/caseConverter';
import { router } from 'expo-router';

interface AppContextType {
    user: User | null;
    signOut: () => Promise<void>;
    session: Session | null;
    isLoading: boolean;
    signInWithApple: () => Promise<void>;
    refreshUser: () => Promise<void>;
    api: GlobalController;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

interface AppProviderProps {
    children: React.ReactNode;
}

export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
    const api = GlobalController.getInstance();
    const [user, setUser] = useState<User | null>(null);
    const [session, setSession] = useState<Session | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    const signOut = async () => {
        await supabase.auth.signOut();
    }

    const refreshUser = async () => {
        const { data } = await supabase.auth.getUser();
        // setUser(data?.user);
    }

    const signInWithApple = async () => {
        try {
            const credential = await AppleAuthentication.signInAsync({
                requestedScopes: [
                    AppleAuthentication.AppleAuthenticationScope.FULL_NAME,
                    AppleAuthentication.AppleAuthenticationScope.EMAIL,
                ],
            })

            if (credential.identityToken) {
                const {
                    error,
                    data: { user },
                } = await supabase.auth.signInWithIdToken({
                    provider: 'apple',
                    token: credential.identityToken,
                })
                if (!error) {

                    if (credential.fullName?.givenName && credential.fullName?.familyName) {
                        const full_name = credential.fullName?.givenName + " " + credential.fullName?.familyName;

                        await supabase.auth.updateUser({
                            data: {
                                full_name
                            },
                        });


                        await supabase.from('users')
                            .update({
                                full_name
                            })
                            .eq('id', user?.id)

                        const { data } = await supabase.from('users').select('*').eq('id', user?.id).single();

                        setUser(snakeToCamel(data));
                    }


                }
            } else {
                throw new Error('No identityToken.')
            }
        } catch (e) {
            if ((e as any).code === 'ERR_REQUEST_CANCELED') {
                // handle that the user canceled the sign-in flow
            } else {
                // handle other errors
            }
        }
    }


    const appContextValue: AppContextType = {
        user,
        signOut,
        session,
        isLoading,
        refreshUser,
        signInWithApple,
        api
    };

    useEffect(() => {
        const { data } = supabase.auth.onAuthStateChange(async (event, session) => {
            setSession(session);
            if (session?.user) {
                const { data } = await supabase.from('users').select('*').eq('id', session.user.id).single();
                setUser(snakeToCamel(data));
                setIsLoading(false);
                router.replace('/');
            } else {
                setIsLoading(false);
                setUser(null);
            }


        });
        return () => {
            data.subscription.unsubscribe();
        };
    }, []);

    return <AppContext.Provider value={appContextValue}>{children}</AppContext.Provider>;
};

export const useCurrentUser = () => {
    const context = useContext(AppContext);
    if (!context || !context.user) {
        throw new Error('useAppContext must be used within a AppProvider');
    }
    return context.user;
};

export const useApi = () => {
    const context = useContext(AppContext);
    if (!context) {
        throw new Error('useAppContext must be used within a AppProvider');
    }
    return context.api;
};

export const useAuth = () => {
    const context = useContext(AppContext);
    if (!context) {
        throw new Error('useAppContext must be used within a AppProvider');
    }
    return {
        signOut: context.signOut,
        session: context.session,
        isLoading: context.isLoading,
        signInWithApple: context.signInWithApple,
        refreshUser: context.refreshUser,
    };
}