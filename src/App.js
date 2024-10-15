import React from 'react';
import './App.css';
import AboutMe from './components/AboutMe';
import ContactMe from './components/ContactMe';
import Footer from './components/Footer';
import Header from './components/Header';
import Project from './components/Projects';
import Skills from './components/Skills';

const App = () => {
    return (
        <div className="App">
            <Header />
            <main>
                <section id="about-me">
                    <AboutMe />
                </section>
                <section id="projects">
                    <Project/>
                </section>
                <section id="skills">
                    <Skills />
                </section>
                <section id="contact-me">
                    <ContactMe />
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default App;