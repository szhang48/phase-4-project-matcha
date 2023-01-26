class Post < ApplicationRecord
    has_many :users, dependent: :destroy
    has_many :bios, through: :user 

    validates :name, :content, :picture, presence: true
    

end
