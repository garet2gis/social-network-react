import profileAPI from '../api/profileAPI';

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';

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

export const addPost = (newPostText) => ({type: ADD_POST,newPostText});


export const setUserProfile = (profile) =>
    ({type: SET_USER_PROFILE, profile});

export const setStatus = (status) =>
    ({type: SET_STATUS, status});



export const getProfile = (userId) => (dispatch) => {
    profileAPI.getProfile(userId)
        .then(data => {
            dispatch(setUserProfile(data));
        });
}

export const setUserStatus = (userId) => (dispatch) => {
    profileAPI.getStatus(userId)
        .then(data => {
            dispatch(setStatus(data));
        });
}

export const updateUserStatus = (status) => (dispatch) => {
    profileAPI.updateStatus(status)
        .then(data => {
            if(data.resultCode === 0)
                dispatch(setStatus(status));
        });
}


export default profileReducer;