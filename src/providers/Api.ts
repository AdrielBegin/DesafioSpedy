import axios from "axios";

export const Api = axios.create({
    baseURL: 'https://localhost:7200',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
    },
});

