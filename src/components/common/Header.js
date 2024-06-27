import React from 'react';
import {Link, useNavigate} from 'react-router-dom';
import './Header.css';
import {useAuth} from "../../context/AuthProvider";

const Header = () => {
    const {logout} = useAuth();

    return (
        <header className="header">
            <div className="header-content">
                <Link to="/" className="logo">Notes App</Link>
                <nav className="nav-links">
                    <Link to="/" className="nav-link">Home</Link>
                    <button className="nav-link logout-button" onClick={logout}>Logout</button>
                </nav>
            </div>
        </header>
    );
};
export default Header;
