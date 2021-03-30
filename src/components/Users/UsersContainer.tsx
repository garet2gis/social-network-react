import {connect} from "react-redux";
import {
    follow, requestUsers,
    unfollow
} from "../../redux/users-reducer";
import Users from "./Users";
import React from "react";
import {compose} from "redux";
import {
    getCurrentPage,
    getFollowingInProgress,
    getIsFetching,
    getPageSize,
    getTotalUserCount,
    getUsers
} from "../../redux/users-selectors";
import {UserType} from "../../types/types";
import {AppStateType} from "../../redux/redux-store";

type MapDispatchPropsType = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    requestUsers: (currentPage: number, pageSize: number) => void
}

type MapStatePropsType = {
    users: Array<UserType>
    totalUsersCount: number,
    isFetching: boolean
    followingInProgress: Array<number>
    currentPage: number
    pageSize: number
}

type OwnPropsType = {}

type PropsType = MapDispatchPropsType & MapStatePropsType & OwnPropsType


class UsersContainer extends React.Component<PropsType> {
    componentDidMount() {
        const {requestUsers, currentPage, pageSize} = this.props;
        requestUsers(currentPage, pageSize);
    }

    onPageChanged = (currentPage: number) => {
        const {requestUsers, pageSize} = this.props;
        requestUsers(currentPage, pageSize);
    }

    render() {
        return (
            <Users onPageChanged={this.onPageChanged} {...this.props}/>
        )
    }
}

let mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUserCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state)
    }
}

let mapDispatchToProps = {follow, unfollow, requestUsers};

export default compose(
    connect<MapStatePropsType,MapDispatchPropsType,OwnPropsType,AppStateType>(mapStateToProps, mapDispatchToProps),
)(UsersContainer)