import React from 'react';

const AboutMe = () => {
    return (
        <div className="about-me">
            <div className="about-me-content">
                <div className="photo-container">
                    <img src="/profile_pic.jpg" alt="Sourav Kumar" className="about-photo" />
                    <div className="social-media-links">
                        <a href="https://github.com/souravkumar0546" target="_blank" rel="noopener noreferrer">
                            <img src="icons8-github-30.png" alt="GitHub" className="social-icon" />
                        </a>
                        <a href="https://linkedin.com/in/srv0546" target="_blank" rel="noopener noreferrer">
                            <img src="icons8-linkedin-48.png" alt="LinkedIn" className="social-icon" />
                        </a>
                        <a href="mailto:souravkumar0546@gmail.com">
                            <img src="icons8-gmail-50.png" alt="Email" className="social-icon" />
                        </a>
                    </div>
                </div>
                <div className="intro-container">
                    <h1>Hi, I'm Sourav!</h1>
                    <p>
    I'm a passionate full-stack developer with a strong foundation in front-end development. I hold a B.Tech in Computer Science Engineering from IIT Bombay and have two years of experience in Software development. I enjoy building engaging user experiences and have worked on several projects that showcase my skills.
</p>                </div>
            </div>
        </div>
    );
};

export default AboutMe;