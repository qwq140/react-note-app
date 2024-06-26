import './AuthTemplate.css';
const AuthTemplate = ({children}) => {
    return (
        <div className="auth-container">
            {children}
        </div>
    )
}

export default AuthTemplate;