const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';



let store = {
    _state: {
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
            ],
            newMessageBody:''
        }
    },
    _callSubscriber() {
        console.log("lol")
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    getState() {
        return this._state;
    },
    dispatch(action) {
        if (action.type === ADD_POST) {
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likesCount: 0
            };
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber();
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.text;
            this._callSubscriber();
        } else if (action.type === ADD_MESSAGE) {
            let newMessage = {
                id: 5,
                message: this._state.dialogsPage.newMessageBody,
            };
            this._state.dialogsPage.messages.push(newMessage);
            this._state.dialogsPage.newMessageBody = '';
            this._callSubscriber();
        } else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
            this._state.dialogsPage.newMessageBody = action.body;
            this._callSubscriber();
        }
    }
}
export const addPostCreator = () => ({type: ADD_POST});

export const addMessageCreator = () => ({type: ADD_MESSAGE});

export const updateNewPostTextCreator = (text) =>
    ({type: UPDATE_NEW_POST_TEXT, text: text});

export const updateNewMessageBodyCreator = (body) =>
    ({type: UPDATE_NEW_MESSAGE_BODY, body: body});

export default store;
window.store = store; //global var