import instance from "./instance";
import {AuthDataType, LoginDataType} from "../types/types";


export enum ResultCodesEnum {
    Success = 0,
    Error = 1,
}

export enum ResultCodesForCaptcha {
    CaptchaIsRequired = 10,
}

type MeResponseType = {
    data: AuthDataType
    resultCode: ResultCodesEnum
    messages: Array<string>
}
type LoginResponseType = {
    data:{
        userId:number
    }
    resultCode: ResultCodesEnum | ResultCodesForCaptcha
    messages: Array<string>
}

type LogoutResponseType = {
    data:{
        userId:number // idk what is here
    }
    resultCode: ResultCodesEnum
    messages: Array<string>
}

const authAPI = {
    authMe: () => {
        return (
            instance.get<MeResponseType>(`auth/me`)
                .then((response) => response.data)
        )
    },
    login: (loginData: LoginDataType) => {
        return (
            instance.post<LoginResponseType>(`auth/login`, loginData)
                .then(response => response.data)
        )
    },
    logout: () => {
        return (
            instance.delete<LogoutResponseType>(`auth/login`)
                .then(response => response.data)
        )
    }
}
export default authAPI;

