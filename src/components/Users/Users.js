import React from "react";
import Preloader from "../common/Preloader/Preloader";
import User from "./User/User";
import Pagination from "../common/Pagination/Pagination";

let Users = (props) => {
    let users = props.users.map(u => <User key={u.id} user={u} follow={props.follow}
                                           unfollow={props.unfollow}
                                           followingInProgress={props.followingInProgress}
    />);
    return (
        <div>
            {props.isFetching ? <Preloader/> : null}
            <Pagination totalUsersCount={props.totalUsersCount}
                        pageSize={props.pageSize}
                        currentPage={props.currentPage}
                        onPageChanged={props.onPageChanged}/>
            {users}
        </div>
    )
}

export default Users;