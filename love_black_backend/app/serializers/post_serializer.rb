class PostSerializer
  include FastJsonapi::ObjectSerializer
  attributes :id, :content, :state, :country, :likes
  has_many :comments
end
