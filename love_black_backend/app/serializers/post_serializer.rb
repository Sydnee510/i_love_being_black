class PostSerializer
  include FastJsonapi::ObjectSerializer
  attributes :content, :state, :country, :likes
end
