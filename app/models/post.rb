class Post < ApplicationRecord
    has_many :users
    has_many :bios, through: :user 


    validates :name, :content, :picture, presence: true
    


end
