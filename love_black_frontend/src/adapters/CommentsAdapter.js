class CommentsAdapter {
    constructor() {
        this.commentUrl = 'http://localhost:3000/comments'
    }

    getComments(){
        return fetch(this.commentUrl)
        .then(resp => resp.json())
        .then(json => json.data)
    }

    postComments(data) {
        return fetch(this.commentURL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })
        .then(resp => resp.json())
        .catch(err => alert(err))
    }
}