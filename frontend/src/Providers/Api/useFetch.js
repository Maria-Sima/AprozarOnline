import {useEffect, useState} from "react";
import axios from "axios";

export const useAxiosGet = ( url) => {
    const [isLoading, setIsLoading] = useState(false);
    const [apiData, setApiData] = useState(null);
    const [serverError, setServerError] = useState(null);

    useEffect(() => {
        setIsLoading(true);
        const fetchData = async () => {

            try {
                const resp = await axios.get(url);

                const data = resp?.data;
                console.log(data);
                setApiData(data);
                setIsLoading(false);
            } catch (error) {
                setServerError(error);
                setIsLoading(false);
            }
        };

        fetchData();
    }, []);

    return { isLoading, apiData, serverError };
};
export const useAxiosPost=(url,data)=> {
    const [request, setRequest] = useState({
        data: null,
        url: null,

    });

    useEffect(() => {
        const postData = () => {
            axios
                .post(request.url, request.data)
                // .then(res => request.callback(res.data))
                .catch(err => console.error(err));
        };

        if (request.data && request.url) {
            postData();
        } else {
            console.log('Invalid arguments provided to post method');
        }
    }, [request]);
    const post = (url, data) => {
        setRequest({url, data});
    }
    return post;
}
