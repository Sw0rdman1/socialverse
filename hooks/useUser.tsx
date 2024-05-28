import Post from "@/model/Post";
import { User } from "@/model/User";
import { useEffect, useState } from "react";

const user1: User = {
    id: '1',
    email: 'vujasinovicb2019@gmail.com',
    displayName: 'vujasinovicb',
    profilePicture: 'https://jmrmolshsmmyxcivsxxv.supabase.co/storage/v1/object/sign/avatars/WhatsApp%20Image%202024-02-07%20at%2000.19.24.jpeg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJhdmF0YXJzL1doYXRzQXBwIEltYWdlIDIwMjQtMDItMDcgYXQgMDAuMTkuMjQuanBlZyIsImlhdCI6MTcxNjA1Nzg3NSwiZXhwIjoxNzQ3NTkzODc1fQ.Y65iuGQe9k9ViPuvr40NKa3_i2FKniNGVSLsz3_4RSE&t=2024-05-18T18%3A44%3A35.973Z'
}

const post1: Post = {
    id: '1',
    author: user1,
    createdAt: '2021-08-01T12:00:00',
    imageUrl: 'https://www.serbia.travel/files/1-Kalemegdan%20%2C%20Beograd%20%2C%20Leto%20%2C%20Pobednik%20%2C%20Shutterstock%20(2)-0-1280x768.jpg',
    caption: 'This is a test caption #test #caption',
    numberOfLikes: 123,
    numberOfComments: 12,
    numberOfBookmarks: 10

}

export const useUser = (id: string) => {
    const [loading, setLoading] = useState(true)
    const [user, setUser] = useState<User | null>(null)
    const [userPosts, setUsersPosts] = useState<Post[]>([])


    useEffect(() => {
        setUser(user1)
        setUsersPosts([post1])
        setLoading(false)
    }, [])

    return { loading, user, userPosts }
}