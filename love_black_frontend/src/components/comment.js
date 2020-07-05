class Comment {
    constructor(text, id, post_id){
        this.text = text
        this.id = id
        this.post_id = post_id
        this.commentsAdapter = new CommentsAdapter()
    }
    // this.commentForm = document.querySelector("#new-comment-form")
    // this.newCommentText = document.getElementById("new-comment-text")
    // this.commentsContainer = document.getElementById('comments-container')
    createComment(e){
        e.preventDefault()
        const text = this.newCommentText.value
        this.commentsAdapter.createComment(text).then(comment => {
            this.comments.push(new Comment(comment))
            this.newCommentText.value = ''
           // this.render()
            //alert("post created!")
        })
    }
    // render(){
    //     this.commentsContainer.innerHTML = this.comments.map(comment => comment.renderLi()).join('')
    // }

}