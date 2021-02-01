import React from "react";
import User from "./User/User";
import * as axios from "axios";
import classes from './Users.module.css'
import classNames from 'classnames'

class Users extends React.Component {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items);
                //this.props.setTotalUserCount(response.data.totalCount);
                this.props.setTotalUserCount(response.data.totalCount);
            })
    }

    onPageChanged(currentPage){
        this.props.setCurrentPage(currentPage);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items);
            })
    }

    render() {
        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
        let pages = [];
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i);
        }
        let users = this.props.users.map(u => <User key={u.id} user={u} follow={this.props.follow}
                                                    unfollow={this.props.unfollow}/>);
        return (
            <div>
                {
                    pages.map(p => {
                        return <span className={classNames(this.props.currentPage === p && classes.selectedPage, classes.pageNumber)}
                        onClick={()=>{this.onPageChanged(p);}}>{` ${p} `}</span>
                    })
                }
                {users}
            </div>
        )
    }
}

export default Users;