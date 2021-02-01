import {connect} from "react-redux";
import {
    followAC,
    setCurrentPageAC,
    setTotalUserCountAC,
    setUsersAC,
    toggleFetchingAC,
    unfollowAC
} from "../../redux/users-reducer";
import Users from "./Users";
import React from "react";
import * as axios from "axios";

class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.toggleFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.toggleFetching(false);
                this.props.setUsers(response.data.items);
                this.props.setTotalUserCount(response.data.totalCount);
            })
    }
    onPageChanged = (currentPage) => {
        this.props.setCurrentPage(currentPage);
        this.props.toggleFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.toggleFetching(false);
                this.props.setUsers(response.data.items);
            })
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
        isFetching: state.usersPage.isFetching
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followAC(userId))
        },
        unfollow: (userId) => {
            dispatch(unfollowAC(userId))
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users))
        },
        setCurrentPage: (currentPage) => {
            dispatch(setCurrentPageAC(currentPage))
        },
        setTotalUserCount: (totalCount) => {
            dispatch(setTotalUserCountAC(totalCount))
        },
        toggleFetching:(isFetching)=>{
            dispatch(toggleFetchingAC(isFetching))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);