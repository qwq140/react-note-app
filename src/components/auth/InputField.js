import './InputFiled.css';

const InputField = ({type, placeholder, value, onChange}) => {
    return (
        <input
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            required
        />
    )
}

export default InputField;