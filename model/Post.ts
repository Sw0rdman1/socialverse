import { User } from "./User";

export default interface Post {
    id: string;
    author: User
    createdAt: string;
    image: string;
    caption: string;
    likes: number;
    comments: number;
    saves: number;
}