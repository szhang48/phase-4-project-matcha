class CreateBios < ActiveRecord::Migration[6.1]
  def change
    create_table :bios do |t|
      t.string :name
      t.string :location
      t.string :description
      t.string :school
      t.string :occupation
      t.string :dating_preference

      t.timestamps
    end
  end
end
