class BiosController < ApplicationController

    def index 
        render json: Bio.all 
    end

    def show 
        bio = Bio.find(params[:id]) 
        render json: bio, status: 200
    end

    def create 
        bio = Bio.create!(bio_params)
        render json: bio.post, status: :created
    end

    private
    def bio_params
        params.permit(:name, :location, :description, :school, :dating_preference)
    end
end
