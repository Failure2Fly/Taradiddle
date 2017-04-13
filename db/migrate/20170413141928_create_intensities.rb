class CreateIntensities < ActiveRecord::Migration[5.0]
  def change
    create_table :intensities do |t|
      t.integer :level
      t.timestamps
    end
  end
end
