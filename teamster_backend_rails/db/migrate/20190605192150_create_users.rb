class CreateUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.string :username
      t.string :password_digest
      t.string :bio
      t.string :age
      t.string :email
      t.string :location
      t.string :avatar
      t.integer :network_id

      t.timestamps
    end
  end
end
