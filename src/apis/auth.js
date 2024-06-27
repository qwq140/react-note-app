import api from "./api";

const ENDPOINT = '/api/v1/auth'
export const fetchLogin = async (data) => {
    try {
        const response = await api.post(`${ENDPOINT}/login`, data);
        return response.data;
    } catch (error) {
        return error.response.data;
    }
}

export const fetchJoin = async (data) => {
    try {
        const response = await api.post(`${ENDPOINT}/join`, data);
        return response.data;
    } catch (error) {
        return error.response.data;
    }
}

