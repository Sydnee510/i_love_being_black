class CommentSerializer
  include FastJsonapi::ObjectSerializer
  attributes :text, :post
 # belongs_to :post
end
