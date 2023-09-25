import {useEffect, useState} from "react";
import axios from "axios";
import {toast} from "react-toastify";
import Swal from 'sweetalert2'

export const getAuthToken = () => {
    return window.localStorage.getItem('auth_token');
};
export const getUser=()=>{
    return localStorage.getItem('user');
}
export const getUserId=()=>{
    return localStorage.getItem('user_id');
}


export const setAuthToken = (token,id) => {
    window.localStorage.setItem('auth_token', token);
    console.log(id);
    return window.localStorage.setItem("user_id",id);

};
export const removeAuthToken = () => {
    window.localStorage.removeItem('auth_token');
    window.localStorage.removeItem('user');
};

export const useAxiosGet = (url) => {
    const [isLoading, setIsLoading] = useState(false);
    const [apiData, setApiData] = useState(null);
    const [serverError, setServerError] = useState(null);

    useEffect(() => {
        setIsLoading(true);

        const fetchData = async () => {
            try {
                const response = await axios.get(url);
                const data = response?.data;
                setApiData(data);
            } catch (error) {
                setServerError(error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchData();
    }, [url]);

    return { isLoading, apiData, serverError };
};

export const useAxiosPost = () => {
    const [request, setRequest] = useState({
        data: null,
        url: null,
        method: "POST",
        headers: {} // Initialize headers as an empty object
    });
    const [response, setResponse] = useState(null);
    const [error,setError]=useState({
        mesage:"",
        statusCode:""
    });

    useEffect(() => {
        const postData = async () => {
            try {
                const result = await axios.post(request.url, request.data, {
                    headers: request.headers // Include the custom headers
                });
                setResponse(result.data);

            } catch (error) {
                console.error(error);


                Swal.fire({
                    title: `(${error.response.data.statusCode}) error has occured`,
                    text:`${error.response.data.message} (${error.response.data.statusCode})`,
                    icon: "error",
                    buttons: {
                        cancel: "Cancel",
                        confirm: "Okay"
                    },
                    closeOnClickOutside: false
                });
            }
        };

        if (request.data && request.url) {
            postData();
        } else {
            console.log('Invalid arguments provided to post method');
        }
    }, [request]);

    const post = (url, data, headers = {}, method = "POST") => {
        setRequest({ url, data, method, headers });
    };

    return { post, response,error };
};
