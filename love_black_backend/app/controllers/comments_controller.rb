class CommentsController < ApplicationController
    def index
        comments = Comment.all 
        render json: CommentSerializer.new(comments)
    end
    def show 
        comment = Comment.find(params[:id])
        options = {
            include: [:post]
        }
        render json: CommentSerializer.new(comment, options)
    end 
    def create 
        comment = Comment.new(comment_params)
        if comment.save
        render json: CommentSerializer.new(comment)    
        else 
            render :json => { :errors => comment.errors.full_messages }, :status => 422
        end
    end
    private 
    def comment_params
        params.require(:comment).permit(:text, :post_id)
    end
end
