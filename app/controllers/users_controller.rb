class UsersController < ApplicationController
    skip_before_action :authorized_user, only: [:create]
    
    def index 
        render json: User.all, status: :ok
    end

    def show
        user = User.find(session[:user_id])
        render json: user, status: :ok
    end

    def create 
        user = User.create!(user_params)
        render json: user, status: :created
    end

    def profile_photo
        user = User.find_by(id: session[:user_id])
        user.update_attribute(:profile_photo, params[:profile_photo])
        render json: user, status: :ok
    end

    def cover_photo
        user = User.find_by(id: session[:user_id])
        user.update_attribute(:cover_photo, params[:cover_photo])
        render json: user, status: :ok
    end

    private 
    def user_params
        params.permit(:name, :email, :password)
    end
end
