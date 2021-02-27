import instance from "./instance";

const securityAPI = {
    getCaptchaUrl: () => {
        return (
            instance.get(`security/get-captcha-url`)
                .then(response => response.data)
        )
    }
}
export default securityAPI;
