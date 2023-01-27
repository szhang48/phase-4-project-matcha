class PostsController < ApplicationController

    before_action :set_post, only: [:index, :create, :update, :destroy]
    
    def index
        render json: Post.all 
    end

    def create
        post = Post.create!(post_params)
        render json: post, status: :created
    end

    def update 
        @post.update!(post_params)
        render json: post, status: :accepted 
    end

    def destroy
        @post.destroy 
        head :no_content 
    end

    private 
    def post_params
        params.permit(:name, :content, :picture)
    end
end
