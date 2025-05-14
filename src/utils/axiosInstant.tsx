import axios from "axios";
const instance = axios.create({
    baseURL: "https://be-nodejs-three.vercel.app",
    timeout: 200000,
    // headers: 
});

instance.interceptors.request.use(
    function (config) {
        const tokenString = localStorage.getItem("auth_token");
        const token = tokenString ? JSON.parse(tokenString)?.split("|")[1] : null;
        config.headers["Authorization"] = "Bearer " + token;
        return config;
    },
    function (error) {
        return Promise.reject(error);
    }
);

instance.interceptors.response.use(
    function (response) {
        return response;
    },
    function (error) {
        return Promise.reject(error);
    }
);
export default instance;
