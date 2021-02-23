import profileAPI from '../api/profileAPI';

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';
const DELETE_POST = 'DELETE_POST';

const initialState = {
    posts: [
        {id: 1, message: 'hey, nibba', likesCount: 228},
        {id: 2, message: 'get the fuck out', likesCount: 9},
        {id: 3, message: 'It is my first post', likesCount: 3}
    ],
    profile: null,
    status: 'default status'
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
        default:
            return state;
    }
}

export const addPost = (newPostText) => ({type: ADD_POST, newPostText});


export const setUserProfile = (profile) =>
    ({type: SET_USER_PROFILE, profile});

export const setStatus = (status) =>
    ({type: SET_STATUS, status});

export const deletePost = (postId) =>
    ({type: DELETE_POST, postId});


export const getProfile = (userId) => async (dispatch) => {
    const data = await profileAPI.getProfile(userId);
    dispatch(setUserProfile(data));
}

export const setUserStatus = (userId) => async (dispatch) => {
    const data = await profileAPI.getStatus(userId);
    dispatch(setStatus(data));
}

export const updateUserStatus = (status) => async (dispatch) => {
    const data = await profileAPI.updateStatus(status);
    if (data.resultCode === 0)
        dispatch(setStatus(status));
}


export default profileReducer;