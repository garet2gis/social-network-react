import {connect} from "react-redux";
import {
    follow, getUsers,
    setCurrentPage,
    setTotalUserCount,
    setUsers,
    toggleFetching,
    unfollow
} from "../../redux/users-reducer";
import Users from "./Users";
import React from "react";
import {compose} from "redux";
import withAuthRedirect from "../../hoc/withAuthRedirect";

class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }
    onPageChanged = (currentPage) => {
        this.props.getUsers(currentPage, this.props.pageSize);
    }

    render() {
        return (
            <Users totalUsersCount={this.props.totalUsersCount}
                   pageSize={this.props.pageSize}
                   users={this.props.users}
                   follow={this.props.follow}
                   unfollow={this.props.unfollow}
                   currentPage={this.props.currentPage}
                   onPageChanged={this.onPageChanged}
                   isFetching={this.props.isFetching}
                   followingInProgress ={this.props.followingInProgress}
            />
        )
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress,
    }
}

let mapDispatchToProps = {follow, unfollow, setUsers, setCurrentPage, setTotalUserCount, toggleFetching,getUsers};

export default compose(
    withAuthRedirect,
    connect(mapStateToProps, mapDispatchToProps),
)(UsersContainer)
