import {useEffect, useState} from "react";
import axios from "axios";
import Swal from 'sweetalert2'


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
        headers: {}
    });
    const [response, setResponse] = useState(null);
    const [error,setError]=useState({
        mesage:"",
        statusCode:""
    });

    useEffect(() => {
        const postData = async () => {
            try {
                const result = await axios({
                    method: request.method,
                    url: request.url,
                    data: request.data,
                    headers: request.headers
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

    const post = (url, data, method = "POST",headers = {}) => {
        setRequest({ url, data, method, headers });
    };

    return { post, response,error };
};
