class Post {
    constructor(id, content, state, country, likes, comments){
        this.id = id
        this.content = content
        this.state = state 
        this.country = country 
        this.likes = likes
        this.comments = comments
    }
    renderLi(){
        return `<li data-id=${this.id}>${this.content}, ${this.state}, ${this.country}, comments: ${this.comments},  <button type="button" id=${this.id} class="delete-post"> DELETE </button> <div class="fb-like" data-href="http://localhost:3000/posts/${this.id}" data-width="" allign-text="right" data-layout="box_count" data-action="like" data-size="small" data-share="false"></div>
         <form id = "new-comment-form">
<input type = "text" id="new-comment-text" font-size: "medium;" placeholder= "comment:">
<input type = "submit" value="Comment">
</form> </li> `
    }
}


