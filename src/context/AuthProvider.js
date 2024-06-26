import {createContext, useContext, useState} from "react";

// Auth context 생성
const AuthContext = createContext({});

// Auth provider
export const AuthProvider = ({children}) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const login = (accessToken, refreshToken) => {
        localStorage.setItem('accessToken', accessToken);
        localStorage.setItem('refreshToken', refreshToken);
        setIsAuthenticated(true);
    };
    const logout = () => {
        localStorage.removeItem('accessToken');
        localStorage.removeItem('refreshToken');
        setIsAuthenticated(false);
    }

    return (
        <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
}


// Auth context 훅
export const useAuth = () => useContext(AuthContext);