import * as axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    //headers: {"API-KEY":"7e127611-be10-4a25-97f0-44bab15fc4c4"},
    headers: {"API-KEY":"7e14c4"}
});

export default instance;