import { SupabaseClient } from "@supabase/supabase-js";
import { snakeToCamel } from "../utils/caseConverter";
import Comment from "@/model/Comment";


export class CommentController {

    private supabase: SupabaseClient;

    constructor(supabase: SupabaseClient) {
        this.supabase = supabase;
    }

    public async getCommentsForPost(postID: number): Promise<Comment[]> {
        try {
            let { data: comments, error } = await this.supabase
                .from('comments')
                .select('*, author:users(*)')
                .eq('post', postID)
                .order('created_at', { ascending: false });



            if (error) {
                console.log('Error fetching comments count:', error.message);
                throw error;
            }

            if (!comments) {
                throw new Error('Error fetching comments');
            }


            return snakeToCamel(comments) as Comment[];

        } catch (error) {
            console.error('Error fetching posts:', (error as Error).message);
            return [];
        }
    }

    // Create a new post
    public async createComment(postID: number, text: string, authorID: number): Promise<void> {
        try {
            if (!text) {
                throw new Error('Text is required');
            }

            let { data, error } = await this.supabase
                .from('comments')
                .insert({
                    created_at: new Date(),
                    text: text,
                    post: postID,
                    author: authorID,
                });


            if (error) {
                throw error;
            }

            console.log('Comment created:', data);

        } catch (error) {
            console.error('Error creating post:', (error as Error).message);
        }


    }

    // Update an existing post
    public async updatePost(): Promise<void> {

    }

    // Delete a post
    public async deletePost(): Promise<void> {

    }
}
