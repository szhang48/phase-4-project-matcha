class PostSerializer < ActiveModel::Serializer
  attributes :id, :title, :description, :picture, :like
end
