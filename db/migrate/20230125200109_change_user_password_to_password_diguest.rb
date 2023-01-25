class ChangeUserPasswordToPasswordDiguest < ActiveRecord::Migration[6.1]
  def change
    rename_column :users, :password, :password_digest
  end

  hi sam 
end
