import authAPI, {ResultCodesEnum, ResultCodesForCaptcha} from "../api/authAPI";
import {stopSubmit} from "redux-form";
import securityAPI from "../api/securityAPI";
import {AuthDataType, LoginDataType} from "../types/types";

const SET_USER_AUTH_DATA = 'SET_USER_AUTH_DATA';
const SET_CAPTCHA_URL_SUCCESS = 'SET_CAPTCHA_URL_SUCCESS';
const DELETE_USER_AUTH_DATA = 'DELETE_USER_AUTH_DATA';


const initialState = {
    id: null as number | null,
    login: null as string | null,
    email: null as string | null,
    isAuth: false as boolean,
    captchaUrl: null as string | null,
};

export type InitialStateType = typeof initialState;

const authReducer = (state = initialState, action: any): InitialStateType => {
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


type SetUserAuthDataType = {
    type: typeof SET_USER_AUTH_DATA;
    data: AuthDataType;
}

const setUserAuthData = (data : AuthDataType):SetUserAuthDataType => ({type: SET_USER_AUTH_DATA, data});

type SetCaptchaUrlSuccessType = {
    type:typeof SET_CAPTCHA_URL_SUCCESS;
    data:string;
}

const setCaptchaUrlSuccess = (data : string):SetCaptchaUrlSuccessType => ({type: SET_CAPTCHA_URL_SUCCESS, data});

type DeleteUserAuthDataType ={
    type:typeof DELETE_USER_AUTH_DATA;
}

const deleteUserAuthData = ():DeleteUserAuthDataType => ({type: DELETE_USER_AUTH_DATA});


export const authMe = () => async (dispatch :any) => {
    const data = await authAPI.authMe();
    if (data.resultCode === ResultCodesEnum.Success)
        dispatch(setUserAuthData(data.data));
};



export const login = (loginData : LoginDataType) => async (dispatch:any) => {
    let data = await authAPI.login(loginData);
    if (data.resultCode === ResultCodesEnum.Success)
        dispatch(authMe());
    else {
        if (data.resultCode === ResultCodesForCaptcha.CaptchaIsRequired)
            dispatch(getCaptchaUrl())
        dispatch(stopSubmit('login', {_error: data.messages.length > 0 ? data.messages[0] : 'Some error'}));
    }
};

export const logout = () => async (dispatch : any) => {
    let data = await authAPI.logout();
    if (data.resultCode === ResultCodesEnum.Success)
        dispatch(deleteUserAuthData())
};

export const getCaptchaUrl = () => async (dispatch :any) => {
    let data = await securityAPI.getCaptchaUrl();
    dispatch(setCaptchaUrlSuccess(data.url));
};

export default authReducer;