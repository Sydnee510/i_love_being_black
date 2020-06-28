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
            body: JSON.stringify({ post }),
        }).then(res => res.json())
    }
    deletePost(val, url) {
        return fetch(this.baseUrl + '/' + val, {
          method: 'delete'
        })
        .then(response => response.json());
      }
    // deletePost(value, id){
    //     const post = {
    //         content: value,
    //     }
    //    return fetch(this.baseUrl/`${id}`, {
    //         method: "DELETE",
    //         headers: {
    //             'content-type': 'application/json'
    //         },
    //         body: JSON.stringify({ post }),
    // })
    // .then(res => res.json()
    // .then(json => {
    //     return json;
    //   }))
    //         // e.target.parentElement.remove();
    // }

    
    // solve(button){
    //     button.addEventListener('click', function(e){
    //         e.preventDefault()
    //         fetch(`http://localhost:3000/posts/${e.target.parentNode.dataset.id}`, {
    //                 method: "DELETE"
    //         })
    //                 e.target.parentElement.remove();
    //     })
    // }

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
}