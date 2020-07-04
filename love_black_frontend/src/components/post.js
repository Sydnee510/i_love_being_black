class Post {
    constructor(postJSON){
        this.id = postJSON.id
        this.content = postJSON.content
        this.state = postJSON.state 
        this.country = postJSON.country 
        this.likes = postJSON.likes
        this.comments = postJSON.comments
    }
    renderLi(){
        return `<li data-id=${this.id}>${this.content}, ${this.state}, ${this.country}, comments: ${this.comments},  <button type="button" id=${this.id} class="delete-post"> DELETE </button> <div class="fb-like" data-href="http://localhost:3000/posts/${this.id}" data-width="" data-layout="box_count" data-action="like" data-size="small" data-share="false"></div></li> `
    }
}



