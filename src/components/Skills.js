import React from 'react';

const Skills = () => {
    const skills = {
        "Programming Languages": [
            "Python",
            "Java",
            "C#",
            "C++",
            "Bash",
            "Racket",
            "SQL",
            "Go"
        ],
        "Web Development": [
            "HTML",
            "CSS",
            "JavaScript",
            "Node.js",
            "React.js",
            "Django",
            "Gorilla Mux"
        ],
        "Software / Services": [
            "Git",
            "Mockito",
            "NUnit",
            "Pandas",
            "Excel",
            "Numpy",
            "Kafka"
        ]
    };

    const categories = Object.keys(skills);

    return (
        <section id="skills">
            <h2 className="section-title">Technical Skills</h2>
            <div className="skill-wheel-container">
                {categories.map((category, index) => (
                    <div className="skill-wheel" key={category}>
                        <div className="category-node">{category}</div>
                        {skills[category].map((skill, skillIndex) => (
                            <div
                                className="skill-node"
                                key={skill}
                                style={{
                                    transform: `rotate(${skillIndex * (360 / skills[category].length)}deg) translate(70px)`, // Adjust translate distance if needed
                                }}
                                title={skill}
                            >
                                {skill}
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Skills;