class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :email, :password_digest, :profile_photo, :cover_photo, :birthday

  belongs_to :post
end
