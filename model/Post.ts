export default interface Post {
    id: number;
    user: {
        id: number;
        username: string;
        profile: string;
    };
    image: string;
    caption: string;
    likes: number;
    comments: number;
    saves: number;
    createdAt: string;
}