import { useApi } from "@/context/AppContext";
import Post from "@/model/Post";
import { User } from "@/model/User";
import { useEffect, useState } from "react";


export const usePosts = () => {
    const [loading, setLoading] = useState(false)
    const [posts, setPosts] = useState<Post[]>([])
    const [total, setTotal] = useState(0)
    const { posts: postController } = useApi()

    useEffect(() => {
        const fetchPosts = async () => {
            setLoading(true)
            const posts = await postController.getAllPosts();
            setPosts(posts.data)
            setTotal(posts.total)
            setLoading(false)
        }
        fetchPosts()
    }, [])

    const refreshPosts = async () => {
        setLoading(true)
        const posts = await postController.getAllPosts();
        setPosts(posts.data)
        setTotal(posts.total)
        setLoading(false)
    }

    const onRefresh = () => {
        setLoading(true)
        setTimeout(() => {
        }, 2000)
    }


    return { loading, posts, onRefresh, total, refreshPosts }

}

export const usePost = (id: string) => {
    const [loading, setLoading] = useState(true)
    const [post, setPost] = useState<Post | null>(null)
    const { posts: postController } = useApi()

    useEffect(() => {
        const fetchPost = async () => {
            setLoading(true)
            const post = await postController.getPostByID(id)
            setPost(post)
            setLoading(false)
        }
        fetchPost()
    }, [])

    return { loading, post }
}