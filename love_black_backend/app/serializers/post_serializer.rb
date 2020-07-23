class PostSerializer
  include FastJsonapi::ObjectSerializer
  attributes :id, :content, :state, :country, :likes, :comments
end
