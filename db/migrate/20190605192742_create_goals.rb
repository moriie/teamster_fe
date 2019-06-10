class CreateGoals < ActiveRecord::Migration[5.2]
  def change
    create_table :goals do |t|
      t.references :partner, polymorphic: true
      t.boolean :repeatable
      t.string :time_basis
      t.string :punishment
      t.string :end_date
      t.string :description
      t.integer :user_id

      t.timestamps
    end
  end
end
