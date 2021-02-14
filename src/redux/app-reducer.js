import {authMe} from "./auth-reducer";

const INITIALIZING_SUCCESS = 'INITIALIZING_SUCCESS';

const initialState = {
    isInitialized: false
};

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case INITIALIZING_SUCCESS:
            return {
                ...state,
                isInitialized: true
            }
        default:
            return state;
    }
}

const setInitialized = () => ({type: INITIALIZING_SUCCESS});


export const initialize = () => (dispatch) => {
    let promise = dispatch(authMe());
    Promise.all([promise])
        .then(()=>{
            dispatch(setInitialized());
        })
};

export default appReducer;