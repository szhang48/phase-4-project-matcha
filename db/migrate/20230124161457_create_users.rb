class CreateUsers < ActiveRecord::Migration[6.1]
  def change
    create_table :users do |t|
      t.integer :like
      t.integer :match

      t.timestamps
    end
  end
end
