class Posts {
    constructor() {
        this.posts = []
        this.adapter = new PostsAdapter()
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
        })
    }
    createComments(comments) {
        let commentsArray = []
        if(comments) {
            comments.forEach(cmt => {
                commentsArray.push(new Comment(cmt));
            });
        }
        return commentsArray.sort(Comment.compare);
    }

    createComment(text) {
        let attributes = {
            text: text,
            created_at: created_at,
            post_id: this.id 
        };
        return new Comment(attributes);
    }
    deletePost(e){
        e.preventDefault()
        const isButton = e.target.nodeName === "BUTTON";
            if (!isButton) return;
            e.target.parentElement.remove();   
            this.adapter.deletePost(e.target.id)
    }
   
    fetchAndLoadPosts() {
        this.adapter
        .getPosts()
        .then(posts => {
            posts.forEach(post => this.posts.push(new Post(post)))
            console.log(this.posts)
        })
        .then(() => {
            this.render()
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
