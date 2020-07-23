class PostsAdapter {
    constructor() {
        this.postUrl = 
        'http://localhost:3000/posts'
    }

    getPosts() {
        return fetch(this.postUrl)
        .then(res => res.json())
        .then(json => json.data)
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