import {createSelector} from "reselect";
import {AppStateType} from "./redux-store";

const getUsersSelector = (state : AppStateType) => {
    return state.usersPage.users;
}

// More complicated and smart selector, but useless in this program
export const getUsers = createSelector(getUsersSelector,
    (users) => {
        //some calculations
        return users.filter((u) => true);
    }
)

export const getPageSize = (state : AppStateType) => {
    return state.usersPage.pageSize;
}

export const getTotalUserCount = (state : AppStateType ) => {
    return state.usersPage.totalUsersCount;
}

export const getCurrentPage = (state: AppStateType) => {
    return state.usersPage.currentPage;
}

export const getIsFetching = (state: AppStateType) => {
    return state.usersPage.isFetching;
}

export const getFollowingInProgress = (state: AppStateType) => {
    return state.usersPage.followingInProgress;
}

