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
import usersAPI from "../../api/usersAPI";

class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.toggleFetching(true);
        usersAPI.getUsers(this.props.currentPage, this.props.pageSize)
            .then(data => {
                    this.props.toggleFetching(false);
                    this.props.setUsers(data.items);
                    this.props.setTotalUserCount(data.totalCount);
                })
    }
    onPageChanged = (currentPage) => {
        this.props.setCurrentPage(currentPage);
        this.props.toggleFetching(true);
        usersAPI.getUsers(currentPage,this.props.pageSize)
            .then(data => {
                this.props.toggleFetching(false);
                this.props.setUsers(data.items);
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