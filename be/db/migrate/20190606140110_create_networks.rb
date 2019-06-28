class CreateNetworks < ActiveRecord::Migration[5.2]
  def change
    create_table :networks do |t|
      t.string :name
      t.integer :points
      t.string :bg_url
      t.string :avatar_url
      

      t.timestamps
    end
  end
end
