const SET_USER_AUTH_DATA = 'SET_USER_AUTH_DATA';

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
        default:
            return state;
    }
}

export const setUserAuthData = (data) => ({type: SET_USER_AUTH_DATA, data});

export default authReducer;