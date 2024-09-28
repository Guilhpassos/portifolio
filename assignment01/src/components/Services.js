/*
 * File name: Services.js
 * Student’s Name: Guilherme Passos Da Silva
 * StudentID: 301379110
 * Date: 2024-09-27
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
                <h1 id="title">Services</h1>
                <p>Explore the technical services I provide, leveraging my skills in web development and software engineering.</p>

                <section className="services-section">
                    {/* Web Development */}
                    <div className="service-card">
                        <img src={webDevelopmentImage} alt="Web Development" className="service-image" />
                        <h2>Web Development</h2>
                        <p>I create responsive and interactive websites using HTML, CSS, and JavaScript. My work focuses on user experience, design, and functionality.</p>
                    </div>

                    {/* Software Development */}
                    <div className="service-card">
                        <img src={softwareDevelopmentImage} alt="Software Development" className="service-image" />
                        <h2>Software Development</h2>
                        <p>With experience in C#, Python, and Java, I develop efficient, scalable software solutions for various industries and needs.</p>
                    </div>

                    {/* Database Management */}
                    <div className="service-card">
                        <img src={databaseManagementImage} alt="Database Management" className="service-image" />
                        <h2>Database Management</h2>
                        <p>Proficient in MySQL and Oracle, I offer services in database design, optimization, and management for effective data handling.</p>
                    </div>

                    {/* API Integration */}
                    <div className="service-card">
                        <img src={apiIntegrationImage} alt="API Integration" className="service-image" />
                        <h2>API Integration</h2>
                        <p>I'm skilled in integrating APIs into applications to connect different services, gather data, or enhance functionality.</p>
                    </div>

                    {/* Cloud Solutions */}
                    <div className="service-card">
                        <img src={cloudSolutionsImage} alt="Cloud Solutions" className="service-image" />
                        <h2>Cloud Solutions</h2>
                        <p>Leveraging AWS, I provide cloud-based solutions that enhance scalability and reliability for your applications.</p>
                    </div>

                    {/* Problem-Solving & Debugging */}
                    <div className="service-card">
                        <img src={problemSolvingImage} alt="Problem Solving & Debugging" className="service-image" />
                        <h2>Problem-Solving & Debugging</h2>
                        <p>I offer debugging and troubleshooting services to optimize your code and resolve issues across different programming languages.</p>
                    </div>

                    {/* Advanced Business Communication */}
                    <div className="service-card">
                        <img src={businessCommunicationImage} alt="Advanced Business Communication" className="service-image" />
                        <h2>Advanced Business Communication</h2>
                        <p>Utilizing strong communication skills, I ensure clear understanding and collaboration throughout the development process.</p>
                    </div>
                </section>

                <p>Feel free to reach out if you need assistance with any of these services!</p>
            </div>
        </>
    );
};

export default Services;
