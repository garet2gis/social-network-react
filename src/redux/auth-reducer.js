import authAPI from "../api/authAPI";

const SET_USER_AUTH_DATA = 'SET_USER_AUTH_DATA';
const LOGIN_TO_APP = 'LOGIN_TO_APP';


const initialState = {
    id: null,
    login: null,
    email: null,
    isAuth: false
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_AUTH_DATA:
            return {
                ...state,
                ...action.data,
                isAuth: true
            }
        case LOGIN_TO_APP:
            return {
                ...state,
                id:action.id,
                isAuth: true
            }
        default:
            return state;
    }
}

export const setUserAuthData = (data) => ({type: SET_USER_AUTH_DATA, data});

export const setLoginData = (id) => ({type: LOGIN_TO_APP, id});


export const authenticate = () => (dispatch) => {
    authAPI.authenticate()
        .then(data => {
            if (data.resultCode === 0)
                dispatch(setUserAuthData(data.data));
        })
};

export const login = (loginData) => (dispatch) => {
    authAPI.login(loginData)
        .then(data => {
            if (data.resultCode === 0)
                dispatch(authenticate());
        })
};

export default authReducer;