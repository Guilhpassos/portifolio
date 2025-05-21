/*
 * File name: services.css
   Name: Guilherme Passos Da Silva
  */
 

import webDevelopmentImage from '../assets/webDevelopment.png'; // Replace with your actual image path
import softwareDevelopmentImage from '../assets/softwareDevelopmentImage.png'; // Replace with your actual image path
import databaseManagementImage from '../assets/databaseManagementImage.jpg'; // Replace with your actual image path
import apiIntegrationImage from '../assets/apiIntegrationImage.jpg'; // Replace with your actual image path
import cloudSolutionsImage from '../assets/cloudSolutionsImage.jpg'; // Replace with your actual image path
import problemSolvingImage from '../assets/problemSolvingImage.png'; // Replace with your actual image path
import businessCommunicationImage from '../assets/businessCommunicationImage.jpeg'; // Replace with your actual image path
import './services.css';

const Services = () => {
    return (
        <>
            <div className="pageDisplay">
                <h1 id="title">Knowledge</h1>
                <p>An overview of my technical experience I have developed through hands-on work in software engineering and web development.</p>
                <section className="services-section">
                    {/* Web Development */}
                    <div className="service-card">
                        <img src={webDevelopmentImage} alt="Web Development" className="service-image" />
                        <h2>Web Development</h2>
                        <p>I have hands-on experience building responsive and interactive websites using HTML5, CSS3, JavaScript, and TypeScript, with a strong focus on user experience, design principles, and front-end functionality. I’ve also worked with React, Node.js, Express.js, and tools like NPM, Git, and GitHub to streamline development workflows.</p>
                    </div>

                    {/* Software Development */}
                    <div className="service-card">
                        <img src={softwareDevelopmentImage} alt="Software Development" className="service-image" />
                        <h2>Software Development</h2>
                        <p>I’ve gained practical experience in developing scalable, efficient applications using C#, Python, and Java. My background also includes working with frameworks and libraries such as .NET, TensorFlow, Keras, Pandas, and NumPy, applying them in academic and project-based environments.</p>
                    </div>

                    {/* Database Management */}
                    <div className="service-card">
                        <img src={databaseManagementImage} alt="Database Management" className="service-image" />
                        <h2>Database Management</h2>
                        <p>With knowledge in both relational and NoSQL databases, I’ve worked with MySQL, Microsoft SQL Server, Oracle, and MongoDB. This includes experience in database design, optimization, querying, and data management strategies for diverse applications.</p>
                    </div>

                    {/* API Integration */}
                    <div className="service-card">
                        <img src={apiIntegrationImage} alt="API Integration" className="service-image" />
                        <h2>API Integration</h2>
                        <p>I’ve integrated external APIs into various projects using tools like Postman and Express.js, allowing applications to connect services, gather data, and improve functionality. I understand RESTful architecture and the role of APIs in modern web ecosystems.</p>
                    </div>

                    {/* Cloud Solutions */}
                    <div className="service-card">
                        <img src={cloudSolutionsImage} alt="Cloud Solutions" className="service-image" />
                        <h2>Cloud Solutions</h2>
                        <p>I have introductory knowledge of AWS and cloud-based application deployment, focusing on scalability and reliability. I’ve also worked with PowerShell and version control systems like Git, supporting collaborative development and deployment processes.</p>
                    </div>

                    {/* Problem-Solving & Debugging */}
                    <div className="service-card">
                        <img src={problemSolvingImage} alt="Problem Solving & Debugging" className="service-image" />
                        <h2>Problem-Solving & Debugging</h2>
                        <p>I approach debugging with a systematic mindset, using tools and techniques to identify and resolve issues across multiple languages. My experience spans troubleshooting in JavaScript, C#, Python, and Java, ensuring code reliability and performance.</p>
                    </div>

                    {/* Advanced Business Communication */}
                    <div className="service-card">
                        <img src={businessCommunicationImage} alt="Advanced Business Communication" className="service-image" />
                        <h2>Advanced Business Communication</h2>
                        <p>Alongside technical skills, I’ve developed strong communication abilities through team-based projects and coursework. I prioritize clarity, collaboration, and professionalism to ensure shared understanding across technical and non-technical stakeholders.</p>
                    </div>
                </section>
                <br></br>
                <p>This portfolio reflects the areas of knowledge I’ve built through education, projects, and hands-on practice — And looking forward to learn more.</p>
            </div>
        </>
    );
};

export default Services;
