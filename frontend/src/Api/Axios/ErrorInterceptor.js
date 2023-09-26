import {useLocation, useNavigate} from "react-router-dom";
import {useEffect} from "react";
import axios from "axios";
import {toast} from "react-toastify";

const api = axios.create({
    baseURL: 'http://localhost:8080'
});
api.interceptors.request.use((config) => {
    return config;
});

const axiosInterceptor= api.interceptors.response.use(
    (response) => response,
    (error) => {
        const location = useLocation();
        const history = useNavigate();

        useEffect(() => {
            if (error.response) {
                if (error.response.status === 400) {
                    if (error.response.data.errors) {
                        throw error.response.data;
                    } else {
                        toast.error(`${error.response.data.message} (${error.response.data.statusCode})`);
                    }
                } else if (error.response.status === 401) {
                    toast.error(`${error.response.data.message} (${error.response.data.statusCode})`);
                } else if (error.response.status === 404) {
                    history.push('/not-found');
                } else if (error.response.status === 500) {
                    toast.error(`${error.response.data.message} (${error.response.data.statusCode})`)

                }
            }
        }, [error.response, history, location]);

        return Promise.reject(error);
    }
);
export { api, axiosInterceptor };