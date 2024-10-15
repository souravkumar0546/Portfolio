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
                        {skills[category].map((skill, skillIndex) => {
                            const totalSkills = skills[category].length;
                            const rotationAngle = skillIndex * (360 / totalSkills); // Calculate rotation angle for each skill
                            const reverseRotation = -rotationAngle; // Reverse angle for the text inside

                            return (
                                <div
                                    className="skill-node"
                                    key={skill}
                                    style={{
                                        transform: `rotate(${rotationAngle}deg) translate(70px)`,
                                    }}
                                    title={skill}
                                >
                                    <div
                                        className="skill-text"
                                        style={{
                                            transform: `rotate(${reverseRotation}deg)`, // Rotate text in opposite direction
                                        }}
                                    >
                                        {skill}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Skills;