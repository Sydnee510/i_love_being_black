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
        this.postsContainer.addEventListener('click', this.deletePost.bind(this))
    //    this.postsContainer.addEventListener('dblclick', this.handlePostClick.bind(this))
    //     this.postsContainer.addEventListener('blur', this.updatePost.bind(this), true)
    }

    createPost(e){
        e.preventDefault()
        const value = this.newPostContent.value
        const st = this.newPostState.value
        const co = this.newPostCountry.value
        this.adapter.createPost(value, st, co).then(post => {
            this.posts.push(new Post(post))
            this.newPostContent.value = ''
            this.newPostState.value = ''
            this.newPostCountry.value = ''
            this.render()
            //alert("post created!")
        })
    }

    deletePost(e){
        e.preventDefault()
        const isButton = e.target.nodeName === "BUTTON";
            if (!isButton) return;
            alert("post deleted!")
            e.target.parentElement.remove();   
            this.adapter.deletePost(e.target.id)

    }
   
    fetchAndLoadPosts() {
        //const cmts = []
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
        // .then(posts => {
        //     posts[0].attributes.comments.forEach(comment =>{
        //         const cmt = new Comment(comment.text, comment.id, comment.post_id)
        //         this.posts.push(cmt)
        //         console.log(this.posts)
        // })
    // })
        //     posts.forEach(post => this.posts.push(new Post(post)))
        //     console.log(this.posts)
        // })
    //     .then(() => {
    //         this.render()
    //     })
    // }
    fetchAndLoadComments() {
        const allcomments = []
        this.commentsAdapter.getComments()
        .then(comments => {
            comments.forEach(comment => allcomments.push(new Comment(comment.attributes.text, comment.id, comment.attributes.post_id)))
            console.log(allcomments)
        })
        // .then(() => {
        //     this.render()
        // })
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
