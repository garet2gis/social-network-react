import {authMe} from "./auth-reducer";

const INITIALIZING_SUCCESS = 'INITIALIZING_SUCCESS';


type InitialStateType = {
    isInitialized: boolean;
}

const initialState: InitialStateType = {
    isInitialized: false
};

const appReducer = (state = initialState, action: any):InitialStateType => {
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


type InitializedSuccessActionType = {
    type: typeof INITIALIZING_SUCCESS;
}


const setInitialized = (): InitializedSuccessActionType => ({type: INITIALIZING_SUCCESS});


export const initialize = () => (dispatch: any) => {
    let promise = dispatch(authMe());
    Promise.all([promise])
        .then(() => {
            dispatch(setInitialized());
        })
};

export default appReducer;