class Posts {
    constructor() {
         this.posts = []
        this.adapter = new PostsAdapter()
        this.commentsAdapter = new CommentsAdapter()
        this.initBindingsAndEventListeners()
        this.fetchAndLoadPosts()
    }

    initBindingsAndEventListeners(){
        this.postsContainer = document.getElementById('posts-container')
        this.newPostContent = document.getElementById('new-post-content')
        this.newPostState = document.getElementById('new-post-state')
        this.newPostCountry = document.getElementById('new-post-country')
        this.newPostLikes = document.getElementById('new-post-likes')
        this.postForm = document.getElementById('new-post-form')
        this.postForm.addEventListener('submit', this.createPost.bind(this))
        this.postsContainer.addEventListener('click', this.handleClick.bind(this))
    }

    createPost(e){
        e.preventDefault()
        const value = this.newPostContent.value
        const st = this.newPostState.value
        const co = this.newPostCountry.value
        this.adapter.createPost(value, st, co).then(post => {
            const postAttributes = post.data.attributes;
            this.posts.push(new Post(postAttributes.id, postAttributes.content, postAttributes.state, postAttributes.country))
            this.newPostContent.value = ''
            this.newPostState.value = ''
            this.newPostCountry.value = ''
            this.render()
            alert("post created!")
        })
    }

    deletePost(e){
        this.adapter.deletePost(e.target.id).then(res => {
            for (let i = 0; i < this.posts.length; i++) {
                if (this.posts[i].id.toString() === e.target.id) {
                    this.posts.splice(i, 1)
                    break;
                }
            }
            this.render()
        })
    }
    likePost(e){
        const likeId = e.target.getAttribute("data-id")
        let input = document.getElementById(`number-input-${likeId}`)
        input.value = parseInt(input.value) + 1
    }

    handleClick(e) {
        e.preventDefault()
        if (e.target.classList.contains('delete-post')) {
           	this.deletePost(e)
            alert("post deleted!")
        } 
        else if (e.target.classList.contains('create-comment')){
            this.createComment(e)
            alert("comment posted")
        }
        else if (e.target.classList.contains('like-button')){
            this.likePost(e)
            alert("post liked")
        }
    }

    createComment(e){
        const value = e.target.previousElementSibling.value ? e.target.previousElementSibling.value : "unspecified comment"
        const postId = e.target.getAttribute("data-id")

        this.commentsAdapter.createComment(value, postId)
            .then(comment => {
                const commentAttributes = comment.data.attributes;
                const newComment = new Comment(commentAttributes.id, commentAttributes.text, commentAttributes.post_id)
                
                for (let i = 0; i < this.posts.length; i++) {
                    if (this.posts[i].id.toString() === postId) {
                        this.posts[i].comments.push(newComment)
                        break;
                    }
                }
                
                document.getElementById(`new-comment-form-${commentAttributes.post_id}`).reset()
                this.render()
            })
    }	

    fetchAndLoadPosts() {
        this.adapter
        .getPosts()
        .then(posts=> {
            posts.forEach(post => this.posts.push(new Post(post.id, post.attributes.content, post.attributes.state, post.attributes.country, post.attributes.likes, post.attributes.comments )))
            console.log(this.posts)
        })
        .then(() => {
            this.render()
        })
    }

    fetchAndLoadComments() {
        const allcomments = []
        this.commentsAdapter.getComments()
        .then(comments => {
            comments.forEach(comment => allcomments.push(new Comment(comment.id, comment.attributes.text, comment.attributes.post_id)))
            console.log(allcomments)
        })
    }

    render(){
        this.postsContainer.innerHTML = this.posts.map(post => post.renderLi()).join('')
    }
    }

