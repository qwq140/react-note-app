import {useState} from "react";
import InputField from "./InputField";

const SignupForm = ({ handleSignup }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [nickname, setNickname] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();
        handleSignup({username, password, nickname});
    }

    return (
      <form onSubmit={onSubmit}>
          <InputField
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <InputField
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
          />
          <InputField
              type="text"
              placeholder="Nickname"
              value={nickname}
              onChange={(e) => setNickname(e.target.value)}
          />
          <button type="submit" className="auth-button">Sign Up</button>
      </form>
    );
}

export default SignupForm;