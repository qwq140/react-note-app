import AuthTemplate from "../components/auth/AuthTemplate";
import SignupForm from "../components/auth/SignupForm";
import {Link, useNavigate} from "react-router-dom";
import {fetchJoin} from "../apis/auth";

const SignupPage = () => {

    const navigate = useNavigate();

    const handleSignup = async (username, password, nickname) => {
        const result = await fetchJoin({username, password, nickname});

        if(!result) return;

        if(result.code === 1) {
            navigate('/login');
        } else {
            alert(result.message);
        }
    }

    return (
        <AuthTemplate>
            <h1>Sign Up</h1>
            <SignupForm handleSignup={handleSignup}/>
            <p>Already have an account? <Link to="/login" className="auth-link">Log In</Link></p>
        </AuthTemplate>
    )
}

export default SignupPage;