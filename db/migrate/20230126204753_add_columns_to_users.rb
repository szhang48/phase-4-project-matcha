class AddColumnsToUsers < ActiveRecord::Migration[6.1]
  def change
    add_column :users, :profile_photo, :string
    add_column :users, :cover_photo, :string
    add_column :users, :birthday, :string
  end
end
