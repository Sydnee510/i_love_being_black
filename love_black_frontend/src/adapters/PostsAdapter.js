class PostsAdapter {
    constructor() {
        this.baseUrl = 'http://localhost:3000'
        this.postUrl = 
        'http://localhost:3000/posts'
        this.commentUrl = 'http://localhost:3000/comments'
    }

    getPosts() {
        return fetch(this.postUrl)
        .then(res => res.json()
        )
    }
    createPost(value, st, co){
        const post = {
            content: value, 
            state: st,
            country: co,
        }
        return fetch(this.postUrl,{
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ post }),
        }).then(res => res.json())
    }

    deletePost(id){
            return fetch(`${this.postUrl}/${id}`, {
                method: 'DELETE',
                headers: {
                    'content-type': 'application/json'
                },
            }) .then(res => res.json())
        }
 }
    // updatePost(value, id){
    //     const post = {
    //         content: value,
    //     }
    //     return fetch(`${this.baseUrl}/${id}`, {
    //         method: 'PATCH',
    //         headers: {
    //             'content-type': 'application/json'
    //         },
    //         body: JSON.stringify({ post }),
    //     }) .then(res => res.json())
    // }