class App {
    //constructor() {
        //this.posts = new Posts()
        start(){
        const posts = new Posts()
        posts.fetchAndLoadComments()
    }
}