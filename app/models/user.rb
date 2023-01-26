class User < ApplicationRecord
    belongs_to :bio, optional: true
    belongs_to :post, optional: true

    validates :name, :email, :password, presence: true

    has_secure_password 
end
