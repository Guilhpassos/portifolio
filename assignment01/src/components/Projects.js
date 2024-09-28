/*
 * File name: Projects.js
 * Student’s Name: Guilherme Passos Da Silva
 * StudentID: 301379110
 * Date: 2024-09-27
 */

import e_commerce from '../assets/E-commerce.jpg'; // Ensure this path is correct
import taskManagementImage from '../assets/taskManagement.jpeg'; // Ensure this path is correct
import weatherDashboardImage from '../assets/weatherDashboardImage.png'; // Ensure this path is correct
import './Projects.css';
const Projects = () => {
    return (
        <>
            <div className="pageDisplay">
                <h1 id="title">Projects</h1>
                
                <section className="projects-section">

                    <div className="project-card">
                        <img src={e_commerce} alt="E-commerce Web Application" className="project-image" />
                        <h2>E-commerce Web Application</h2>
                        <p><strong>Role:</strong> Full-Stack Developer</p>
                        <p>Developed a fully functional e-commerce web application using React for the frontend and Node.js with Express for the backend. Users can browse products, add items to their cart, and proceed to checkout. The application integrates with a payment gateway for secure transactions.</p>
                        <p><strong>Outcome:</strong> Enhanced my skills in full-stack development, including state management with Redux and database handling with MongoDB. The project received commendations for its user-friendly interface and smooth checkout process during a peer review session.</p>
                    </div>

                    <div className="project-card">
                        <img src={taskManagementImage} alt="Task Management Application" className="project-image" />
                        <h2>Task Management Application</h2>
                        <p><strong>Role:</strong> Full-Stack Developer</p>
                        <p>Created a task management application using React for the frontend and Node.js for the backend, allowing users to create, update, and delete tasks efficiently. It features user authentication and a clean, intuitive interface for task organization.</p>
                        <p><strong>Outcome:</strong> Implemented user authentication and RESTful APIs, which improved my skills in both React and Express. The application was well-received by peers for its functionality and design.</p>
                    </div>

                    <div className="project-card">
                        <img src={weatherDashboardImage} alt="Weather Dashboard" className="project-image" />
                        <h2>Weather Dashboard</h2>
                        <p><strong>Role:</strong> Frontend Developer</p>
                        <p>Developed a weather dashboard that fetches real-time data from an external weather API. The dashboard allows users to search for their city and view current weather conditions, along with a 7-day forecast. The application features responsive design and user-friendly navigation.</p>
                        <p><strong>Outcome:</strong> Improved my skills in API integration, asynchronous JavaScript, and responsive design. The project was showcased in a class demonstration, receiving positive feedback for its usability and functionality.</p>
                    </div>
                </section>
            </div>
        </>
    );
};

export default Projects;
