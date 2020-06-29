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
        @post = Post.new(post_params)
        if @post.save
        render json: @post, status: 200
        else 
            render :json => { :errors => @post.errors.full_messages }, :status => 422
        end
    end
    def update 
        @post = Post.find(params[:id])
        if @post.update(post_params)
        render json: @post, status: 200
        else 
            render :json => { :errors => @post.errors.full_messages }, :status => 422
        end
    end
    def destroy
       # binding.pry
        @post = Post.find(params[:id])
        @post.delete
        render json: {postId: @post.id}
    end 
    private
    def post_params
        params.require(:post).permit(:content, :state, :country, :likes)
    end
end
