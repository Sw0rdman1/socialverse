import { useApi } from "@/context/AppContext";
import { User } from "@/model/User";
import { useEffect, useState } from "react";

export const useSearch = (searchTerm: string) => {
    const [searchResults, setSearchResults] = useState<User[]>([]);
    const [debouncedSearchTerm, setDebouncedSearchTerm] = useState(searchTerm);
    const [loading, setLoading] = useState(false);
    const { users: usersController } = useApi();

    useEffect(() => {
        setLoading(true);
        const handler = setTimeout(() => {
            setDebouncedSearchTerm(searchTerm);
        }, 500);

        return () => {
            clearTimeout(handler);
        };
    }, [searchTerm]);

    useEffect(() => {
        const fetchSearchResults = async () => {
            const users = await usersController.searchUsers(debouncedSearchTerm);
            setSearchResults(users);
            setLoading(false);
        };
        if (debouncedSearchTerm) {
            fetchSearchResults();
        } else {
            setSearchResults([]);
            setLoading(false);
        }
    }, [debouncedSearchTerm]);

    return { searchResults, loading };

}