const ADD_MESSAGE = 'ADD-MESSAGE';

const initialState = {
    dialogs: [
        {id: 1, name: 'Dmitry'},
        {id: 2, name: 'Nikita'},
        {id: 3, name: 'Victor'},
        {id: 4, name: 'Konstantin'}
    ],
    messages: [
        {id: 1, message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. '},
        {id: 2, message: 'Vivamus fermentum est sed metus rutrum malesuada. Aliquam feugiat mi nec enim luctus convallis'},
        {id: 3, message: 'Aliquam tortor purus, luctus et faucibus sit amet'},
        {id: 4, message: 'Vestibulum facilisis rhoncus venenatis.'},
        {id: 5, message: 'Fusce vitae odio eu elit pharetra varius. Etiam tempor eu neque ut feugiat. '},
        {id: 6, message: 'Nulla porta et purus laoreet elementum.'},
        {id: 7, message: 'Fusce ac risus vestibulum, imperdiet enim vitae, lacinia lacus.'},
        {id: 8, message: 'Cras in molestie sapien. '},
        {id: 9, message: 'In sit amet purus sollicitudin sem elementum scelerisque interdum eu est.'},
        {id: 10, message: 'Quisque sit amet iaculis nisl, a pharetra metus.'},
        {id: 11, message: 'Suspendisse imperdiet ante at arcu molestie faucibus.'},
        {id: 12, message: 'Aliquam erat volutpat. '},
        {id: 13, message: 'Sed molestie, nisi sagittis venenatis euismod'},
        {id: 14, message: 'Nunc tristique, nisl eget eleifend dignissim, tortor mi semper urna, sed consequat nunc nisi a nisi.'},
    ]
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            return {
                ...state,
                messages: [...state.messages, {id: state.messages[state.messages.length-1].id+1, message: action.newMessageBody}]
            }
        default:
            return state
    }
}

export const addMessage = (newMessageBody) => ({type: ADD_MESSAGE, newMessageBody});

export default dialogsReducer;