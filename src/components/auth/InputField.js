import './InputFiled.css';

const InputField = ({type, placeholder, value, onChange}) => {
    return (
        <input
            className="auth-input"
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            required
        />
    )
}

export default InputField;