import instance from "./instance";
import {UserType} from "../types/types";
import {ResultCodesEnum} from "./authAPI";



type GetUsersResponseType = {
    items : Array<UserType>
    totalCount: number
    error:string | null
}

type FollowUnfollowResponseType = {
    data:{
        userId:number // idk what is here
    }
    resultCode: ResultCodesEnum
    messages: Array<string>
}

const usersAPI = {
    getUsers: (currentPage = 1,pageSize = 10) => {
        return (
            instance.get<GetUsersResponseType>(`users?page=${currentPage}&count=${pageSize}`)
                .then(response => response.data)
        )
    },
    follow: (userId : number) => {
        return (
            instance.post<FollowUnfollowResponseType>(`follow/${userId}`)
                .then(response => response.data)
        )
    },
    unfollow: (userId : number) => {
        return (
            instance.delete<FollowUnfollowResponseType>(`follow/${userId}`)
                .then(response => response.data)
        )
    }
}
export default usersAPI;