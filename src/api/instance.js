import * as axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    //headers: {"API-KEY":"d62c4400-0e96-4d36-b89a-814554ffb0c8"}
});

export default instance;