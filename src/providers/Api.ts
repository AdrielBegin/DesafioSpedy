import axios from "axios";
import { error } from "console";

export const Api = axios.create({
    baseURL: 'https://localhost:7205',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
    },
});

export const post = async (url: string, data: any) => {
    try {
        const response = await Api.post(url, data);
        return response.data;
    } catch (error) {
        throw error;
    }
}
