import React, {useState} from 'react';

const Projects = () => {
  const [progress, setProgress] = useState(0);
  const [isDownloading, setIsDownloading] = useState(false);
  const handleDownload = (event) => {
    event.preventDefault(); // Prevent the default anchor click behavior
    setIsDownloading(true);
    setProgress(0); // Reset progress
  
    // Simulate a download process
    const interval = setInterval(() => {
      setProgress((prev) => {
        // Define a base increment, you can adjust this value
        const increment = Math.floor(Math.random() * 10) + 1; // Random increment between 1 to 10
        const nextProgress = prev + increment;
  
        // Ensure progress does not exceed 100%
        if (nextProgress >= 100) {
          clearInterval(interval);
          setIsDownloading(false); // Reset state after completion
          triggerDownload(); // Start download after animation
          return 100; // Ensure it ends at 100%
        }
  
        return nextProgress; // Increment progress
      });
    }, 100); // Adjust the timing as necessary
  };

  // Function to trigger the download
  const triggerDownload = () => {
    // Trigger the download
    const downloadLink = document.createElement('a');
    downloadLink.href = '/Sourav_Kumar_CV.pdf'; // Path to your PDF file
    downloadLink.download = 'Sourav_Kumar_CV.pdf'; // Filename for the downloaded file
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };

  return (
    <section id="projects" className="projects-section">
      <h2 className="section-title">My Projects</h2>
      <div className="projects-grid">
        <div className="project-card">
          <h3>Task Manager</h3>
          <p>A task management app with CRUD operations, user authentication, task filtering, and profile management using React and Go.</p>
          <a href="https://github.com/souravkumar0546/TaskManager" target="_blank" rel="noopener noreferrer" className="project-button">Code</a>
<a href="https://tasktrackhub.netlify.app/" target="_blank" rel="noopener noreferrer" className="project-button" style={{ marginLeft: '20px' }}>Live Demo</a>
        </div>

        <div className="project-card">
          <h3>Crypto-Betting Web App</h3>
          <p>A one-player trading game built with ReactJS where the player bets on the BTC/USDT price movement in real-time. Integrated Binance API for continuous updates via WebSocket streams.</p>
          <a href="https://bitcoinbet.netlify.app/" target="_blank" rel="noopener noreferrer" className="project-button">Live Demo</a>
        </div>

        <div className="project-card">
          <h3>Flight Notification System</h3>
          <p>Real-time flight status notification system using React and Django, integrated with Apache Kafka and MongoDB for real-time user subscriptions.</p>
          <a href="https://github.com/souravkumar0546/FlightNotificationSystem" target="_blank" rel="noopener noreferrer" className="project-button">Code</a>
        </div>

        <div className="project-card">
          <h3>Library Book Management System</h3>
          <p>Built for Genpact using .NET Framework, managing library book loans and automating tasks like book tracking and user management.</p>
        </div>

        <div className="project-card">
          <h3>Central Fee Billing System</h3>
          <p>Resolved a critical bug in Genpact's fee reversal API, improving transaction accuracy and reducing downtime.</p>
        </div>

        <div className="project-card">
          <h3>Auto Dealership Data Automation</h3>
          <p>Automated data entry for auto dealerships using Python scripts, significantly speeding up data processing and entry tasks.</p>
        </div>

        <div className="project-card">
          <h3>Indoor Positioning App</h3>
          <p>Developed a mobile app using React Native and C++ for indoor positioning using beacon signals and trilateration for Maker Bhavan Foundation.</p>
        </div>

        <div className="project-card">
          <h3>Question Bank Application</h3>
          <p>Created an app for generating automatic question papers with user authentication, question tagging, and analysis using the NLTK API.</p>
        </div>
      </div>

      <div className="download-resume">
        <a 
          href="#" 
          className="download-button" 
          onClick={handleDownload}
          // Disable the button if downloading
          style={{ pointerEvents: isDownloading ? 'none' : 'auto', opacity: isDownloading ? 0.6 : 1 }}
        >
          {isDownloading ? "Downloading..." : "Download Resume"}
        </a>
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