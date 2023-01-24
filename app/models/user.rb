class User < ApplicationRecord
    belongs_to :bio 
    belongs_to :post 
end
