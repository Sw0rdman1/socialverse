import { SupabaseClient } from "@supabase/supabase-js";
import { User } from "@/model/User";
import { snakeToCamel } from "@/utils/caseConverter";

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

    


    public async getCurrentUserInformations(id: string): Promise<User> {
        const { data, error } = await this.supabase
            .from('users')
            .select('*')
            .eq('id', id)
            .single();

        if (error) {
            console.log(error.message);
            throw error;
        }

        return snakeToCamel(data) as User;
    }

    public async getProfileInformations(user: User): Promise<User> {
        const { data: followerCount, error: followerError } = await this.supabase
            .from('followers')
            .select('count(*)')
            .eq('user_id', user.id)
            .single();

        if (followerError) {
            console.log(followerError.message);
            throw followerError;
        }

        const { data: followingCount, error: followingError } = await this.supabase
            .from('following')
            .select('count(*)')
            .eq('user_id', user.id)
            .single();

        if (followingError) {
            console.log(followingError.message);
            throw followingError;
        }

        const { data: postCount, error: postError } = await this.supabase
            .from('posts')
            .select('count(*)')
            .eq('user_id', user.id)
            .single();

        if (postError) {
            console.log(postError.message);
            throw postError;
        }

        return {
            ...user,
            numberOfFollowers: Number(followerCount.count),
            numberOfFollowing: Number(followingCount.count),
            numberOfPosts: Number(postCount.count)
        };
    }


}