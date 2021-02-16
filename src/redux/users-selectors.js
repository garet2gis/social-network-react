import {createSelector} from "reselect";

const getUsersSelector = (state) => {
    return state.usersPage.users;
}

// More complicated and smart selector, but useless in this program
export const getUsers = createSelector(getUsersSelector,
    (users) => {
        //some calculations
        return users.filter((u) => true);
    }
)

export const getPageSize = (state) => {
    return state.usersPage.pageSize;
}

export const getTotalUserCount = (state) => {
    return state.usersPage.totalUsersCount;
}

export const getCurrentPage = (state) => {
    return state.usersPage.currentPage;
}

export const getIsFetching = (state) => {
    return state.usersPage.isFetching;
}

export const getFollowingInProgress = (state) => {
    return state.usersPage.followingInProgress;
}

