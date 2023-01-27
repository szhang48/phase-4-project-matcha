class PostsController < ApplicationController

    def show
        current_user = User.find_by(name:params[:name])
        render :show
    end

    def index
        render json: Post.all 
    end

    def create
        post = Post.create!(post_params)
        render json: post, status: :created
    end

    private 
    def post_params
        params.permit(:name, :content, :picture)
    end
end
