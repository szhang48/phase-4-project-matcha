class User < ApplicationRecord
    belongs_to :bio, optional: true
    belongs_to :post, optional: true

    has_secure_password 
end
