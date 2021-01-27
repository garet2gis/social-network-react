import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";


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
        this._state.profilePage = profileReducer(this._state.profilePage,action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage,action);
        this._callSubscriber();
    }
}

export default store;
window.store = store; //global var