import {connect} from "react-redux";
import {
    follow,
    setCurrentPage,
    setTotalUserCount,
    setUsers,
    toggleFetching,
    unfollow
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

let mapDispatchToProps = {follow,unfollow,setUsers,setCurrentPage,setTotalUserCount,toggleFetching};

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);