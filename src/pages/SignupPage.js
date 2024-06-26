import {useState} from "react";
import AuthTemplate from "../components/auth/AuthTemplate";
import SignupForm from "../components/auth/SignupForm";
import {Link} from "react-router-dom";
import NoteAppTemplate from "../components/common/NoteAppTemplate";

const SignupPage = () => {
    return (
        <AuthTemplate>
            <h1>Sign Up</h1>
            <SignupForm/>
            <p>Already have an account? <Link to="/login" className="auth-link">Sign Up</Link></p>
        </AuthTemplate>
    )
}

export default SignupPage;