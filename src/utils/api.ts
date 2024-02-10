import axios from "axios";

const api_key = import.meta.env.VITE_API_KEY;

const newRequest = axios.create({
    baseURL: "https://api.themoviedb.org/3",
    params: {
        api_key: api_key,
    },
    });

export default newRequest;