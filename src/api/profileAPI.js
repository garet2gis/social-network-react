import instance from "./instance";

const profileAPI = {
    getProfile: (userId) => {
        return (
            instance.get(`profile/${userId}`)
                .then(response => response.data)
        )
    },
    getStatus: (userId) => {
        return (
            instance.get(`profile/status/${userId}`)
                .then(response => response.data)
        )
    },
    updateStatus: (status) => {
        return (
            instance.put(`profile/status`, {status})
                .then(response => response.data)
        )
    },
    savePhoto: (photos) => {
        const formData = new FormData();
        formData.append("image", photos);
        return (
            instance.put(`profile/photo`, formData, {
                headers: {
                    "Content-Type": "multipart/form-data"
                }
            }).then(response => response.data)
        )
    }
}

export default profileAPI;