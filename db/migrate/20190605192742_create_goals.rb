class CreateGoals < ActiveRecord::Migration[5.2]
  def change
    create_table :goals do |t|
      t.references :partner, polymorphic: true
      t.bool :repeatable
      t.string :time_basis
      t.string :punishment
      t.string :end_date
      t.string :description

      t.timestamps
    end
  end
end
