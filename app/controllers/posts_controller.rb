class PostsController < ApplicationController

    def show
        current_user = User.find_by(name:params[:name])
        render :show
    end

    before_action :set_post, only: [:index, :create, :update, :destroy]
    
    def index
        render json: Post.all, status: :ok
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
