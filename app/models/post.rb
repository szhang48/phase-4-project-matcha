class Post < ApplicationRecord
    has_many :users, dependent: :destroy
    has_many :bios, through: :user 
end
