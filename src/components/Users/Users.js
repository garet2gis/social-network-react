import React from "react";
import Preloader from "../common/Preloader/Preloader";
import User from "./User/User";
import Pagination from "../common/Pagination/Pagination";

let Users = (props) => {
    let users = props.users.map(u => <User key={u.id} user={u} follow={props.follow}
                                           unfollow={props.unfollow}
                                           followingInProgress={props.followingInProgress}
    />);
    if (props.isFetching) {
        return <Preloader/>;
    }
    return (
        <div>
            <Pagination totalItemsCount={props.totalUsersCount}
                        pageSize={props.pageSize}
                        currentPage={props.currentPage}
                        onPageChanged={props.onPageChanged}
                        portionSize={20}
            />
            {users}
        </div>
    )
}

export default Users;