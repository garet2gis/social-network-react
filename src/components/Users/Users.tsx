import React from "react";
import Preloader from "../common/Preloader/Preloader";
import User from "./User/User";
import Pagination from "../common/Pagination/Pagination";
import styled from "styled-components";
import {UserType} from "../../types/types";


const createPaginator = (totalUsersCount : number, pageSize : number, currentPage : number, onPageChanged : (currentPage:number) => void) => {
    return <Pagination totalItemsCount={totalUsersCount}
                       pageSize={pageSize}
                       currentPage={currentPage}
                       onPageChanged={onPageChanged}
                       portionSize={6}
    />
}

const UsersWrapper = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap:wrap;
    justify-content:space-evenly;
    flex-grow:2;
    margin: 10px 0px;
`

const UsersPageWrapper = styled.div`
    display: flex;
    flex-direction: column;
    flex-grow:1;
`


type PropsType = {
    users: Array<UserType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: Array<number>

    follow : (userId: number) =>void
    unfollow: (userId: number) => void
    onPageChanged: (currentPage : number)=>void
    requestUsers : (currentPage:number, pageSize:number)=>void
}

let Users : React.FC<PropsType> = (props) => {
    let users = props.users.map(u => <User key={u.id} user={u} follow={props.follow}
                                           unfollow={props.unfollow}
                                           followingInProgress={props.followingInProgress}
    />);
    if (props.isFetching) {
        return <Preloader marginTop = '10%'/>;
    }
    return (
        <UsersPageWrapper>
            {createPaginator(props.totalUsersCount, props.pageSize, props.currentPage, props.onPageChanged)}
            <UsersWrapper>
                {users}
            </UsersWrapper>
            {createPaginator(props.totalUsersCount, props.pageSize, props.currentPage, props.onPageChanged)}
        </UsersPageWrapper>
    )
}

export default Users;