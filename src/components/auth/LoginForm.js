import {useState} from "react";
import InputField from "./InputField";

const LoginForm = ({handleLogin}) => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();
        handleLogin(username, password);
    }

    return (
        <form onSubmit={onSubmit}>
            <InputField
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
            />
            <InputField
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
            />
            <button type="submit" className="auth-button">Log In</button>
        </form>
    );
}

export default LoginForm;