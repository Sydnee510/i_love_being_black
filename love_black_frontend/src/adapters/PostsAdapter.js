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
    createPost(value, st, co){
        const post = {
            content: value, 
            state: st,
            country: co,
        }
        return fetch(this.baseUrl,{
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({post })
        }).then(res => res.json())
    }
}