module.exports = {

    posts: [
        {
            id:"gsaagfg",
            title:"titulo qualquer",
            description: "lorem ipsum"
        }
    ],

    getAll(){
        return this.posts;
    },

    newPost(title,description){
        this.posts.push({id: generatedID(), title, description})
    }

    


}

function generatedID() {
    return Math.random().toString(36).substr(2,9)
}