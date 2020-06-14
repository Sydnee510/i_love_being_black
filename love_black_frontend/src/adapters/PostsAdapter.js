class PostsAdapter {
    constructor() {
        this.baseUrl = 
        'http://localhost:3000/posts'
    }

    getPosts() {
        return fetch(this.baseUrl)
        .then(res => res.json()
        )
    }
}