class Post < ApplicationRecord
    validates :content, presence: true
    validates :state, presence: true, length: { minimum: 4 }
    validates :country, presence: true, length: { is: 2 }
end
