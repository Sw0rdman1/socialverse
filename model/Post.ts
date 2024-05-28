import { User } from "./User";

export default interface Post {
    id: string;
    caption: string;
    imageUrl: string;
    author: User;
    createdAt: string;
    numberOfLikes: number;
    numberOfComments: number;
    numberOfBookmarks: number;
    liked?: boolean;
    bookmarked?: boolean;
    newPost?: boolean;
}