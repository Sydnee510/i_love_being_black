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
    }
    createPost(e){
        e.preventDefault()
        const value = this.newPostContent.value
        const st = this.newPostState.value
        const co = this.newPostCountry.value
        this.adapter.createPost(value, st, co).then(post => {
            this.posts.push(new Post(post))
            this.render()
        })
    
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