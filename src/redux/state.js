import {renderEntireTree} from "../render";

let state = {
    profilePage: {
        posts: [
            {id: 1, message: 'hey, nibba', likesCount: 228},
            {id: 2, message: 'get the fuck out', likesCount: 9},
            {id: 3, message: 'It is my first post', likesCount: 3}
        ]
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
}

export let addPost = (text) => {
    let newPost = {
        id:5,
        message: text,
        likesCount: 0
    };
    state.profilePage.posts.push(newPost);
    renderEntireTree(state);
}

export default state;
