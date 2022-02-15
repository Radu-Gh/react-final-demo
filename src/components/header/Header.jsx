import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header(props) {
    return(
        <header className="border-bottom mb-3">
            <div className="container-fluid container-min-max-width d-flex justify-content-around align-items-center">
                <Link to="/" className="my-3">
                    Acasa
                </Link>
                <Link to="/people" className='my-3' >
                    Persoane
                </Link>
            </div>
        </header>
    );
}

export default Header;