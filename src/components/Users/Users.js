import React from "react";
import classes from './Users.module.css'
import classNames from 'classnames'
import Preloader from "../common/Preloader/Preloader";
import User from "./User/User";

let Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) pages.push(i);
    let users = props.users.map(u => <User key={u.id} user={u} follow={props.follow}
                                           unfollow={props.unfollow}
                                           followingInProgress ={props.followingInProgress}
    />);
    return (
        <div>
            {props.isFetching ? <Preloader/> : null}
            {
                pages.map(p => {
                    return <span
                        className={classNames(props.currentPage === p && classes.selectedPage, classes.pageNumber)}
                        onClick={() => {
                            props.onPageChanged(p);
                        }} key={p}>{` ${p} `}</span>
                })
            }
            {users}
        </div>
    )

}

export default Users;