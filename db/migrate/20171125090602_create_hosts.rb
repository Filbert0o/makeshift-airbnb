class CreateHosts < ActiveRecord::Migration[5.1]
  def change
    create_table :hosts do |t|
      t.string :name, null: false
      t.string :email, null: false
      t.string :type
      t.string :address, null: false
      t.timestamps
    end
  end
end
