
export interface User {
    id: string;
    email: string;
    displayName: string;
    profilePicture: string;
    numberOfFollowers?: number;
    numberOfFollowing?: number;
    numberOfPosts?: number;
    isFollowing?: boolean;
}