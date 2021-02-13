const ADD_MESSAGE = 'ADD-MESSAGE';

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
    ]
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            return {
                ...state,
                messages: [...state.messages, {id: 5, message: action.newMessageBody}]
            }
        default:
            return state
    }
}

export const addMessage = (newMessageBody) => ({type: ADD_MESSAGE, newMessageBody});

export default dialogsReducer;