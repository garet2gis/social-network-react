import React from "react";
import Preloader from "../common/Preloader/Preloader";
import User from "./User/User";
import Pagination from "../common/Pagination/Pagination";
import styled from "styled-components";

const createPaginator = (totalUsersCount, pageSize, currentPage, onPageChanged) => {
    return <Pagination totalItemsCount={totalUsersCount}
                       pageSize={pageSize}
                       currentPage={currentPage}
                       onPageChanged={onPageChanged}
                       portionSize={9}
    />
}

const UsersWrapper = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap:wrap;
    justify-content:space-evenly;
`


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
            {createPaginator(props.totalUsersCount, props.pageSize, props.currentPage, props.onPageChanged)}
            <UsersWrapper>
                {users}
            </UsersWrapper>
            {createPaginator(props.totalUsersCount, props.pageSize, props.currentPage, props.onPageChanged)}
        </div>
    )
}

export default Users;