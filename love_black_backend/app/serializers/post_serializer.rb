class PostSerializer
  include FastJsonapi::ObjectSerializer
  attributes :id, :content, :state, :country, :likes, :comments
  #has_many :comments
end
