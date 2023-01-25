class User < ApplicationRecord
    belongs_to :bio, optional: true
    belongs_to :post, optional: true
    belongs_to :like, optional: true
end
