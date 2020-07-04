class CommentSerializer
  include FastJsonapi::ObjectSerializer
  attributes :text, :created_at
  belongs_to :post
end
