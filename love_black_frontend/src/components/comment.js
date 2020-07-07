class Comment {
    constructor(text, id, post_id){
        this.comments = []
        this.text = text
        this.id = id
        this.post_id = post_id
        this.commentsAdapter = new CommentsAdapter()
       // this.bindingsAndEventListeners()
   
    }
    bindingsAndEventListeners(){
        this.commentsContainer = document.getElementById('comments-container')
        this.commentForm = document.getElementById('new-comment-form')
        //this.commentForm = addEventListener('submit', this.createComment.bind(this))
        this.newCommentText = document.getElementById('new-comment-text')
    }
  
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

    render(){
        this.commentsContainer.innerHTML = this.comments.map(comment => comment.renderLi()).join('')
    }

}