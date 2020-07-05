class App {
    constructor() {
        //this.posts = new Posts()
        const posts = new Posts()
        posts.fetchAndLoadComments()
    }
}