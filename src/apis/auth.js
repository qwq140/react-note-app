import api from "./api";

const ENDPOINT = '/api/v1/auth'
export const fetchLogin = async (data) => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    try {
        const response = await api.post(`${ENDPOINT}/login`, data);
        return response.data;
    } catch (error) {
        if(error.response.data) {
            return error.response.data;
        }
        alert(error);
    }
}

export const fetchJoin = async (data) => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    try {
        const response = await api.post(`${ENDPOINT}/join`, data);
        return response.data;
    } catch (error) {
        if(error.response.data) {
            return error.response.data;
        }
        alert(error);
    }
}

