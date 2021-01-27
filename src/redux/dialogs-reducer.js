const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';

const initialState = {
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

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            let newMessage = {
                id: 5,
                message: state.newMessageBody,
            };
            state.messages.push(newMessage);
            state.newMessageBody = '';
            return state;
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.body;
            return state;
        default:
            return state;
    }
}

export const addMessageCreator = () => ({type: ADD_MESSAGE});
export const updateNewMessageBodyCreator = (body) =>
    ({type: UPDATE_NEW_MESSAGE_BODY, body: body});

export default dialogsReducer;