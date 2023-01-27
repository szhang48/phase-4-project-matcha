class AddProfilePhotoToPost < ActiveRecord::Migration[6.1]
  def change
    add_column :posts, :profile_photo, :string
  end
end
