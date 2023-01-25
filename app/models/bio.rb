class Bio < ApplicationRecord
    has_many :users, dependent: :destroy

    has_many :posts, through: :user 

    

end
