class Bio < ApplicationRecord
    has_many :users, dependent: :destroy
    has_many :posts, through: :user 

    validates :name, :location, :description, :school, presence: true 


end
