import authAPI from "../api/authAPI";
import {stopSubmit} from "redux-form";
import securityAPI from "../api/securityAPI";

const SET_USER_AUTH_DATA = 'SET_USER_AUTH_DATA';
const SET_CAPTCHA_URL_SUCCESS = 'SET_CAPTCHA_URL_SUCCESS';
const DELETE_USER_AUTH_DATA = 'DELETE_USER_AUTH_DATA';

const initialState = {
    id: null,
    login: null,
    email: null,
    isAuth: false,
    captchaUrl: null
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_AUTH_DATA:
            return {
                ...state,
                ...action.data,
                isAuth: true
            }
        case SET_CAPTCHA_URL_SUCCESS:
            return {
                ...state,
                captchaUrl: action.data
            }
        case DELETE_USER_AUTH_DATA:
            return {
                ...state,
                id: null,
                login: null,
                email: null,
                isAuth: false
            }

        default:
            return state;
    }
}

const setUserAuthData = (data) => ({type: SET_USER_AUTH_DATA, data});
const setCaptchaUrlSuccess = (data) => ({type: SET_CAPTCHA_URL_SUCCESS, data});
const deleteUserAuthData = () => ({type: DELETE_USER_AUTH_DATA});


export const authMe = () => async (dispatch) => {
    const data = await authAPI.authMe();
    if (data.resultCode === 0)
        dispatch(setUserAuthData(data.data));
};

export const login = (loginData) => async (dispatch) => {
    let data = await authAPI.login(loginData);
    if (data.resultCode === 0)
        dispatch(authMe());
    else {
        if (data.resultCode === 10)
            dispatch(getCaptchaUrl())
        dispatch(stopSubmit('login', {_error: data.messages.length > 0 ? data.messages[0] : 'Some error'}));
    }
};

export const logout = () => async (dispatch) => {
    let data = await authAPI.logout();
    if (data.resultCode === 0)
        dispatch(deleteUserAuthData())
};

export const getCaptchaUrl = () => async (dispatch) => {
    let data = await securityAPI.getCaptchaUrl();
    dispatch(setCaptchaUrlSuccess(data.url));
};

export default authReducer;