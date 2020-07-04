class CommentSerializer
  include FastJsonapi::ObjectSerializer
  attributes :id, :text, :post_id
 # belongs_to :post
end
