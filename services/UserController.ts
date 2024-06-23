import { SupabaseClient } from "@supabase/supabase-js";
import { User } from "@/model/User";
import { camelToSnake, snakeToCamel } from "@/utils/caseConverter";


const ID_FROM_AUTH = '3d96adb2-dacb-4221-a5cf-ef7d98916512'
export class UserController {

    private supabase: SupabaseClient;

    constructor(supabase: SupabaseClient) {
        this.supabase = supabase;
    }

    public async signUpWithEmailAndPassword(email: string, password: string, fullName: string, username: string): Promise<void> {
        const {error} = await this.supabase.auth.signUp({
            email: email,
            password: password,
            options: { data: { full_name: fullName, username: username  } },
        })

        if (error) {
            console.log(error.message);
            throw error;
        }

    }

    public async signInWithEmailAndPassword(email: string, password: string): Promise<void> {
        const {error} = await this.supabase.auth.signInWithPassword({
            email: email,
            password: password
        })

        if (error) {
            console.log(error.message);
            throw error;
        }

    }

    public async signOut(): Promise<void> {
        const {error} = await this.supabase.auth.signOut();

        if (error) {
            console.log(error.message);
            throw error;
        }
    }

    
    public async getUserByID(id: string): Promise<User> {
        const { data, error } = await this.supabase
            .from('users')
            .select('*')
            .eq('id', id)
            .single();

        if (error) {
            console.log(error.message);
            throw error;
        }

        console.log(data);
        

        const { data: followerCount, error: followerError } = await this.supabase
            .from('followers')
            .select('*')
            .eq('following_id', id)

        if (followerError) {
            console.log(followerError.message);
            throw followerError;
        }


        const { data: followingCount, error: followingError } = await this.supabase
            .from('followers')
            .select('*')
            .eq('follower_id', id)

        if (followingError) {
            console.log(followingError.message);
            throw followingError;
        }


        const { data: postCount, error: postError } = await this.supabase
            .from('posts')
            .select('*')
            .eq('author_id', id)

        if (postError) {
            console.log(postError.message);
            throw postError;
        }


        return {
            ...snakeToCamel(data),
            numberOfFollowers: followerCount.length,
            numberOfFollowing: followingCount.length,
            numberOfPosts: postCount.length
        };
    }


    public async getProfileInformations(user: User): Promise<User> {
        const { data: followerCount, error: followerError } = await this.supabase
            .from('followers')
            .select('*', { count: 'exact'})
            .eq('user_id', user.id)

        if (followerError) {
            console.log(followerError.message);
            throw followerError;
        }

        const { data: followingCount, error: followingError } = await this.supabase
            .from('following')
            .select('*', { count: 'exact'})
            .eq('user_id', user.id)

        if (followingError) {
            console.log(followingError.message);
            throw followingError;
        }

        const { data: postCount, error: postError } = await this.supabase
            .from('posts')
            .select('count(*)')
            .eq('user_id', user.id)

        if (postError) {
            console.log(postError.message);
            throw postError;
        }

        return {
            ...user,
            numberOfFollowers: Number(followerCount),
            numberOfFollowing: Number(followingCount),
            numberOfPosts: Number(postCount)
        };
    }

    public async searchUsers(searchTerm: string): Promise<User[]> {
        const { data, error } = await this.supabase
            .from('users')
            .select('*')
            .ilike('username', `%${searchTerm}%`)
            .limit(10);


        if (error) {
            console.log(error.message);
            throw error;
        }

        return data.map((user: User) => snakeToCamel(user)) as User[];
    }

}