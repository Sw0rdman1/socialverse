import { useApi } from "@/context/AppContext";
import Post from "@/model/Post";
import { User } from "@/model/User";
import { useEffect, useState } from "react";

export const useUser = (id: string) => {
    const [loading, setLoading] = useState(true)
    const [user, setUser] = useState<User | null>(null)
    const [userPosts, setUsersPosts] = useState<Post[]>([])
    const { users: userController } = useApi()


    useEffect(() => {
        const fetchUser = async () => {
            const user = await userController.getUserByID(id)
            console.log(user as User);

            setUser(user as User)
            setLoading(false)
        }

        // const fetchUserPosts = async () => {
        //     const posts = await userController.getUserPosts(id)
        //     setUsersPosts(posts)
        // }

        fetchUser()

    }, [])

    return { loading, user, userPosts }
}