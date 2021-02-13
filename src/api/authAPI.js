import instance from "./instance";

const authAPI = {
    authMe: () => {
        return (
            instance.get(`auth/me`)
                .then(response => response.data)
        )
    },
    login: (loginData) => {
        return (
            instance.post(`auth/login`,loginData)
                .then(response => response.data)
        )
    }
}
export default authAPI;
