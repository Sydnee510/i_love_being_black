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
    //    this.postsContainer.addEventListener('dblclick', this.handlePostClick.bind(this))
    //     this.postsContainer.addEventListener('blur', this.updatePost.bind(this), true)
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
                if (this.posts[i].id === e.target.id) {
                    this.posts.splice(i, 1)
                    break;
                }
            }
            this.render()
        })
    }

    handleClick(e) {
        e.preventDefault()
        if (e.target.classList.contains('delete-post')) {
           	this.deletePost(e)
            alert("post deleted!")
        } else if (e.target.classList.contains('create-comment')){
            this.createComment(e)
            alert("comment posted")
        }
    }

    createComment(e){
        const value = e.target.previousElementSibling.value ? e.target.previousElementSibling.value : "unspecified comment"
        const postId = e.target.getAttribute("data-id")

        this.commentsAdapter.createComment(value, postId)
            .then(comment => {
                const commentAttributes = comment.data.attributes;
                const newComment = new Comment(commentAttributes.text, commentAttributes.id, commentAttributes.post_id)

                for (let i = 0; i < this.posts.length; i++) {
                    if (this.posts[i].id === postId) {
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
            comments.forEach(comment => allcomments.push(new Comment(comment.attributes.text, comment.id, comment.attributes.post_id)))
            console.log(allcomments)
        })
    }

    render(){
        this.postsContainer.innerHTML = this.posts.map(post => post.renderLi()).join('')
    }
    }

  

    
    // handlePostClick(e){
    //    this.togglePosts(e)
    // }
    // togglePosts(e){
    //     const li = e.target
    //     li.contentEditable = true
    //     li.focus()
    //     li.classList.add('editable')
    // }
    // updatePost(e){
    //     const li = e.target
    //     li.contentEditable = false
    //     li.classList.remove('editable')
    //     const newValue = li.innerHTML
    //     const id = li.dataset.id
    //    // console.log(id)
    //     this.adapter.updatePost(newValue, id).then(post => {
    //         this.posts.push(post)
    // })}
