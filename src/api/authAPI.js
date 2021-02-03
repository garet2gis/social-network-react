import instance from "./instance";

const authAPI = {
    authenticate: () => {
        return (
            instance.get(`auth/me`)
                .then(response => response.data)
        )
    }
}
export default authAPI;
