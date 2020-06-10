class PostsController < ApplicationController
    def index
        @posts = Post.all 
        render json: @posts, status: 200
    end
    def show 
        @post = Post.find(params[:id])
        render json: @post, status: 200
    end 
    def create 
        @post = Post.create(post_params)
        render json: @post, status: 200
    end
    def update 
        @post = Post.find(params[:id])
        @post.update(post_params)
        render json: @post, status: 200
    end
    def destroy
        @post = Post.find(params[:id])
        @post.destroy
        render json: @post, status: 200
    end 
    private
    def post_params
        params.require(:post).permit(:content, :state, :country)
    end
end
