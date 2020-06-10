class CreatePosts < ActiveRecord::Migration[6.0]
  def change
    create_table :posts do |t|
      t.text :content
      t.string :state
      t.string :country
      t.integer :likes
      t.timestamps null: false
    end
  end
end
