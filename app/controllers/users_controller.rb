class UsersController < ApplicationController
    skip_before_action :authorized_user, only:[:create]
    def index 
        render json: User.all
    end

    def show
        user = User.find(session[:user_id])
        byebug
        render json: user, status: :ok
    end

    def create 
        user = User.create!(user_params)
        render json: user, status: :created
    end

    # def login
    #     user = User.find_by(name:params[:name])
    #     if user && user.authenticate(params[:password])
    #         render json: user, status: :ok
    #     else
    #         render json: { errors: 'Incorrect user or password'}, status: 401
    #     end
    # end

    private 
    def user_params
        params.permit(:name, :email, :password)
    end
end
