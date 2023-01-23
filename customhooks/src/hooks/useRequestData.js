import axios from "axios";
import { useEffect, useState } from "react";
import { BASE_URL } from "../constants/constants";


export const useRequestData = (url, initialState) => {

    const [data, setData] = useState(initialState);
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(false)

    useEffect(() => {
        setIsLoading(true)
        axios
            .get(`${BASE_URL}${url}`)
            .then((response) => {
                setData(response.data);
                setIsLoading(false)
                setError(false)
            })
            .catch((error) => {
                setIsLoading(false)
                setError(true)
            });
    }, []);

    return [data, isLoading, error]
}