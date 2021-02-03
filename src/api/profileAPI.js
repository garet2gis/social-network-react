import instance from "./instance";

const profileAPI = {
    getProfile: (userId = 2) => {
        return (
            instance.get(`profile/${userId}`)
                .then(response => response.data)
        )
    }
}

export default profileAPI;