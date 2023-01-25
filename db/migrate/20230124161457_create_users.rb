class CreateUsers < ActiveRecord::Migration[6.1]
  def change
    create_table :users do |t|
      t.string :name
      t.string :email 
      t.string :password
      t.integer :post_id
      t.integer :bio_id

      t.timestamps
    end
  end
end
