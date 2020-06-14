class Post < ApplicationRecord
    validates :content, presence: true
    validates :state, presence: true
    validates :country, presence: true
end
