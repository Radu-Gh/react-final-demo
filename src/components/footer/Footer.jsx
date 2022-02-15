import React from 'react';
import { ReactComponent as Phone } from '../../assets/icons/phone.svg';
import { ReactComponent as Mail } from '../../assets/icons/mail.svg';
import { ReactComponent as GitHub } from '../../assets/icons/github.svg';
import { ReactComponent as LinkedIn } from '../../assets/icons/linkedin.svg';
import './Footer.css';

function Footer() {
    return(
        <footer className="pt-3 mt-3 bg-light">
            <div className="container-fluid container-min-max-width d-flex justify-content-around">
                <div className="footer-group">
                    <h3 className="h5">Contactează-mă:</h3>
                    <p className="m-0">
                        <a href="mailto:radugheorghe137@gmail.com">
                            <Mail className="mr-1 mb-1 footer-icon"/>
                            radugheorghe137@gmail.com
                        </a>
                    </p>
                    <p className="m-0"><Phone className="mr-1 footer-icon"/>+40730744437</p>
                </div>
                <div className="footer-group">
                    <h3 className="h5">Contactează-mă:</h3>
                    <p className="m-0">
                        <a href="https://github.com/Radu-Gh">
                            <GitHub className="mr-1 mb-1 footer-icon"/>
                            Radu-Gh
                        </a>
                    </p>
                    <p className="m-0">
                        <a href="https://www.linkedin.com/in/radu-gheorghe/">
                            <LinkedIn className="mr-1 footer-icon"/>
                            radu-gheorghe
                        </a>
                    </p>
                </div>
            </div>
            <div className="text-center py-3">
                &copy; Radu Gheorghe, 2022
            </div>
        </footer>
    );
}

export default Footer;