import instance from "./instance";

const userAPI = {
    follow: (userId) => {
        return (
            instance.post(`follow/${userId}`)
                .then(response => response.data)
        )
    },
    unfollow: (userId) => {
        return (
            instance.delete(`follow/${userId}`)
                .then(response => response.data)
        )
    }

}
export default userAPI;