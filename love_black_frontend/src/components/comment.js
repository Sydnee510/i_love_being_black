class Comment {
    constructor(attributes){
        this.id = attributes.id
        this.text = attributes.text
        this.post_id = attributes.post_id
        this.commentsAdapter = new CommentsAdapter()
    }

}