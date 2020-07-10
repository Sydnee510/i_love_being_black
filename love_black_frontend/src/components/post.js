class Post {
    constructor(id, content, state, country, likes, comments){
        this.id = id
        this.content = content
        this.state = state 
        this.country = country 
        this.likes = likes
        this.comments = comments
    }
    renderComments(comments) {
        let cmtString = ''

        if (!comments) return cmtString;

        comments.forEach(comment => {
            cmtString += `<p><i>${comment.text}</i></p>`
        });

        return cmtString;
    }
    renderLi(){
        return `<li data-id=${this.id}>${this.content}, ${this.state}, ${this.country}, <br> <br> comments: ${this.renderComments(this.comments)} <br><button type="button" id=${this.id} class="delete-post"> DELETE </button>
         <form id="new-comment-form-${this.id}">
<input type="text" data-id="new-comment-text" placeholder="comment:">
<input type="submit"  class="create-comment" data-id=${this.id} value="Comment">
</form> </li> `
    }
}


