class Post {
    constructor(postJSON){
        this.id = postJSON.id
        this.content = postJSON.content
        this.state = postJSON.state 
        this.country = postJSON.country 
        this.likes = postJSON.likes
        this.data = postJSON.data
        //this.form = document.querySelector("#new-comment-form")
        this.comment = postJSON.comment
    }
    renderLi(){
        return `<li data-id=${this.id}>${this.content}, ${this.state}, ${this.country}, comments: ${this.comment},  <button type="button" id=${this.id} class="delete-post"> DELETE </button> <div class="fb-like" data-href="http://localhost:3000/posts/${this.id}" data-width="" allign-text="right" data-layout="box_count" data-action="like" data-size="small" data-share="false"></div> 
        <form id = "new-comment-form">
        <input type = "text" id="new-comment-text" font-size: "medium;" placeholder= "comment:">
        <input type = "submit" value="Comment">
        </form></li> `
    }
}



