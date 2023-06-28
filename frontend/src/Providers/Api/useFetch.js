import {useEffect, useState} from "react";
import axios from "axios";

export const useFetch = (method, url, body) => {
    const [isLoading, setIsLoading] = useState(false);
    const [apiData, setApiData] = useState(null);
    const [serverError, setServerError] = useState(null);

    useEffect(() => {
        setIsLoading(true);
        const fetchData = async () => {
            const headers = body === undefined ? {} : {"Content-type":"application/json"};
            try {
                const resp = await axios(url,{
                    headers,
                    body:JSON.stringify(body === undefined ? {} : body),
                    method
                });

                const data = await resp?.data;
                console.log(data)
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

