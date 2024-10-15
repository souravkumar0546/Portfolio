import React from 'react';

const Header = () => {
    return (
        <header className="nav-down">
            <div className="wrapper" id="wrapper">
                <div className="row">
                    <div className="small-12 large-12 columns alignCenter">
                        <nav>
                            <ul className="menu">
                                <li className="name"><a href="#about-me" style={{fontFamily:"'Times New Roman', serif"}}>Sourav Kumar</a></li>
                                <div className="nav-links">
                                    <li><a href="#skills">Skills</a></li>
                                    <li><a href="#projects">Projects</a></li>
                                    <li><a href="#contact-me">Contact me</a></li>
                                </div>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;