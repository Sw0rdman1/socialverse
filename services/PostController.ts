import { SupabaseClient } from "@supabase/supabase-js";
import { snakeToCamel } from "../utils/caseConverter";
import Post from "@/model/Post";

export class PostController {

    private supabase: SupabaseClient;

    constructor(supabase: SupabaseClient) {
        this.supabase = supabase;
    }

    public async getAllPosts(page = 1, pageSize = 3): Promise<{ data: Post[], total: number }> {
        try {
            let { data: posts, error } = await this.supabase
                .from('posts')
                .select(`*,author:users!posts_author_id_fkey(*)`)                
                .range((page - 1) * pageSize, page * pageSize - 1)
                .order('created_at', { ascending: false });


            const { count } = await this.supabase
                .from('posts')
                .select('*', { count: 'exact' });

            if (error) {
                console.log('Error fetching posts count:', error.message);
                console.log(error);
                
                throw error;
            }


            if (!count) {
                throw new Error('Error fetching posts count');
            }

            return {
                data: snakeToCamel(posts),
                total: count
            }

        } catch (error) {
            console.error('Error fetching posts:', (error as Error).message);
            return { data: [], total: 0 };
        }

    }

    public async getPostsByUser(userID: string): Promise<Post[]> {
        try {
            let { data: posts, error } = await this.supabase
                .from('posts')
                .select(`*,author:users!posts_author_id_fkey(*)`)                
                .eq('author_id', userID);

            if (error) {
                console.log('Error fetching posts:', error.message);
                throw error;
            }

            return snakeToCamel(posts);

        } catch (error) {
            console.error('Error fetching posts:', (error as Error).message);
            return [];
        }
    }

    public async getPostByID(id: string): Promise<Post | null> {
        try {
            let { data: posts, error } = await this.supabase
                .from('posts')
                .select(`*,author:users!posts_author_id_fkey(*)`)                
                .eq('id', id)
                .single();

            if (error) {
                console.log('Error fetching post:', error.message);
                throw error;
            }

            return snakeToCamel(posts);

        } catch (error) {
            console.error('Error fetching post:', (error as Error).message);
            return null;
        }
    }


    public async createPost(caption: string, imageURL: string, authorID: number): Promise<void> {
        try {

            let { data, error } = await this.supabase
                .from('posts')
                .insert({
                    created_at: new Date(),
                    caption: caption,
                    imageUrl: imageURL,
                    author: authorID,
                });


            if (error) {
                throw error;
            }

        } catch (error) {
            console.error('Error creating post:', (error as Error).message);
        }
    }

    public async generateNewPost(): Promise<void> {
        const newRandomPost = {
            
        }
    }       

    // Update an existing post
    public async updatePost(): Promise<void> {

    }

    // Delete a post
    public async deletePost(): Promise<void> {

    }
}
