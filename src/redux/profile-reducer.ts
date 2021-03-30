import profileAPI from '../api/profileAPI';
import {stopSubmit} from "redux-form";
import {PhotoType, PostType, ProfileType } from '../types/types';

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';
const DELETE_POST = 'DELETE_POST';
const SAVE_PHOTO_SUCCESS = 'SAVE_PHOTO_SUCCESS';

const SET_EDIT_MODE = 'SET_EDIT_MODE';
const DISABLE_EDIT_MODE = 'DISABLE_EDIT_MODE';

const SAVE_PROFILE_SUCCESS = 'SAVE_PROFILE_SUCCESS';



const initialState = {
    posts: [
        {id: 1, message: 'It is my first post', likesCount: 18},
        {id: 2, message: 'hello there', likesCount: 9},
        {id: 3, message: 'why am i posting this?', likesCount: 3}
    ] as Array<PostType>,
    profile: null as ProfileType | null,
    status: 'default status',
    editMode: false
};

type InitialStateType = typeof initialState

const profileReducer = (state = initialState, action: any): InitialStateType => {
    switch (action.type) {
        case ADD_POST:
            return {
                ...state,
                posts: [...state.posts, {
                    id: state.posts[state.posts.length - 1].id + 1,
                    message: action.newPostText,
                    likesCount: 0
                }],
            }
        case DELETE_POST:
            return {
                ...state,
                posts: [...state.posts.filter(p => p.id !== action.postId)],
            }
        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            }
        case SET_STATUS:
            return {
                ...state,
                status: action.status
            }
        case SAVE_PHOTO_SUCCESS:
            return {
                ...state,
                profile: {...state.profile, photos: action.photos} as ProfileType
            }
        case SET_EDIT_MODE:
            return {
                ...state,
                editMode: true
            }
        case DISABLE_EDIT_MODE:
            return {
                ...state,
                editMode: false
            }
        case SAVE_PROFILE_SUCCESS:
            return {
                ...state,
                profile: action.profile
            }
        default:
            return state;
    }
}

type AddPostActionType = {
    type: typeof ADD_POST
    newPostText: string
}

export const addPost = (newPostText: string): AddPostActionType => ({type: ADD_POST, newPostText});

type SetUserProfileActionType = {
    type: typeof SET_USER_PROFILE
    profile: ProfileType
}

export const setUserProfile = (profile: ProfileType): SetUserProfileActionType =>
    ({type: SET_USER_PROFILE, profile});

type SaveProfileSuccessActionType = {
    type: typeof SAVE_PROFILE_SUCCESS
    profile: ProfileType
}

export const saveProfileSuccess = (profile: ProfileType): SaveProfileSuccessActionType =>
    ({type: SAVE_PROFILE_SUCCESS, profile});

type SetStatusActionType = {
    type: typeof SET_STATUS
    status: string
}

export const setStatus = (status: string): SetStatusActionType =>
    ({type: SET_STATUS, status});

type DeletePostActionType = {
    type: typeof DELETE_POST
    postId: number
}

export const deletePost = (postId: number): DeletePostActionType =>
    ({type: DELETE_POST, postId});

type SavePhotoSuccessActionType = {
    type: typeof SAVE_PHOTO_SUCCESS
    photos: PhotoType
}

export const savePhotoSuccess = (photos : PhotoType) :SavePhotoSuccessActionType =>
    ({type: SAVE_PHOTO_SUCCESS, photos});

type SetEditModeActionType = {
    type: typeof SET_EDIT_MODE
}

export const setEditMode = () :SetEditModeActionType =>
    ({type: SET_EDIT_MODE});

type DisableEditModeActionType = {
    type: typeof DISABLE_EDIT_MODE
}

export const disableEditMode = () :DisableEditModeActionType=>
    ({type: DISABLE_EDIT_MODE});

export const getProfile = (userId : number) => async (dispatch : any) => {
    const data = await profileAPI.getProfile(userId);
    dispatch(setUserProfile(data));
}

export const setUserStatus = (userId : number) => async (dispatch : any) => {
    const data = await profileAPI.getStatus(userId);
    dispatch(setStatus(data));
}

export const updateUserStatus = (status : string) => async (dispatch : any) => {
    try {
        const data = await profileAPI.updateStatus(status);
        if (data.resultCode === 0)
            dispatch(setStatus(status));
    } catch (error) {
        alert("Error with status");
    }
}
export const savePhoto = (photos : PhotoType) => async (dispatch : any) => {
    const data = await profileAPI.savePhoto(photos);
    if (data.resultCode === 0)
        dispatch(savePhotoSuccess(data.data.photos));
}
export const saveProfile = (profile : ProfileType) => async (dispatch : any) => {
    const data = await profileAPI.saveProfile(profile);
    if (data.resultCode === 0) {
        dispatch(saveProfileSuccess(profile));
        dispatch(disableEditMode())
    } else {
        let wrongField = data.messages[0]
            .slice(data.messages[0].indexOf(">") + 1,
                data.messages[0].indexOf(")"))
            .toLocaleLowerCase();
        dispatch(stopSubmit('profileEditForm', {contacts: {[wrongField]: data.messages[0]}}));
    }
}

export default profileReducer;