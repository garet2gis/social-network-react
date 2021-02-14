import {applyMiddleware, combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import usersReducer from "./users-reducer";
import authReducer from "./auth-reducer";
import {reducer as formReducer} from 'redux-form'
import thunk from 'redux-thunk';
import appReducer from "./app-reducer";

let reducers = combineReducers({
        profilePage: profileReducer,
        dialogsPage: dialogsReducer,
        usersPage: usersReducer,
        auth: authReducer,
        form: formReducer,
        app: appReducer
    }
);

let store = createStore(reducers, applyMiddleware(thunk));

export default store;
window.store = store;