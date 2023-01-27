class PostToUserSerializer < ActiveModel::Serializer
  attributes :id, :name, :content, :picture
  has_many :users
end

class PostSerializer < ActiveModel::Serializer
  has_many :users
  class UserSerializer < ActiveModel::Serializer
    attributes :id, :name, :content, :picture
  end
  
end


