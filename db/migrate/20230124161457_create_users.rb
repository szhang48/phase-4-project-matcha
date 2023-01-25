class CreateUsers < ActiveRecord::Migration[6.1]
  def change
    create_table :users do |t|
      t.integer :like
      t.integer :match
      t.integer :post_id
      t.integer :bio_id

      t.timestamps
    end
  end
end
