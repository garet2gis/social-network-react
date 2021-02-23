import {connect} from "react-redux";
import {
    follow, requestUsers,
    setCurrentPage,
    setTotalUserCount,
    setUsers,
    toggleFetching,
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

class UsersContainer extends React.Component {
    componentDidMount() {
        const {requestUsers,currentPage,pageSize} = this.props;
        requestUsers(currentPage, pageSize);
    }

    onPageChanged = (currentPage) => {
        const {requestUsers,pageSize} = this.props;
        requestUsers(currentPage, pageSize);
    }

    render() {
        return (
            <Users onPageChanged={this.onPageChanged} {...this.props}/>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUserCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state)
    }
}

let mapDispatchToProps = {follow, unfollow, setUsers, setCurrentPage, setTotalUserCount, toggleFetching, requestUsers};

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
)(UsersContainer)
