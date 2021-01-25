let store = {
    state: {
        profilePage: {
            posts: [
                {id: 1, message: 'hey, nibba', likesCount: 228},
                {id: 2, message: 'get the fuck out', likesCount: 9},
                {id: 3, message: 'It is my first post', likesCount: 3}
            ],
            newPostText: 'default text'
        },
        dialogsPage: {
            dialogs: [
                {id: 1, name: 'Dima'},
                {id: 2, name: 'Lolez'},
                {id: 3, name: 'Victor'},
                {id: 4, name: 'Precol'}
            ],
            messages: [
                {id: 1, message: 'Hi!'},
                {id: 2, message: 'Who are you?'},
                {id: 3, message: 'You wanna go somewhere?'}
            ]
        }
    },
    renderEntireTree(){
        console.log("lol")
    },
    addPost(){
        let newPost = {
            id: 5,
            message: this.state.profilePage.newPostText,
            likesCount: 0
        };
        this.state.profilePage.posts.push(newPost);
        this.state.profilePage.newPostText = '';
        this.renderEntireTree();
    },
    updateNewPostText(text){
        this.state.profilePage.newPostText = text;
        this.renderEntireTree();
    },
    subscribe(observer){
        this.renderEntireTree = observer;
    }
}

export default store;
