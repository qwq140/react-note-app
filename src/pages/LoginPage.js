import AuthTemplate from "../components/auth/AuthTemplate";
import LoginForm from "../components/auth/LoginForm";
import {Link, useNavigate} from "react-router-dom";
import {fetchLogin} from "../apis/auth";
import {useAuth} from "../context/AuthProvider";

const LoginPage = () => {

    const {login} = useAuth();

    const handleLogin = async (username, password) => {
        const result = await fetchLogin({username : username, password : password});
        if(!result) return;
        if(result.code === 1) {
            login(result.data.accessToken, result.data.refreshToken);
        } else {
            alert(result.message);
        }
    }

    return (
        <AuthTemplate>
            <h1>Log In</h1>
            <LoginForm handleLogin={handleLogin}/>
            <p>Don't have an account? <Link to="/signup" className="auth-link">Sign Up</Link></p>
        </AuthTemplate>
    );
}

export default LoginPage;