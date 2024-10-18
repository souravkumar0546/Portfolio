import React, { useState, useRef } from 'react';

const Projects = () => {
  const [progress, setProgress] = useState(0);
  const [isDownloading, setIsDownloading] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  // Create a ref for the projects section
  const projectsSectionRef = useRef(null);

  const handleDownload = (event) => {
    event.preventDefault();
    setIsDownloading(true);
    setProgress(0);

    const interval = setInterval(() => {
      setProgress((prev) => {
        const increment = Math.floor(Math.random() * 10) + 1;
        const nextProgress = prev + increment;

        if (nextProgress >= 100) {
          clearInterval(interval);
          setIsDownloading(false);
          triggerDownload();
          return 100;
        }
        return nextProgress;
      });
    }, 100);
  };

  const triggerDownload = () => {
    const downloadLink = document.createElement('a');
    downloadLink.href = '/Sourav_Kumar_CV.pdf';
    downloadLink.download = 'Sourav_Kumar_CV.pdf';
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };

  // Project data including the 'detailedDescription' and new 'techStack' field
  const projects = [
    {
      title: "Task Manager",
      content: "A task management app with CRUD operations, user authentication, task filtering, and profile management using React and Go.",
      detailedDescription: "▪ Developed a task management app with CRUD operations, cookie-based user authentication, task filtering/search, and profile management with avatar upload/update\n▪ Built the front-end with React, using reusable components and state management for efficient UI rendering\n▪ Implemented the backend in Go using Gorilla Mux, with JWT-based authentication for secure middleware",

      techStack: "React, Go, MongoDB, Node.js",
      code: "https://github.com/souravkumar0546/TaskManager",
      liveDemo: "https://tasktrackhub.netlify.app/"
    },
    {
      title: "Crypto-Betting Web App",
      content: "A one-player trading game built with ReactJS where the player bets on the BTC/USDT price movement in real-time.",
      detailedDescription: "▪ Built the entire front-end using ReactJS and created a one-player trading game wherein the player can see the real-time price of BTC/USDT and can bet on the price of the asset going either up or down in the next minute\n▪ Integrated the Binance API in the app to update the last traded price of the asset continuously through live streamsvia WebSocket APIs\n",
      techStack: "React, Binance API, WebSocket",
      liveDemo: "https://bitcoinbet.netlify.app/"
    },
    {
      title: "Flight Notification System",
      content: "Real-time flight status notification system using React and Django, integrated with Apache Kafka and MongoDB for real-time user subscriptions.",
      detailedDescription: "▪ Developed a flight status notification system using React for the frontend and Django for the backend\n▪ Integrated Apache Kafka for real-time message processing and MongoDB for scalable and efficient data storage\n▪ Implemented user subscriptions for flight status updates via email and SMS using Twilio and SMTP protocols\n",
      techStack: "React, Django, Kafka, MongoDB",
      code: "https://github.com/souravkumar0546/FlightNotificationSystem"
    },
    {
      title: "Library Book Management System",
      content: "Built for Genpact using .NET Framework, managing library book loans and automating tasks like book tracking and user management.",
      detailedDescription: "▪ Built a Library Book Management System on the .NET Framework for streamlined book borrowing and management\n▪ Implemented secure user authentication and authorization using Cookie-based Auth & Bcrypt for password hashing\n▪ Designed a user-friendly UI with role-based access, allowing admins to manage users and members to borrow books\n",
      techStack: ".NET Framework, SQL Server"
    },
    {
      title: "Central Fee Billing System",
      content: "Resolved a critical bug in Genpact's fee reversal API, improving transaction accuracy and reducing downtime.",
      detailedDescription: "▪ Resolved a fee reversal API bug by using specific error codes, boosting support efficiency and issue resolution speed\n▪ Created integration tests for the fee reversal process, ensuring accuracy in refunds, billing errors, and adjustments\n",
      techStack: ".NET Core, API Development"
    },
    {
      title: "Auto Dealership Data Automation",
      content: "Automated data entry for auto dealerships using Python scripts, significantly speeding up data processing and entry tasks.",
      detailedDescription: "▪ Created a Python script to automate data entry into an e-forms portal from accounting checks and purchase orders\n▪ Implemented a solution that iterates over a folder of 10k+ dealership data PDFs, extracts essential fields, and updates an e-forms portal via backend API calls, improving accuracy and processing efficiency of data entry\n",
      techStack: "Python, Automation\n"
    },
    {
      title: "Indoor Positioning App",
      content: "Developed a mobile app using React Native and C++ for indoor positioning using beacon signals and trilateration for Maker Bhavan Foundation.",
      detailedDescription: "▪ Developed a mobile app with React Native and C++ for locating positions inside a closed building using beacon signals\n▪ Implemented trilateration using beacon data to accurately determine indoor positions within the building\n▪ Enhanced positioning accuracy by applying a Kalman filter to effectively minimize noise in the location data\n",
      techStack: "React Native, C++, Beacons"
    },
    {
      title: "Question Bank Application",
      content: "Created an app for generating automatic question papers with user authentication, question tagging, and analysis using the NLTK API.",
      detailedDescription: "▪ Developed a user-authenticated platform that enables uploading and editing of questions using Django\n▪ Incorporated automatic paper generation feature, and a search and filter panel based on question tags\n▪ Built a language model trained on Stack Overflow dataset using NLTK API for automatic question tagging\n",
      techStack: "React, NLTK API"
    }
  ];

    // Function to handle when a project card is clicked
const handleCardClick = (project) => {
  setSelectedProject(project);

  // Scroll to the top of the #projects section
  setTimeout(() => {
    window.scrollTo({
      top: projectsSectionRef.current.offsetTop, // Scroll to the project section's top
      behavior: 'smooth', // Smooth scrolling behavior
    });
  }, 100); // Small timeout to ensure selectedProject is updated before scrolling
};
  
    // Function to handle closing the project detail
    const handleCloseDetail = () => {
      setSelectedProject(null);
    };

  return (
    <section id="projects" className="projects-section" ref={projectsSectionRef}>
      <h2 className="section-title">My Projects</h2>

      {selectedProject ? (
        // If a project is selected, show the project detail view
        <div className="project-detail">
          <button onClick={handleCloseDetail} className="close-button">X</button>

          <h2 style={{ color: '#28a745' }}>{selectedProject.title}</h2>
          <p style={{ textAlign: 'left' }}>
            <strong>Description:</strong>&nbsp;
            {selectedProject.content}
          </p>
          <p style={{ textAlign: 'left', whiteSpace: 'pre-line',   fontSize: '1em'}}>
            {selectedProject.detailedDescription}
          </p>

          <p style={{ textAlign: 'left', whiteSpace: 'pre-line',   fontSize: '1em'}}>
            <strong>Tech Stack Used:</strong> {selectedProject.techStack}
          </p>
          
          <div className="project-buttons">
          {selectedProject.code && (
              <a href={selectedProject.code} target="_blank" rel="noopener noreferrer" className="project-button">
                Code
              </a>
            )}
            {selectedProject.liveDemo && (
              <a href={selectedProject.liveDemo} target="_blank" rel="noopener noreferrer" className="project-button" style={{ marginLeft: '20px' }}>
                Live Demo
              </a>
            )}
            
          </div>
        </div>
      ) : (
        // Show the project cards if no project is selected
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div className="project-card" key={index} onClick={() => handleCardClick(project)}>
              <h3>{project.title}</h3>
              <p>{project.content}</p>
              {project.code && (
                <a href={project.code} target="_blank" rel="noopener noreferrer" className="project-button">Code</a>
              )}
              {project.liveDemo && (
                <a href={project.liveDemo} target="_blank" rel="noopener noreferrer" className="project-button" style={{ marginLeft: '20px' }}>Live Demo</a>
              )}
            </div>
          ))}
        </div>
      )}

      <div className="download-resume">
        <button 
          className="download-button" 
          onClick={handleDownload}
          style={{ pointerEvents: isDownloading ? 'none' : 'auto', opacity: isDownloading ? 0.6 : 1 }}
        >
          {isDownloading ? "Downloading..." : "Download Resume"}
        </button>
        {isDownloading && (
          <div className="progress-container">
            <div className="progress-bar">
              <div 
                className="progress" 
                style={{ width: `${progress}%` }} 
              />
            </div>
            <div className="progress-text">{progress}%</div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;