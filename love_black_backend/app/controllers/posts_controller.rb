class PostsController < ApplicationController
    def index
        posts = Post.all 
        render json: PostSerializer.new(posts)
    end
    def show 
        post = Post.find(params[:id])
        render json: PostSerializer.new(post).serializable_hash
    end 
    def create 
        post = Post.new(post_params)
        if post.save
        render json: PostSerializer.new(post)  
        else 
            render :json => { :errors => post.errors.full_messages }, :status => 422
        end
    end
    def update 
        post = Post.find(params[:id])
        if post.update(post_params)
        render json: PostSerializer.new(post)
        else 
            render :json => { :errors => post.errors.full_messages }, :status => 422
        end
    end
    def destroy
        post = Post.find(params[:id])
        post.comments.each { |comment| comment.delete }
        post.delete
        render json: post.to_json
    end 
    private
    def post_params
        params.require(:post).permit(:content, :state, :country, :likes)
    end
end
