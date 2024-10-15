import React from 'react';

const Footer = () => {
    return (
        <section className="footer" id="footer">
            <div className="row">
                <div className="large-4 columns">
                <p className="footTitle alignCenter" style={{ fontSize: '3em', fontWeight: '400', fontStyle: 'normal', fontFamily: "'Sacramento', cursive", color: '#009933' }} >
                Sourav Kumar
                </p>
                <ul className="social-media-links">
                        <li>
                            <a href="https://github.com/souravkumar0546" target="_blank" rel="noopener noreferrer">
                                <img src="icons8-github-30.png" alt="GitHub" className="social-icon" />
                            </a>
                        </li>
                        <li>
                            <a href="https://linkedin.com/in/srv0546" target="_blank" rel="noopener noreferrer">
                                <img src="icons8-linkedin-48.png" alt="LinkedIn" className="social-icon" />
                            </a>
                        </li>
                        <li>
                            <a href="mailto:souravkumar0546@gmail.com">
                                <img src="icons8-gmail-50.png" alt="Email" className="social-icon" />
                            </a>
                        </li>
                </ul>
                <p className="madewithlove">
                        Made with <i className="fa fa-heart"></i> in India
                </p>
                </div>
            </div>
            <p style={{ textAlign: 'center', color: '#222222', fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif", marginTop: '10px' }}>
                &copy; 2024 Sourav Kumar
            </p>
        </section>
    );
};

export default Footer;