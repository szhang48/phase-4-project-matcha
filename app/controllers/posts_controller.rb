class PostsController < ApplicationController

    def index
        render json: Post.all 
    end

    def create
        post = Post.create!(post_params)
        render json: post, status: :created
    end

    private 
    def post_params
        params.permit(:title, :description, :picture, :like)
    end
end
