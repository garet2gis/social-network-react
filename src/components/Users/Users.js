import React from "react";
import User from "./User/User";
import classes from './Users.module.css'
import classNames from 'classnames'

let Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) pages.push(i);
    let users = props.users.map(u => <User key={u.id} user={u} follow={props.follow}
                                           unfollow={props.unfollow}/>);
    return (
        <div>
            {
                pages.map(p => {
                    return <span
                        className={classNames(props.currentPage === p && classes.selectedPage, classes.pageNumber)}
                        onClick={() => {
                            props.onPageChanged(p);
                        }}>{` ${p} `}</span>
                })
            }
            {users}
        </div>
    )

}

export default Users;