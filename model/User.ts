
export interface User {
    id: string;
    email: string;
    username: string;
    fullName: string;
    avatarUrl: string;
    numberOfFollowers?: number;
    numberOfFollowing?: number;
    numberOfPosts?: number;
    isFollowing?: boolean;
}