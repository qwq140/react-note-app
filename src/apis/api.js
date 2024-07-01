import axios from "axios";

const BASE_URL = 'http://localhost:8080';

const api = axios.create({
    baseURL : BASE_URL,
    headers : {
        'Content-Type': 'application/json',
    }
});

// 토큰을 요청 헤더에 추가
api.interceptors.request.use(config => {
    const token = localStorage.getItem('accessToken');
    if(token) {
        config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
}, error => {
    return Promise.reject(error)
});

// 응답 인터셉터
api.interceptors.response.use(
    (response) => {
        return response;
    },
    async (error) => {
        const originalRequest = error.config;
        if (error.response.status === 401 && !originalRequest._retry) {
            const refreshToken = localStorage.getItem("refreshToken");
            if(refreshToken) {
                originalRequest._retry = true;
                try {
                    const response = await axios.post('http://localhost:8080/api/v1/auth/renewal', {
                        refreshToken : refreshToken,
                    });
                    const { accessToken } = response.data.data;
                    localStorage.setItem('accessToken', accessToken);
                    originalRequest.headers['Authorization'] = `Bearer ${accessToken}`;
                    return api(originalRequest);
                } catch (err) {
                    localStorage.removeItem('accessToken');
                    localStorage.removeItem('refreshToken');
                    window.location.href = '/login';
                    return Promise.reject(err);
                }
            }

        }
        return Promise.reject(error);
    }
);
export default api;