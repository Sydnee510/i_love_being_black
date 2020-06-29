class Posts {
    constructor() {
        this.posts = []
        this.adapter = new PostsAdapter()
        this.initBindingsAndEventListeners()
        this.fetchAndLoadPosts()
    }

    initBindingsAndEventListeners(){
        this.postsContainer = document.getElementById('posts-container')
        this.newPostContent = document.getElementById('new-post-content')
        this.newPostState = document.getElementById('new-post-state')
        this.newPostCountry = document.getElementById('new-post-country')
        this.newPostLikes = document.getElementById('new-post-likes')
        this.postForm = document.getElementById('new-post-form')
        this.postForm.addEventListener('submit', this.createPost.bind(this))
        //this.deleteform = document.getElementById('')
        this.postsContainer.addEventListener('click', this.deletePost.bind(this))
    //    this.postsContainer.addEventListener('dblclick', this.handlePostClick.bind(this))
    //     this.postsContainer.addEventListener('blur', this.updatePost.bind(this), true)
    }
    createPost(e){
        e.preventDefault()
        const value = this.newPostContent.value
        const st = this.newPostState.value
        const co = this.newPostCountry.value
        this.adapter.createPost(value, st, co).then(post => {
            this.posts.push(new Post(post))
            this.newPostContent.value = ''
            this.newPostState.value = ''
            this.newPostCountry.value = ''
            this.render()
            //this.deletePost()
        })
    }
    deletePost(e){
        e.preventDefault()
        // console.log('deleting')
       // document.getElementById('posts-container').addEventListener('click', function(event){
            console.dir(event);
                const isButton = event.target.nodeName === "BUTTON";
                if (!isButton) return;
                event.target.parentElement.remove();   
                this.adapter.deletePost(this.id)
                //.then(post => {
                            // this.posts.delete(post)
                            // this.render()
        //})
   // })
    }
    // solve(button){
    //     button.addEventListener('click', function(e){
    //         e.preventDefault()
    //         console.log('deleting')
    //         // this.adapter.deletePost(val).then(post => {
    //         //     // e.target.parentElement.remove();
    //         //     // this.render()
    //         // })
    //               //  e.target.parentElement.remove();
    //     })
    // }
    fetchAndLoadPosts() {
        this.adapter
        .getPosts()
        .then(posts => {
            posts.forEach(post => this.posts.push(new Post(post)))
            console.log(this.posts)
        })
        .then(() => {
            this.render()
        })
    }
   
    render(){
        this.postsContainer.innerHTML = this.posts.map(post => post.renderLi()).join('')
       //this.delete();
    }
}
    // deletePost(){
    //     //let posts = document.getElementsByClassName('posts-container')
    //     let button = document.getElementById(`${this.id}`)
    //     this.adapter.deletePost(val, id).then(post => {
    //     this.delete(button)
    //     })
    // }
    // delete(button){
    //     button.addEventListener('click', function(e){
    //      e.preventDefault()
    //      fetch(`http://localhost:3000/posts/${e.target.parentNode.dataset.id}`, {
    //                         method: "DELETE"
    //                 })
    //                         e.target.parentElement.remove();
    //             })
    // }
    // appendPost(){
    //    let posts = document.getElementsByClassName('posts-container')
    //     let li = document.createElement('li')
    //     li.setAttribute('data-id', this.id)
    //    li.setAttribute('style', "list-style-type:none")
    //    li.innerHTML = `${this.content}, ${this.state}, ${this.country}, ${this.likes}`
    //     let solveForm = `<button type="button" id="${this.id}" class="solve-post"> Solve </button>`
    //     li.insertAdjacentHTML('beforeend', solveForm)
    //     posts[0].append(li)
    //     let button = document.getElementById(`${this.id}`)
    //     this.solve(button)
    // }

    // solve(){
    //     button.addEventListener('click', function(e){
    //         e.preventDefault()
    //         console.log(deleting)
    //         // fetch(`http://localhost:3000/posts/${e.target.parentNode.dataset.id}`, {
    //         //         method: "DELETE"
    //         // })
    //                 e.target.parentElement.remove();
    //     })
    // }
    // handlePostClick(e){
    //    this.togglePosts(e)
    // }
    // togglePosts(e){
    //     const li = e.target
    //     li.contentEditable = true
    //     li.focus()
    //     li.classList.add('editable')
    // }
    // updatePost(e){
    //     const li = e.target
    //     li.contentEditable = false
    //     li.classList.remove('editable')
    //     const newValue = li.innerHTML
    //     const id = li.dataset.id
    //    // console.log(id)
    //     this.adapter.updatePost(newValue, id).then(post => {
    //         this.posts.push(post)
    // })}

//     fetchAndLoadPosts() {
//         this.adapter
//         .getPosts()
//         .then(posts => {
//             posts.forEach(post => this.posts.push(new Post(post)))
//             console.log(this.posts)
//         })
//         .then(() => {
//             this.render()
//         })
//     }
//     // empty(){
        
//     // }
   
//     render(){
//        // this.posts = []
//       // this.deletePost
//         this.postsContainer.innerHTML = this.posts.map(post => post.renderLi()).join('')
//         this.delete();
//     }
// }