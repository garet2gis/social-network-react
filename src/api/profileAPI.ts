import instance from "./instance";
import {ProfileType} from "../types/types";

const profileAPI = {
    getProfile: (userId : number) => {
        return (
            instance.get(`profile/${userId}`)
                .then(response => response.data)
        )
    },
    getStatus: (userId : number) => {
        return (
            instance.get(`profile/status/${userId}`)
                .then(response => response.data)
        )
    },
    updateStatus: (status : string) => {
        return (
            instance.put(`profile/status`, {status})
                .then(response => response.data)
        )
    },
    savePhoto: (photos : any) => {
        const formData = new FormData();
        formData.append("image", photos);
        return (
            instance.put(`profile/photo`, formData, {
                headers: {
                    "Content-Type": "multipart/form-data"
                }
            }).then(response => response.data)
        )
    },
    saveProfile: (profile : ProfileType) => {
        return (
            instance.put(`profile`,profile).then(response => response.data)
        )
    }
}

export default profileAPI;