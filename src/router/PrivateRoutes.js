import {Navigate, Outlet, redirect, Route} from "react-router-dom";
import {useAuth} from "../context/AuthProvider";

const PrivateRoutes = () => {
    const {isAuthenticated} = useAuth();

    return isAuthenticated ? <Outlet/> : <Navigate to="/login"/>;
}

export default PrivateRoutes;