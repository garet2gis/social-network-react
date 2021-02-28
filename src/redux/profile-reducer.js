import profileAPI from '../api/profileAPI';
import {stopSubmit} from "redux-form";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';
const DELETE_POST = 'DELETE_POST';
const SAVE_PHOTO_SUCCESS = 'SAVE_PHOTO_SUCCESS';
const TOGGLE_EDIT_MODE = 'TOGGLE_EDIT_MODE';
const SAVE_PROFILE_SUCCESS = 'SAVE_PROFILE_SUCCESS';

const initialState = {
    posts: [
        {id: 1, message: 'hey, nibba', likesCount: 228},
        {id: 2, message: 'get the fuck out', likesCount: 9},
        {id: 3, message: 'It is my first post', likesCount: 3}
    ],
    profile: null,
    status: 'default status',
    editMode: false
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            return {
                ...state,
                posts: [...state.posts, {id: 5, message: action.newPostText, likesCount: 0}],
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
                profile: {...state.profile, photos: action.photos}
            }
        case TOGGLE_EDIT_MODE:
            return {
                ...state,
                editMode: !state.editMode
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

export const addPost = (newPostText) => ({type: ADD_POST, newPostText});


export const setUserProfile = (profile) =>
    ({type: SET_USER_PROFILE, profile});

export const saveProfileSuccess = (profile) =>
    ({type: SAVE_PROFILE_SUCCESS, profile});

export const setStatus = (status) =>
    ({type: SET_STATUS, status});

export const deletePost = (postId) =>
    ({type: DELETE_POST, postId});

export const savePhotoSuccess = (photos) =>
    ({type: SAVE_PHOTO_SUCCESS, photos});

export const toggleEditMode = () =>
    ({type: TOGGLE_EDIT_MODE});

export const getProfile = (userId) => async (dispatch) => {
    const data = await profileAPI.getProfile(userId);
    dispatch(setUserProfile(data));
}

export const setUserStatus = (userId) => async (dispatch) => {
    const data = await profileAPI.getStatus(userId);
    dispatch(setStatus(data));
}

export const updateUserStatus = (status) => async (dispatch) => {
    try {
        const data = await profileAPI.updateStatus(status);
        if (data.resultCode === 0)
            dispatch(setStatus(status));
    }
    catch (error){
        alert("Error with status");
    }
}
export const savePhoto = (photos) => async (dispatch) => {
    const data = await profileAPI.savePhoto(photos);
    if (data.resultCode === 0)
        dispatch(savePhotoSuccess(data.data.photos));
}
export const saveProfile = (profile) => async (dispatch) => {
    const data = await profileAPI.saveProfile(profile);
    if (data.resultCode === 0) {
        dispatch(saveProfileSuccess(profile));
        dispatch(toggleEditMode())
    }
    else{
        let wrongField = data.messages[0]
            .slice(data.messages[0].indexOf(">") + 1,
                data.messages[0].indexOf(")"))
            .toLocaleLowerCase();
        dispatch(stopSubmit('profileEditForm', {contacts:{[wrongField]:data.messages[0]}}));
    }
}

export default profileReducer;