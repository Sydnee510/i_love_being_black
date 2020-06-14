class Post {
    constructor(postJSON){
        this.id = postJSON.id
        this.content = postJSON.content
        this.state = postJSON.state 
        this.country = postJSON.country 
        this.likes = postJSON.likes
    }
}