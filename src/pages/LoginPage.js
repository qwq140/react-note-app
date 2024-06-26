import AuthTemplate from "../components/auth/AuthTemplate";
import LoginForm from "../components/auth/LoginForm";
import {Link} from "react-router-dom";

const LoginPage = () => {
    return (
        <AuthTemplate>
            <h1>Log In</h1>
            <LoginForm/>
            <p>Don't have an account? <Link to="/signup" className="auth-link">Sign Up</Link></p>
        </AuthTemplate>
    );
}

export default LoginPage;